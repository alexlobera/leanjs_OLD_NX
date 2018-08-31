import { CheckoutContainer } from './CheckoutContainer'

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

describe('<CheckoutContainer />', () => {
    it('should make a payment', async () => {
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
    })

    it('should make redirect to /payment-confirmation if the payment was successful', () => {

    })
})