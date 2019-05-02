import { createGlobalStyle } from 'styled-components'

/*
@import url('https://fonts.googleapis.com/css?family=Barlow:400,500,800,900');
*/

export default createGlobalStyle`
/* latin-ext */
@font-face {
  font-family: 'Barlow';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Barlow Regular'), local('Barlow-Regular'),
    url(https://fonts.gstatic.com/s/barlow/v3/7cHpv4kjgoGqM7E_Ass5ynghnQci.woff2)
      format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

/* latin */
@font-face {
  font-family: 'Barlow';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Barlow Regular'), local('Barlow-Regular'),
    url(https://fonts.gstatic.com/s/barlow/v3/7cHpv4kjgoGqM7E_DMs5ynghnQ.woff2)
      format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}

/* latin-ext */
@font-face {
  font-family: 'Barlow';
  font-style: normal;
  font-display: swap;
  font-weight: 500;
  src: local('Barlow Medium'), local('Barlow-Medium'),
    url(https://fonts.gstatic.com/s/barlow/v3/7cHqv4kjgoGqM7E3_-gs6Vostz0rdom9.woff2)
      format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Barlow';
  font-style: normal;
  font-display: swap;
  font-weight: 500;
  src: local('Barlow Medium'), local('Barlow-Medium'),
    url(https://fonts.gstatic.com/s/barlow/v3/7cHqv4kjgoGqM7E3_-gs51ostz0rdg.woff2)
      format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}

/* latin-ext */
@font-face {
  font-family: 'Barlow';
  font-style: normal;
  font-display: swap;
  font-weight: 800;
  src: local('Barlow ExtraBold'), local('Barlow-ExtraBold'),
    url(https://fonts.gstatic.com/s/barlow/v3/7cHqv4kjgoGqM7E3q-0s6Vostz0rdom9.woff2)
      format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Barlow';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: local('Barlow ExtraBold'), local('Barlow-ExtraBold'),
    url(https://fonts.gstatic.com/s/barlow/v3/7cHqv4kjgoGqM7E3q-0s51ostz0rdg.woff2)
      format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}

/* latin-ext */
@font-face {
  font-family: 'Barlow';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: local('Barlow Black'), local('Barlow-Black'),
    url(https://fonts.gstatic.com/s/barlow/v3/7cHqv4kjgoGqM7E3j-ws6Vostz0rdom9.woff2)
      format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Barlow';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: local('Barlow Black'), local('Barlow-Black'),
    url(https://fonts.gstatic.com/s/barlow/v3/7cHqv4kjgoGqM7E3j-ws51ostz0rdg.woff2)
      format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}

`
