const config = {
  VAT_RATE: 20,
  vatCountries: [
    { code: 'AT', name: 'Austria' },
    { code: 'BE', name: 'Belgium' },
    { code: 'BG', name: 'Bulgaria' },
    { code: 'CY', name: 'Cyprus' },
    { code: 'CZ', name: 'Czech Republic' },
    { code: 'DE', name: 'Germany' },
    { code: 'DK', name: 'Denmark' },
    { code: 'EE', name: 'Estonia' },
    { code: 'EL', name: 'Greece' },
    { code: 'ES', name: 'Spain' },
    { code: 'FI', name: 'Finland' },
    { code: 'FR', name: 'France' },
    { code: 'GB', name: 'United Kingdom' },
    { code: 'HR', name: 'Croatia' },
    { code: 'HU', name: 'Hungary' },
    { code: 'IE', name: 'Ireland' },
    { code: 'IT', name: 'Italy' },
    { code: 'LT', name: 'Lithuania' },
    { code: 'LU', name: 'Luxembourg' },
    { code: 'LV', name: 'Latvia' },
    { code: 'MT', name: 'Malta' },
    { code: 'NL', name: 'The Netherlands' },
    { code: 'PL', name: 'Poland' },
    { code: 'PT', name: 'Portugal' },
    { code: 'RO', name: 'Romania' },
    { code: 'SE', name: 'Sweden' },
    { code: 'SI', name: 'Slovenia' },
    { code: 'SK', name: 'Slovakia' },
  ],
}

// if (typeof window && window.__config_checkout_api__) {
//   if (window.__config_checkout_api__.STRIPE_PUBLIC_KEY) {
//     config.STRIPE_PUBLIC_KEY = window.__config_checkout_api__.STRIPE_PUBLIC_KEY
//   }
//   if (window.__config_checkout_api__.API_CHECKOUT_BASE_URL) {
//     config.API_CHECKOUT_BASE_URL = window.__config_checkout_api__.API_CHECKOUT_BASE_URL
//   }
// }

module.exports = config
