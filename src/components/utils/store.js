import store from 'store'
import expirePlugin from 'store/plugins/expire'
import { getURLParameter } from './url'

store.addPlugin(expirePlugin)

export const getVoucherByPathname = () => {
  if (typeof window === 'undefined') {
    return null
  }

  const voucher = getURLParameter('voucher')
  const { pathname } = window.location
  if (voucher) {
    const expiresInSevenDays = new Date().getTime() + 604800000
    store.set(pathname, voucher, expiresInSevenDays)
    return voucher
  } else {
    return store.get(pathname)
  }
}
