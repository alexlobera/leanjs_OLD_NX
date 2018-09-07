import React from 'react'
import { mount } from 'enzyme'
import waitForExpect from 'wait-for-expect'
import { Route } from 'react-router-dom'

import Root from '../../../test/utils/Root'
import VALIDATE_VOUCHER from './checkout/ValidateVoucher.graphql'
import VALIDATE_VIES from './checkout/ValidateVies.graphql'
import PAY from './checkout/Pay.graphql'
import PaymentSection from './PaymentSection'
import { BuyButton } from './checkout'
import {
    AddCompanyDetailsButton,
    EUVATNumberField,
    ValidateViesButton,
    ShowVoucherButton,
    ValidateVoucherButton,
    TotalPayablePrice,
    VoucherInput,
    NameInput,
    EmailInput,
    CCNameInput,
    CCNumberInput,
    CCExpiryInput,
    CCCVCInput,
    SubmitPaymentFormButton
} from './checkout/CheckoutForm'
import { CheckoutContainer } from './checkout/CheckoutContainer'
import { Alert } from '../elements'


const getPaymentApiStub = () => ({
    setPublishableKey: () => { },
    card: {
        createToken: (data, callback) => callback("test-status", { id: 2})
    }    
})

const generateDummyGraphQLRequest = type => {
    switch (type) {
        case "pay":
            return {
                query: PAY,
                variables: {
                    voucherCode: "",
                    quantity:1,
                    trainingInstanceId: "5aa2acda7dcc782348ea1234",
                    email: "test@example.com",
                    name: "Joe Bloggs",
                    token: 2,
                    vatRate: 1.2,
                    companyName: undefined,
                    companyVat: undefined
                },
            }
        case "validateVoucher":
            return {
                query: VALIDATE_VOUCHER,
                variables: {
                    voucherCode: "asd",
                    trainingInstanceId: "5aa2acda7dcc782348ea1234",
                    quantity: 1,
                },
            }
        case "validateVies":
            return {
                query: VALIDATE_VIES,
                variables: {
                    countryCode: "GB",
                    vatNumber: "GB999 9999 73",
                }
            }
    }
}

const dummyGraphQLResultData = {
    "pay": {
        id: "123",
        currency: "gbp",
        amount: 1194,
        metadata: {}
    },
    "invalidVoucher": {
        voucherGetNetPriceWithDiscount: null
    },
    "validVoucher": {
        voucherGetNetPriceWithDiscount: {
            amount: 1,
        }
    },
    "invalidVies": {
        isVatNumberValid: false
    },
    "validVies": {
        isVatNumberValid: true
    },
    "testError": {
        errors: [
            {message: "Test error"}
        ]
    }
}

const generateDummyGraphQLResult = type => ({
    data: dummyGraphQLResultData[type]
})

const getWrapperCreator = (requestType => resultType => (graphQlMocks = [{request:generateDummyGraphQLRequest(requestType), result:generateDummyGraphQLResult(resultType)}]) => () => {
    const mocks = ((Array.isArray(graphQlMocks)) ? graphQlMocks:[graphQlMocks] ).map(mock => ({
        request: mock.request?mock.request:generateDummyGraphQLRequest(requestType),
        result: mock.result?mock.result:generateDummyGraphQLResult(resultType)
    }))

    const wrapper = mount(
        <Root graphQlMocks={mocks}>
            <Route render={(props => (
                <PaymentSection
                    {...props}
                    data={{
                        trainingInstanceId: "5aa2acda7dcc782348ea1234",
                        price: 995,
                        ticketName: "Regular Ticket",
                        currency: "gbp",
                        paymentApi: getPaymentApiStub()
                    }}
                />
            ))}>

            </Route>
        </Root>
    )

    return wrapper
})

const getWrapper = (requestType, resultType, graphQlMocks = undefined) => getWrapperCreator(requestType)(resultType)(graphQlMocks)()

const getFieldChanger = wrapper => (Component, newValue) => wrapper.find(Component).find('input').simulate('change', { target: { value: newValue } })

describe('<PaymentSection /> - Making payments', () => {

    const preparePayment = wrapper => {
        wrapper.find(BuyButton).simulate('click')
        wrapper.update()

        const change = getFieldChanger(wrapper)
        change(NameInput, 'Joe Bloggs')
        change(EmailInput, 'test@example.com')
        change(CCNameInput, 'Mr J Bloggs')
        change(CCNumberInput, '4242424242424242')
        change(CCExpiryInput, '12/99')
        change(CCCVCInput, '123')        
    }

    const makePayment = async (wrapper, checkExpectations) => {

        // NB if you simulate 'click' it does not reliably trigger a 'submit' event in the parent form
        // So select the form and explicitly simulate a 'submit'.  For some reason simulating a 'submit'
        // on the button works as well, but that seems hackish so this method was used instead.
        wrapper.find(SubmitPaymentFormButton).closest('form').simulate('submit')

        return waitForExpect(() => {
            wrapper.update()
            checkExpectations(wrapper)
        });
    }

    it('should make a payment', async () => {
        const wrapper = getWrapper("pay", "pay")
        preparePayment(wrapper)
        await makePayment(wrapper, wrapper => {
            expect(wrapper.find(PaymentSection).props().history.location.pathname).toBe("/payment-confirmation")
        })
    })

    it('should reflect payment errors in the UI', async () => {
        const wrapper = getWrapper("pay", "testError")
        preparePayment(wrapper)
        const getNumWarnings = () => wrapper.find(Alert).filterWhere(element => element.props().danger).length
        expect(getNumWarnings()).toBe(0)
        await makePayment(wrapper, wrapper => {
            expect(getNumWarnings()).toBe(1)
        })
    })
})

describe('<PaymentSection /> - Company details', () => {

    const INVALID_EU_VAT_NUMBER = "XYZ123"
    const VALID_EU_VAT_NUMBER = "GB999 9999 73"

    const prepareToTestVATNumbers = (graphQLResponseValid=true) => {
        const wrapper = getWrapper("validateVies", graphQLResponseValid?"validVies":"invalidVies")

        wrapper.find(BuyButton).simulate('click')
        wrapper.find(AddCompanyDetailsButton).simulate('click')

        wrapper.update()
        const change = getFieldChanger(wrapper)

        return { wrapper, change }
    }

    const getVATNumberTester = (VATNumber, expectError) => () => {
        const { wrapper, change } = prepareToTestVATNumbers()
        const getNumErrorNodes = () => wrapper.find(EUVATNumberField).findWhere(node => (node.children().length === 0 && node.text() === "EU VAT number is not correct")).length
        expect(getNumErrorNodes()).toBe(0)
        change(EUVATNumberField, VATNumber)
        wrapper.update()
        expect(getNumErrorNodes()).toBe(expectError?1:0)
    }

    it("should flag-up invalid-format EU vat numbers", getVATNumberTester(INVALID_EU_VAT_NUMBER, true))
    it("should not flag-up valid-format EU vat numbers", getVATNumberTester(VALID_EU_VAT_NUMBER, false))

    it("should show an ellipsis while graphql is validating the vat number", () => {
        const { wrapper, change } = prepareToTestVATNumbers()
        change(EUVATNumberField, VALID_EU_VAT_NUMBER)
        wrapper.find(ValidateViesButton).simulate('click')
        wrapper.update()
        expect(wrapper.find(ValidateViesButton).text()).toBe("...")
    })

    // TODO:WV:20180907:Test what happens after the user clicks "Validate EU VAT and update taxes"
})

describe('<PaymentSection /> - Voucher functionality', () => {

    it('should display an error message, and not update the price, if the voucher is invalid', async () => {
        const wrapper = getWrapper("validateVoucher", "invalidVoucher")

        // steps
        wrapper.find(BuyButton).simulate('click')

        // initial expectation
        expect(wrapper.find(TotalPayablePrice).text()).toEqual("£1194")

        wrapper.find(ShowVoucherButton).simulate('click')
        wrapper.find('input[name="voucher"]').simulate('change', { target: { value: 'asd' } })
        wrapper.find(ValidateVoucherButton).simulate('click')

        // expectation
        await waitForExpect(() => {
            wrapper.update()
            expect(wrapper.find(TotalPayablePrice).text()).toEqual("£1194")
            expect(wrapper.find(VoucherInput).props().meta.error).toBeTruthy()
        });


    })

    it('should update total price if the voucher is correct', async () => {
        const wrapper = getWrapper("validateVoucher", "validVoucher")

        // steps
        wrapper.find(BuyButton).simulate('click')

        // initial expectation
        expect(wrapper.find(TotalPayablePrice).text()).toEqual("£1194")

        wrapper.find(ShowVoucherButton).simulate('click')
        wrapper.find('input[name="voucher"]').simulate('change', { target: { value: 'asd' } })
        wrapper.find(ValidateVoucherButton).simulate('click')

        // expectation
        await waitForExpect(() => {
            expect(wrapper.find(TotalPayablePrice).text()).toEqual("£1.2")
        });
    })
})
