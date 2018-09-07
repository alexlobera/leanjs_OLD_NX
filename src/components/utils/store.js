import store from 'store'
import { getURLParameter } from './url'

export const getVoucherByPathname = () => {
    if (typeof window === 'undefined') {
        return null
    }

    const voucher = getURLParameter('voucher')
    const { pathname } = window.location
    if (voucher) {
        store.set(pathname, voucher)
        return voucher
    } else {
        return store.get(pathname)
    }
}