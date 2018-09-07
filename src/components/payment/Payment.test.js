import React from 'react'
import { mount } from 'enzyme'
import waitForExpect from 'wait-for-expect'

import Root from '../../../test/utils/Root'
import VALIDATE_VOUCHER from './ValidateVoucher.graphql'
import PaymentSection from './PaymentSection'
import { BuyButton } from './checkout'
import {
  ShowVoucherButton,
  ValidateVoucherButton,
  TotalPayablePrice,
  VoucherInput,
} from './checkout/CheckoutForm'
import { CheckoutContainer } from './checkout/CheckoutContainer'

// TODO:WV:20180903:Refactor to integration test
/*
const createDefaultProps = () => {
    const payment = {
        id: '123'
    }
    const trainingInstanceId = 'zxcvb'
    const trackUserBehaviour = () => { }
    const history = {
        push: () => { }
    }
    const paymentApi = {
        setPublishableKey: () => { },
        card: {
            createToken: data => Promise.resolve({ id: 2 })
        }
    }
    const pay = () => Promise.resolve({ data: { payment } })

    return {
        trainingInstanceId,
        trackUserBehaviour,
        paymentApi,
        history,
        pay,
    }
}
*/

describe('<PaymentSection /> - Making payments', () => {
  it('should make a payment', async () => {
    // TODO:WV:20180903:Refactor to integration test
    /*
        // input values
        const values = {
            CCnumber: '',
            CCexpiry: '',
            CCcvc: '',
            email: '',
            name: '',
            companyName: null,
            companyVat: null,
        }

        // creating the component
        const props = createDefaultProps()
        const CheckoutContainerInstance = new CheckoutContainer(props)

        // executing the code to be tested
        const result = await CheckoutContainerInstance.pay(values)

        // assertion
        expect(result.payment.id).not.toBeFalsy()
        */
  })

  it('should make redirect to /payment-confirmation if the payment was successful', () => { })
})

describe('<PaymentSection /> - Voucher functionality', () => {
  it('should display an error message, and not update the price, if the voucher is invalid', async () => {
    // mocks
    const graphQlMocks = [
      {
        request: {
          query: VALIDATE_VOUCHER,
          variables: {
            voucherCode: 'asd',
            trainingInstanceId: '5aa2acda7dcc782348ea1234',
            quantity: 1,
          },
        },
        result: {
          data: {
            voucherGetNetPriceWithDiscount: null,
          },
        },
      },
    ]

    // rendering
    const wrapper = mount(
      <Root graphQlMocks={graphQlMocks}>
        <PaymentSection
          data={{
            trainingInstanceId: '5aa2acda7dcc782348ea1234',
            price: 995,
            ticketName: 'Regular Ticket',
            currency: 'gbp',
          }}
        />
      </Root>
    )

    // steps
    wrapper.find(BuyButton).simulate('click')

    // initial expectation
    expect(wrapper.find(TotalPayablePrice).text()).toEqual('£1194')

    wrapper.find(ShowVoucherButton).simulate('click')
    wrapper
      .find('input[name="voucher"]')
      .simulate('change', { target: { value: 'asd' } })
    wrapper.find(ValidateVoucherButton).simulate('click')

    // expectation
    await waitForExpect(() => {
      wrapper.update()
      expect(wrapper.find(TotalPayablePrice).text()).toEqual('£1194')
      expect(wrapper.find(VoucherInput).props().meta.error).toBeTruthy()
    })
  })

  it('should update total price if the voucher is correct', async () => {
    // mocks
    const graphQlMocks = [
      {
        request: {
          query: VALIDATE_VOUCHER,
          variables: {
            voucherCode: '123abc',
            trainingInstanceId: '5aa2acda7dcc782348ea1234',
            quantity: 1,
          },
        },
        result: {
          data: {
            voucherGetNetPriceWithDiscount: {
              amount: 1,
            },
          },
        },
      },
    ]

    // rendering
    const wrapper = mount(
      <Root graphQlMocks={graphQlMocks}>
        <PaymentSection
          data={{
            trainingInstanceId: '5aa2acda7dcc782348ea1234',
            price: 995,
            ticketName: 'Regular Ticket',
            currency: 'gbp',
          }}
        />
      </Root>
    )
    // steps
    wrapper.find(BuyButton).simulate('click')

    // initial expectation
    expect(wrapper.find(TotalPayablePrice).text()).toEqual('£1194')

    wrapper.find(ShowVoucherButton).simulate('click')
    wrapper
      .find('input[name="voucher"]')
      .simulate('change', { target: { value: '123abc' } })
    wrapper.find(ValidateVoucherButton).simulate('click')

    // expectation
    await waitForExpect(() => {
      expect(wrapper.find(TotalPayablePrice).text()).toEqual('£1.2')
    })
  })
})
