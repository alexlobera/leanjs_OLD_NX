import React from "react"
import { Helmet } from "react-helmet"
import { CookiesProvider } from "react-cookie"

import favicon from "./favicon.ico"
import Footer from "../Footer"
import ContactSection from "../ContactSection"
import "./index.css"
import "./reset.css"

const Layout = ({ children }) => (
  <CookiesProvider>
    <React.Fragment>
      <Helmet
        title="Optimize software for change, reduce waste, move faster | LeanJS "
        meta={[
          {
            name: "description",
            content:
              "LeanJS is a boutique of excellence focused on Lean, JavaScript, Agile, and people. We help companies reduce waste & speed up their development process",
          },
        ]}
        link={[{ rel: "icon", type: "image/x-icon", href: `${favicon}` }]}
      />

      {children}
      <ContactSection />
      <Footer />
    </React.Fragment>
  </CookiesProvider>
)

export default Layout
