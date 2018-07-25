const getURLParameter = name =>
  decodeURIComponent(
    (new RegExp(`[?|&]${name}=([^&;]+?)(&|#|;|$)`).exec(location.search) || [
      null,
      '',
    ])[1].replace(/\+/g, '%20')
  ) || null

const getQuantity = q =>
  q && !isNaN(q) && parseInt(q, 10) > 0 && parseInt(q, 10) < 31
    ? parseInt(q, 10)
    : 1

const getUrlCourseParams = (course, type) =>
  getURLParameter('course') === course && getURLParameter('type') === type
    ? {
        valid: true,
        quantity: getQuantity(getURLParameter('qty')),
        openModal: Boolean(getURLParameter('open')),
        voucher: getURLParameter('voucher'),
        company: getURLParameter('company'),
        vatCountry: getURLParameter('vatcountry'),
        vatNumber: getURLParameter('vatnumber'),
      }
    : {
        valid: false,
        quantity: 1,
        openModal: false,
      }

export const findKey = (obj, key, def, value) => {
  if (value) {
    let i

    for (i = 0; i < obj.length; i += 1) {
      if (obj[i][key] === value) break
    }

    return i < obj.length ? obj[i][key] : def
  }
  return def
}

export default getUrlCourseParams
