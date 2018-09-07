import React from 'react'
import { mount } from 'enzyme'
import waitForExpect from 'wait-for-expect'
import { Route } from 'react-router-dom'

import Root from '../../../test/utils/Root'
import VALIDATE_VOUCHER from './checkout/ValidateVoucher.graphql'
import PAY from './checkout/Pay.graphql'
import PaymentSection from './PaymentSection'
import { BuyButton } from './checkout'
import {
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
    }
}

const generateDummyGraphQLResult = type => {
    switch (type) {
        case "pay":
            return {
                data: {
                    id: "123",
                    currency: "gbp",
                    amount: 1194,
                    metadata: {}
                }
            }
        case "invalidVoucher":
            return {
                data: {
                    voucherGetNetPriceWithDiscount: null
                }
            }
        case "validVoucher":
            return {
                data: {
                    voucherGetNetPriceWithDiscount: {
                        amount: 1,
                    }
                },
            }
        case "testError":
            return {
                data: {
                    errors: [
                        {message: "Test error"}
                    ]
                }                
            }
    }

}

const getWrapperCreator = requestType => resultType => (graphQlMocks = [{request:generateDummyGraphQLRequest(requestType), result:generateDummyGraphQLResult(resultType)}]) => () => {
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
}

const getWrapper = (requestType, resultType, graphQlMocks = undefined) => getWrapperCreator(requestType)(resultType)(graphQlMocks)()

describe('<PaymentSection /> - Making payments', () => {

    it('should make a payment', async () => {
        const wrapper = getWrapper("pay", "pay")

        wrapper.find(BuyButton).simulate('click')
        wrapper.update()

        const change = (Field, newValue) => wrapper.find(Field).find('input').simulate('change', { target: { value: newValue } })
        change(NameInput, 'Joe Bloggs')
        change(EmailInput, 'test@example.com')
        change(CCNameInput, 'Mr J Bloggs')
        change(CCNumberInput, '4242424242424242')
        change(CCExpiryInput, '12/99')
        change(CCCVCInput, '123')

        // NB if you simulate 'click' it does not reliably trigger a 'submit' event in the parent form
        // So select the form and explicitly simulate a 'submit'.  For some reason simulating a 'submit'
        // on the button works as well, but that seems hackish so this method was used instead.
        wrapper.find(SubmitPaymentFormButton).closest('form').simulate('submit')


        // expectation
        await waitForExpect(() => {
            wrapper.update()
            expect(wrapper.find(PaymentSection).props().history.location.pathname).toBe("/payment-confirmation")
        });


    })

    it('should reflect payment errors in the UI', async () => {
        const wrapper = getWrapper("pay", "testError")


        wrapper.find(BuyButton).simulate('click')
        wrapper.update()

        const change = (Field, newValue) => wrapper.find(Field).find('input').simulate('change', { target: { value: newValue } })
        change(NameInput, 'Joe Bloggs')
        change(EmailInput, 'test@example.com')
        change(CCNameInput, 'Mr J Bloggs')
        change(CCNumberInput, '4242424242424242')
        change(CCExpiryInput, '12/99')
        change(CCCVCInput, '123')

        // NB if you simulate 'click' it does not reliably trigger a 'submit' event in the parent form
        // So select the form and explicitly simulate a 'submit'.  For some reason simulating a 'submit'
        // on the button works as well, but that seems hackish so this method was used instead.
        wrapper.find(SubmitPaymentFormButton).closest('form').simulate('submit')

    })

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
