import React from "react"
import { ThemeProvider } from "styled-components"

import { theme } from "./src/config/theme"
import Layout from "./src/components/layout/DefaultLayout"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <Layout>{element}</Layout>
  </ThemeProvider>
)
