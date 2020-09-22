/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from 'react';
export { wrapRootElement } from './gatsby-browser';

export const onRenderBody = (
  { pathname, setHeadComponents },
  pluginOptions
) => {
  const apiUrl = 'https://apenterprise.io/anywhere/';
  const trackingId =
    'ec24be3b2c6348a48c647a446b08bb8402fda7caa24b43d3950598d3fef58486';
  const exclude = [];
  const app = false;
  const isDev = process.env.NODE_ENV === 'development';
  if (!apiUrl || !trackingId || isDev) {
    return null;
  }

  if (exclude && exclude.includes(pathname)) return null;

  const isApp = !!app;

  setHeadComponents([
    <link rel="preconnect" key="preconnect-autopilot" href={apiUrl} />,
    <link rel="dns-prefetch" key="dns-prefetch-autopilot" href={apiUrl} />,
  ]);

  return setHeadComponents([
    <script
      key="gatsby-plugin-autopilot"
      dangerouslySetInnerHTML={{
        __html: `
          (function(o){var b="${apiUrl}",t="${trackingId}",a=window.AutopilotAnywhere={_runQueue:[],run:function(){this._runQueue.push(arguments);}},c=encodeURIComponent,s="SCRIPT",d=document,l=d.getElementsByTagName(s)[0],p="t="+c(d.title||"")+"&u="+c(d.location.href||"")+"&r="+c(d.referrer||""),j="text/javascript",z,y;if(!window.Autopilot) window.Autopilot=a;if(o.app) p="devmode=true&"+p;z=function(src,asy){var e=d.createElement(s);e.src=src;e.type=j;e.async=asy;l.parentNode.insertBefore(e,l);};y=function(){z(b+t+'?'+p,true);};if(window.attachEvent){window.attachEvent("onload",y);}else{window.addEventListener("load",y,false);}})({"app":${isApp}});
        `,
      }}
    />,
  ]);
};
