import React from "react"
import { oneLine, stripIndent } from "common-tags"

const pluginOptions = {
  id: 'GTM-MVK4HZS',
  includeInDevelopment: true,
  // Specify optional GTM environment details.
  // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_AUTH_STRING",
  // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_PREVIEW_NAME",
  includePostBody: true
}


exports.onRenderBody = (
  { setHeadComponents, setPostBodyComponents, setPreBodyComponents }
) => {
  if (
    process.env.NODE_ENV === `production` ||
    pluginOptions.includeInDevelopment
  ) {
    const environmentParamStr =
      pluginOptions.gtmAuth && pluginOptions.gtmPreview
        ? oneLine`
      &gtm_auth=${pluginOptions.gtmAuth}&gtm_preview=${
            pluginOptions.gtmPreview
          }&gtm_cookies_win=x
    `
        : ``

    const scriptsArray = [
      <script
        key="plugin-google-tagmanager"
        dangerouslySetInnerHTML={{
          __html: stripIndent`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl+'${environmentParamStr}';f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${pluginOptions.id}');`,
        }}
      />,

      <script
        key="auto-pilot"
        dangerouslySetInnerHTML={{
          __html: stripIndent`
          (function(o){var b="https://api.autopilothq.com/anywhere/",t="ec24be3b2c6348a48c647a446b08bb8402fda7caa24b43d3950598d3fef58486",a=window.AutopilotAnywhere={_runQueue:[],run:function(){this._runQueue.push(arguments);}},c=encodeURIComponent,s="SCRIPT",d=document,l=d.getElementsByTagName(s)[0],p="t="+c(d.title||"")+"&u="+c(d.location.href||"")+"&r="+c(d.referrer||""),j="text/javascript",z,y;if(!window.Autopilot) window.Autopilot=a;if(o.app) p="devmode=true&"+p;z=function(src,asy){var e=d.createElement(s);e.src=src;e.type=j;e.async=asy;l.parentNode.insertBefore(e,l);};y=function(){z(b+t+'?'+p,true);};if(window.attachEvent){window.attachEvent("onload",y);}else{window.addEventListener("load",y,false);}})({"app":true});
        `
      }}
      />
    ];

    if (pluginOptions.includePostBody) {
      setPostBodyComponents(scriptsArray)
    } else {
      setHeadComponents(scriptsArray)
    }


    setPreBodyComponents([
      <noscript
        key="plugin-google-tagmanager"
        dangerouslySetInnerHTML={{
          __html: stripIndent`
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=${
                pluginOptions.id
              }${environmentParamStr}"
              height="0"
              width="0"
              style="display: none; visibility: hidden"
            ></iframe>`,
        }}
      />,
    ])
  }
}
