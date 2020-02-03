import React from 'react'
import { stripIndent } from 'common-tags'
export { wrapRootElement, wrapPageElement } from './gatsby-browser'

const pluginOptions = {
  includeInDevelopment: true,
}

export const onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
  if (
    process.env.NODE_ENV === `production` ||
    pluginOptions.includeInDevelopment
  ) {
    setHeadComponents([
      <script
        key="plugin-autopilot"
        dangerouslySetInnerHTML={{
          __html: stripIndent`	
          (function(o){var b="https://apenterprise.io/anywhere/",t="ec24be3b2c6348a48c647a446b08bb8402fda7caa24b43d3950598d3fef58486",a=window.AutopilotAnywhere={_runQueue:[],run:function(){this._runQueue.push(arguments);}},c=encodeURIComponent,s="SCRIPT",d=document,l=d.getElementsByTagName(s)[0],p="t="+c(d.title||"")+"&u="+c(d.location.href||"")+"&r="+c(d.referrer||""),j="text/javascript",z,y;if(!window.Autopilot) window.Autopilot=a;if(o.app) p="devmode=true&"+p;z=function(src,asy){var e=d.createElement(s);e.src=src;e.type=j;e.async=asy;l.parentNode.insertBefore(e,l);};y=function(){z(b+t+'?'+p,true);};if(window.attachEvent){window.attachEvent("onload",y);}else{window.addEventListener("load",y,false);}})({});
        `,
        }}
      />,
    ])
  }
}
