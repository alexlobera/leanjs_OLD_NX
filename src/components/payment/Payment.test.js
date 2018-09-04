import React from 'react'
import { mount } from 'enzyme'
import waitForExpect from 'wait-for-expect'
import { Route } from 'react-router-dom'

import Root, { WithRouter } from '../../../test/utils/Root'
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
import { MockedProvider } from 'react-apollo/test-utils'


const getPaymentApiStub = () => ({
    setPublishableKey: () => { },
    card: {
        createToken: data => Promise.resolve({ id: 2 })
    }    
})

const createDefaultProps = () => {
    const payment = {
        id: '123'
    }
    const trainingInstanceId = 'zxcvb'
    const trackUserBehaviour = () => { }
    const history = {
        push: () => { }
    }
    const paymentApi = getPaymentApiStub()
    const pay = () => Promise.resolve({ data: { payment } })

    return {
        trainingInstanceId,
        trackUserBehaviour,
        paymentApi,
        history,
        pay,
    }
}


describe('<PaymentSection /> - Making payments', () => {

    fit('should make a payment', async () => {

        // mocks
        const graphQlMocks = [{
            request: {
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
            },
            result: {
                data: {
                    id: "123",
                    currency: "gbp",
                    amount: 1194,
                    metadata: {}
                },
            },
        }]

        // rendering
        const wrapper = mount(
            <Root graphQlMocks={graphQlMocks}>
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

        wrapper.find(BuyButton).simulate('click')
        wrapper.update()

        wrapper.find(NameInput).find('input').simulate('change', { target: { value: 'Joe Bloggs' } })
        wrapper.find(EmailInput).find('input').simulate('change', { target: { value: 'test@example.com' } })
        wrapper.find(CCNameInput).find('input').simulate('change', { target: { value: 'Mr J Bloggs' } })
        wrapper.find(CCNumberInput).find('input').simulate('change', { target: { value: '4242424242424242' } })
        wrapper.find(CCExpiryInput).find('input').simulate('change', { target: { value: '12/99' } })
        wrapper.find(CCCVCInput).find('input').simulate('change', { target: { value: '123' } })


        wrapper.find(SubmitPaymentFormButton).simulate('submit')


        // expectation
        await waitForExpect(() => {
            wrapper.update()
            expect(wrapper.find(PaymentSection).props().history.location.pathname).toBe("/payment-confirmation")
        });


    })

    it('should make redirect to /payment-confirmation if the payment was successful', () => {

    })
})

describe('<PaymentSection /> - Voucher functionality', () => {

    it('should display an error message, and not update the price, if the voucher is invalid', async () => {
        // mocks
        const graphQlMocks = [{
            request: {
                query: VALIDATE_VOUCHER,
                variables: {
                    voucherCode: "asd",
                    trainingInstanceId: "5aa2acda7dcc782348ea1234",
                    quantity: 1,
                },
            },
            result: {
                data: {
                    voucherGetNetPriceWithDiscount: null
                },
            },
        }]

        // rendering
        const wrapper = mount(
            <Root graphQlMocks={graphQlMocks}>
                <PaymentSection
                    data={{
                        trainingInstanceId: "5aa2acda7dcc782348ea1234",
                        price: 995,
                        ticketName: "Regular Ticket",
                        currency: "gbp",
                    }}
                />
            </Root>
        )

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
        // mocks
        const graphQlMocks = [{
            request: {
                query: VALIDATE_VOUCHER,
                variables: {
                    voucherCode: "123abc",
                    trainingInstanceId: "5aa2acda7dcc782348ea1234",
                    quantity: 1,
                },
            },
            result: {
                data: {
                    voucherGetNetPriceWithDiscount: {
                        amount: 1,
                    }
                },
            },
        }]

        // rendering
        const wrapper = mount(
            <Root graphQlMocks={graphQlMocks}>
                <PaymentSection
                    data={{
                        trainingInstanceId: "5aa2acda7dcc782348ea1234",
                        price: 995,
                        ticketName: "Regular Ticket",
                        currency: "gbp",
                    }}
                />
            </Root>
        )

        // steps
        wrapper.find(BuyButton).simulate('click')

        // initial expectation
        expect(wrapper.find(TotalPayablePrice).text()).toEqual("£1194")

        wrapper.find(ShowVoucherButton).simulate('click')
        wrapper.find('input[name="voucher"]').simulate('change', { target: { value: '123abc' } })
        wrapper.find(ValidateVoucherButton).simulate('click')

        // expectation
        await waitForExpect(() => {
            expect(wrapper.find(TotalPayablePrice).text()).toEqual("£1.2")
        });
    })
})
