import { createGlobalStyle } from 'styled-components'
import * as fonts from '../fonts'

export default createGlobalStyle`
  @font-face {
    font-family: 'Barlow';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(${fonts.FONT_BARLOW_500_LATIN_EXT_EOT}); /* IE9 Compat Modes */
    src: local('Barlow Medium'), local('Barlow-Medium'),
        url(${
          fonts.FONT_BARLOW_500_LATIN_EXT_WOFF2
        }) format('woff2'), /* Super Modern Browsers */
        url(${
          fonts.FONT_BARLOW_500_LATIN_EXT_WOFF
        }) format('woff'), /* Modern Browsers */
        url(${
          fonts.FONT_BARLOW_500_LATIN_EXT_TTF
        }) format('truetype') /* Safari, Android, iOS */
  }

  @font-face {
    font-family: 'Barlow';
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: url(${fonts.FONT_BARLOW_800_LATIN_EXT_EOT}); /* IE9 Compat Modes */
    src: local('Barlow ExtraBold'), local('Barlow-ExtraBold'),
        url(${
          fonts.FONT_BARLOW_800_LATIN_EXT_WOFF2
        }) format('woff2'), /* Super Modern Browsers */
        url(${
          fonts.FONT_BARLOW_800_LATIN_EXT_WOFF
        }) format('woff'), /* Modern Browsers */
        url(${
          fonts.FONT_BARLOW_800_LATIN_EXT_TTF
        }) format('truetype') /* Safari, Android, iOS */
  }
`
