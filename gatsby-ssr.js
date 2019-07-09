const React = require('react')
const { stripIndent } = require('common-tags')

const pluginOptions = {
  includeInDevelopment: true,
}

exports.onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
  if (
    process.env.NODE_ENV === `production` ||
    pluginOptions.includeInDevelopment
  ) {
    setHeadComponents([
      // Does Autopilot need jQuery if we don't use the headsup message?
      // <script
      //   key="jquery"
      //   dangerouslySetInnerHTML={{
      //     __html: stripIndent`
      //     ;(function() {
      //       function downloadJSAtOnload() {
      //         var element = document.createElement('script')
      //         element.async = true
      //         element.src = 'https://unpkg.com/jquery@3.4.1/dist/jquery.min.js'
      //         document.body.appendChild(element)
      //       }
      //       if (window.addEventListener)
      //         window.addEventListener('load', downloadJSAtOnload, false)
      //       else if (window.attachEvent) window.attachEvent('onload', downloadJSAtOnload)
      //       else window.onload = downloadJSAtOnload
      //     })();
      //   `,
      //   }}
      // />,
      <script
        key="plugin-autopilot"
        dangerouslySetInnerHTML={{
          __html: stripIndent`	
          (function(o){var b="https://api.autopilothq.com/anywhere/",t="ec24be3b2c6348a48c647a446b08bb8402fda7caa24b43d3950598d3fef58486",a=window.AutopilotAnywhere={_runQueue:[],run:function(){this._runQueue.push(arguments);}},c=encodeURIComponent,s="SCRIPT",d=document,l=d.getElementsByTagName(s)[0],p="t="+c(d.title||"")+"&u="+c(d.location.href||"")+"&r="+c(d.referrer||""),j="text/javascript",z,y;if(!window.Autopilot) window.Autopilot=a;if(o.app) p="devmode=true&"+p;z=function(src,asy){var e=d.createElement(s);e.src=src;e.type=j;e.async=asy;l.parentNode.insertBefore(e,l);};y=function(){z(b+t+'?'+p,true);};if(window.attachEvent){window.attachEvent("onload",y);}else{window.addEventListener("load",y,false);}})({"app":true});	
        `,
        }}
      />,
    ])
  }
}
