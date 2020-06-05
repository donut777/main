!function(t){"use strict";class e{constructor(){}static makeRequest(t,e){return new Promise(function(i,s){var n=new XMLHttpRequest;n.open(t,e),n.onload=function(){this.status>=200&&this.status<300?i(JSON.parse(n.response)):s({status:this.status,statusText:n.statusText})},n.onerror=function(){s({status:this.status,statusText:n.statusText})},n.send()})}}class i{constructor(){}}i.SiteHostname="app.stackly.com",i.ApiPath="https://api-prod-stackly.stackly.com/",i.ContentPath="https://content-prod-stackly.stackly.com/",function(){var t;function s(t,e,s){let n="stack"===s?`https://${i.SiteHostname}/embed/stack/${e}`:`https://${i.SiteHostname}/embed/content/${e}`;t.setAttribute("href",n),t.setAttribute("target","_blank"),t.setAttribute("data-mode","popup"),t.setAttribute("data-version","0.1")}function n(t){let e=t.split(/\*+/);for(let t=0;t<e.length;t++)e[t]=e[t].replace(/[|\\{}()[\]^$+*?.]/g,"\\$&");let i="^"+e.join(".*")+"$";return new RegExp(i)}function o(t,e){let i=t.aTagId,s=t.mode,n=t.playerHref,o=document.createElement("div"),l=document.createElement("img"),r=document.createElement("div"),p=document.createElement("iframe");o.style.position="fixed",o.style.overflow="auto",o.style.minHeight="100%",o.style.backgroundColor="rgba(0,0,0,0.4)",o.style.zIndex="2147483647",o.style.top="0",o.style.left="0",o.style.bottom="0",o.style.right="0",r.style.position="absolute",r.style.maxWidth="90vw",r.style.height="90vh",r.style.margin="auto",r.style.top="0px",r.style.bottom="0",r.style.left="0",r.style.right="0",p.src=n,s&&(p.src+="?mode="+s),p.frameBorder="0",p.height="100%",p.width="100%",l.src=g,l.alt="close",l.style.position="absolute",l.style.right="0",l.style.width="100%",l.style.height="100%",l.style.left="0",l.style.top="0",l.style.bottom="0",l.style.opacity="0",l.addEventListener("click",a,{capture:!0}),l.playerData=t,o.appendChild(l),r.appendChild(p),o.appendChild(r),e&&(o.style.visibility="hidden");let d=document.getElementsByTagName("body")[0].appendChild(o);v[i]=d,e||(x=d)}function a(t){x&&(x.style.visibility="hidden"),E=!1,b&&((x=b).style.visibility="visible"),T=!1,_=!1}function l(t){t.stopPropagation(),t.preventDefault();let e=t.currentTarget.playerData.aTagId,i=v[e],s=t.currentTarget.playerData.shareOption,n=t.currentTarget.playerData;if(s&&"appear"==s)setTimeout(()=>{x.setAttribute("class","apperfirst_stage")},200),setTimeout(()=>{x.setAttribute("class","appersecond_stage")},300),setTimeout(()=>{x&&(x.style.visibility="hidden")},350),setTimeout(()=>{x.setAttribute("class","Stackly_appeardiv Stackly_expendIcon"),i?(x=i).style.visibility="visible":o(n),x.setAttribute("class","apperthird_stage")},400),setTimeout(()=>{x.setAttribute("class","apperfourth_stage")},500),setTimeout(()=>{x.setAttribute("class","apperfifth_stage")},600),T=!0;else if(s&&"exit"==s){let t=document.getElementById("Stackly_boxShadow");setTimeout(()=>{t&&t.setAttribute("class","exitfirst_stage")},200),setTimeout(()=>{t&&t.setAttribute("class","exitsecond_stage")},300),setTimeout(()=>{x&&(x.style.visibility="hidden",t&&t.setAttribute("class","Stackly_boxShadow"))},400),setTimeout(()=>{i?(x=i).style.visibility="visible":o(n),x.setAttribute("class","exitthird_stage")},500)}else x&&(x.style.visibility="hidden"),i?(x=i).style.visibility="visible":o(n),_=!0}function r(t){for(let e=0;e<t.length;e++){let i=t[e].config.pageUrl;for(let s=0;s<i.length;s++){if(!0===n(i[s]).test(k))return t[e]}}return{}}function p(t){let e=r(t);if(!e.config||!e.route)return;if("no"===e.config.toggle)return;let n=document.createElement("div");n.setAttribute("class","Stackly_expendIcon"),n.setAttribute("id","Stackly_expendIcon");let o=document.createElement("div");o.setAttribute("class","Stackly_Recommended");let a=document.createElement("img"),l=document.createElement("div"),p=document.createElement("div");p.setAttribute("class","Stackly_stackTitleText");let c=document.createElement("img");c.setAttribute("class","Stackly_close");let y=document.createElement("a");y.setAttribute("class","showIframe"),y.setAttribute("share-option","appear");i.SiteHostname,e.route;n.style.position="fixed",n.style.width="141px",n.style.height="176px",n.style.zIndex="2147483647",n.style.bottom="-200px",n.style.left="2vw",n.style.background="#fff",n.style.boxShadow="0px 4px 15px rgba(0, 0, 0, 0.6)",n.style.cursor="pointer",n.style.transition="0.5s";let m=document.createElement("style");m.innerHTML=".Stackly_appeardiv{bottom: 2vh !important; transition: .5s;}.Stackly_expendIcon:hover{width: 250.37px !important; height: 308.97px !important; transition: 0.5s !important}.Stackly_expendIcon:hover .Stackly_Recommended{top: -13px  !important; width: 161.59px !important; font-size: 11px  !important; padding: 8px !important; transition: margin-top 0.5s, width 0.5s, font-size 0.5s !important; }.Stackly_expendIcon:hover img{height: 200px !important; top: 25px !important transition: height 0.5s, top 0.5s !important;}.Stackly_expendIcon:hover .Stackly_stackTitleText{font-size: 20px !important; line-height: 24px !important; bottom: 10px !important; height: 70px !important; transition: font-size 0.5s, line-height 0.5s, bottom 0.5s; height 0.5s !important;}.Stackly_expendIcon:hover .Stackly_close{opacity: 1 !important; height: 13px !important; width: 13px !important transition: opacity 0.5s, height 0.5s, width 0.5s !important;}.Stackly_expendIcon:hover .showIframe{pointer-events: unset !important;}.apperfirst_stage:after{content: '';position: absolute;background: rgba(255, 255, 255, 0.6) !important;width: 100%;height: 100%;}.appersecond_stage:after{content: '';position: absolute;background: rgba(255, 255, 255, 0.9) !important;width: 100%;height: 100%;}.apperfirst_stage{left: 175px !important; transition: 0.2s !important; width: 364px !important; height: 393px !important; background: rgba(255, 255, 255, 0.6) !important; bottom: 2vh !important;}.appersecond_stage{width: 498px !important; height: 534px !important; left: 220px !important; background: rgba(255, 255, 255, 0.9) !important;transition: opacity 0.2s !important;bottom: 2vh !important;}.apperthird_stage{background-color:transparent !important;transition: 0.2s;}.apperfourth_stage{background-color: rgba(0, 0, 0, 0.2) !important;transition: 0.2s;}.apperfifth_stage{transition: 0.2s;}.apperfirst_stage .Stackly_Recommended{font-size: 16px !important;padding: 8px !important;line-height: 17px !important;width: 220px !important;bottom: 20px !important;}.apperfirst_stage img{height: 300px !important;top: 17px !important;transition: height 0.2s ease 0s, top 0.2s ease 0s !important;}.apperfirst_stage .Stackly_stackTitleText{height: 78px !important;font-size: 30px !important;line-height: 37px !important;transition: fontSize 0.2s ease 0s, lineHeight 0.2s ease 0s !important;}.appersecond_stage .Stackly_Recommended{font-size: 20px !important;padding: 11px !important;line-height: 21px !important;width: 350px !important;bottom: 25px !important;}.appersecond_stage img{height: 410px !important;top: 20px !important;transition: height 0.2s ease 0s, top 0.2s ease 0s !important;}.appersecond_stage .Stackly_stackTitleText{height: 100px !important;font-size: 40px !important;line-height: 47px !important;transition: fontSize 0.2s ease 0s, lineHeight 0.2s ease 0s !important;}.exitfirst_stage{width: 435px !important;height: 575px !important;transition: .2s}.exitfirst_stage img{height: 375px !important;}.exitsecond_stage{width: 788px !important;height: 766px !important;transition: .2s}.exitsecond_stage img {height:566px !important;}.exitthird_stage{transition: .5s;}.exitsecond_stage .exitTitleText{height: 200px !important;}.exitfirst .exitTitleText{height: 200px !important;}.exitfirst_stage:after{content:'';position:absolute;width:100%;height:100%;background: rgba(255, 255, 255, 0.75);top:0;bottom:0;}.exitsecond_stage:after{content:'';top:0;bottom:0;position:absolute;width:100%;height:100%;background: rgba(255, 255, 255, 0.75);}",document.getElementsByTagName("head")[0].appendChild(m),o.innerText=f,o.style.top="-8px",o.style.left="0",o.style.right="0",o.style.width="91px",o.style.fontFamily="Montserrat",o.style.fontSize="7.5px",o.style.fontWeight="bold",o.style.fontStyle="normal",o.style.lineHeight="9px",o.style.textAlign="center",o.style.textTransform="uppercase",o.style.color="#fff",o.style.background=e.stackConfig?e.stackConfig.appearance.themeColor:"#8BC03F",o.style.padding="3px",o.style.borderRadius="7px",o.style.marginLeft="auto",o.style.marginRight="auto",o.style.position="absolute",o.style.transition="bottom 0.5s, width 0.5s, fontSize 0.5s lineHeight 0.5s, padding 0.5s",o.style.zIndex="2",c.src=u,c.style.position="absolute",c.style.left="-5px",c.style.top="-5px",c.style.opacity="0",c.style.transition="0.5s",c.style.zIndex="2147483647",c.onclick=function(){let t=document.getElementById("Stackly_expendIcon");t&&t.parentNode&&t.parentNode.removeChild(t),b=null},a.src=i.ContentPath+e.coverImgPath,a.style.width="100%",a.style.height="100px",a.style.maxHeight="100%",a.style.transition="height 0.5s, width 0.5s",a.style.position="absolute",a.style.top="0px",a.style.zIndex="1",p.style.padding="0 5%",p.style.zIndex="2",p.style.background="#fff",p.style.height="50px",p.style.textAlign="center",p.innerText=e.contentTitle?e.contentTitle.substring(0,74):"No content",p.style.fontFamily="Montserrat",p.style.fontSize="12px",p.style.fontStyle="normal",p.style.fontWeight="600",p.style.display="flex",p.style.alignItems="center",p.style.color="#3B4859",p.style.wordBreak="break-word",p.style.lineHeight="12px",p.style.position="absolute",p.style.left="0",p.style.right="0",p.style.bottom="0",p.style.transition="fontSize 0.5s, lineHeight 0.5s",y.style.position="absolute",y.style.width="100%",y.style.height="100%",y.style.zIndex="2147483636",y.style.bottom="0vh",y.style.left="0vw",y.style.background="#fff",y.style.boxShadow="0px 4px 15px rgba(0, 0, 0, 0.6)",y.style.opacity="0",y.style.pointerEvents="none",s(y,e.route,"stack"),n.appendChild(c),n.appendChild(o),n.appendChild(a),n.appendChild(l),n.appendChild(p),n.appendChild(y);let h=e.config.appearAfter?e.config.appearAfter:e.config.appeareAfter;if(b=document.getElementsByTagName("body")[0].appendChild(n),x=b,h&&"seconds"==h.type){let t=1e3*(h.value?h.value:1);setTimeout(()=>{d(n)},t)}else if(h&&"pageScrolled"==h.type){let t=h.value?h.value:1;window.addEventListener("scroll",function e(){i=window.innerHeight||(document.documentElement||document.body).clientHeight,l=document,s=Math.max(l.body.scrollHeight,l.documentElement.scrollHeight,l.body.offsetHeight,l.documentElement.offsetHeight,l.body.clientHeight,l.documentElement.clientHeight),o=window.pageYOffset||(document.documentElement||document.body.parentNode||document.body).scrollTop,a=s-i,Math.floor(o/a*100)>=t&&(d(n),window.removeEventListener("scroll",e));var i,s,o,a,l})}else d(n)}function d(t){t.setAttribute("class","Stackly_appeardiv Stackly_expendIcon")}function c(t){let e=r(t);if(!e.config||!e.route)return;if("no"===e.config.toggle)return;let n=e.config.freqency;if("6"==n)return;let o=document.createElement("div"),a=document.createElement("img"),l=document.createElement("p"),p=document.createElement("div");p.setAttribute("id","Stackly_boxShadow");let d=document.createElement("img"),c=document.createElement("div");c.setAttribute("class","exitTitleText");let m=document.createElement("a");m.setAttribute("share-option","exit");i.SiteHostname,e.route;o.style.position="fixed",o.style.overflow="auto",o.style.minHeight="100%",o.style.backgroundColor="rgba(0,0,0,0.6)",o.style.zIndex="2147483647",o.style.top="0",o.style.left="0",o.style.bottom="0",o.style.right="0",a.src=g,a.alt="close",a.style.position="absolute",a.style.height="22px",a.style.width="22px",a.style.margin="1vh",a.style.right="1vh",l.style.position="absolute",l.style.margin="auto",l.style.left="0",l.style.right="0",l.style.width="80vw",l.style.bottom="78vh",l.style.textAlign="center",l.style.fontSize="30px",l.style.color="white",l.style.lineHeight="37px",l.style.fontWeight="bold",l.style.textTransform="uppercase",l.style.fontFamily="Montserrat",l.innerText=e.config.tagLine?e.config.tagLine:"Before you go....",p.style.position="absolute",p.style.margin="auto",p.style.left="0",p.style.right="0",p.style.width="360px",p.style.height="477px",p.style.top="25vh",p.style.background="#fff",p.style.boxShadow="rgb(255, 255, 255) 0px 4px 75px",d.src=i.ContentPath+e.coverImgPath,d.style.width="100%",d.style.height="290px",d.style.maxHeight="100%",d.style.transition="height 0.5s, width 0.5s",c.style.marginRight="auto",c.style.marginLeft="auto",c.style.height="176px",c.innerText=e.contentTitle?e.contentTitle.substring(0,74):"No content",c.style.fontFamily="Montserrat",c.style.fontSize="30px",c.style.fontStyle="normal",c.style.fontWeight="600",c.style.display="flex",c.style.alignItems="center",c.style.color="#3B4859",c.style.wordBreak="break-word",c.style.lineHeight="37px",c.style.paddingLeft="20px",c.style.paddingRight="20px",c.style.transition="fontSize 0.5s, lineHeight 0.5s",c.style.display="flex",c.style.alignItems="center",m.style.position="absolute",m.style.width="360px",m.style.height="477px",m.style.zIndex="2147483647",m.style.bottom="0vh",m.style.left="0vw",m.style.background="#fff",m.style.boxShadow="0px 4px 15px rgba(0, 0, 0, 0.6)",m.style.opacity="0",s(m,e.route,"stack"),o.appendChild(a),o.appendChild(l),p.appendChild(d),p.appendChild(c),o.appendChild(p),p.appendChild(m);let h=window.stacklyWebApp.appId,u=localStorage.getItem("exitDetect");if(u){let t=JSON.parse(u);S=t.index?t.index:0}S++,localStorage.setItem("exitDetect",JSON.stringify({appId:h,route:e.route,index:S})),o.style.visibility="hidden",document.addEventListener("mouseleave",()=>{E||I||T||_||"1"==n&&S>1||"3"==n&&2!=S||"4"==n&&S%2==1||"5"==n&&1==S||(p.setAttribute("class","Stackly_boxShadow"),function(){x&&(x.style.visibility="hidden");(x=A).style.visibility="hidden",E=!0,I=!0,m.click()}())}),A=document.getElementsByTagName("body")[0].appendChild(o),a.addEventListener("click",y,{capture:!0})}function y(){A.style.visibility="hidden",E=!1,b&&((x=b).style.visibility="visible")}function m(){!function(t){let e=r(t);if(!e.config||!e.route)return;if("no"===e.config.toggle)return;let i=document.createElement("a");i.setAttribute("data-popup","auto"),i.style.visibility="hidden",s(i,e.route,"stack"),document.getElementsByTagName("body")[0].appendChild(i)}(w.fullPopoverConfig),p(w.appearIconConfig),c(w.exitDetectConfig),function(){let t=Math.random().toString(36).substr(2,9),e=document.getElementsByTagName("a"),s=i.SiteHostname.startsWith("dev.")?"/embed/":i.SiteHostname+"/embed/",n=[];for(let t=0;t<e.length;t++)-1!==e[t].href.indexOf(s)&&n.push(e[t]);for(let e=0;e<n.length;e++){let i=n[e],s=i.getAttribute("data-mode"),a=i.getAttribute("data-popup"),r=i.getAttribute("share-option");i.addEventListener("click",l,{capture:!0});let p={aTagId:t+"_"+e,mode:s,playerHref:i.href,shareOption:r};i.playerData=p,"exit"==r?o(p,!0):"appear"==r&&o(p,!0),"popup"===s&&"auto"===a&&i.click()}}()}let h=window.stacklyWebApp;const g="data:image/gif;base64,R0lGODlhFAAUAPABAAAAAP///yH5BAEAAAAALAAAAAAUABQAAAI0RAKpu+fHonlPKjqdxYm3+mkXyHBeRJ1SClmh6I5kzCJ0ba+g2s0q7+H1NEJZKjZEtJCZAgA7",u="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADaSURBVHgBlZJRDoMgDIZb9AB78wQaPcXYiWCvXmJworFTmOgJ9MkDqKwlm2EzW/RPCG3pl5YCQqSu6+SyLEoIIb33J0QcyXfk2zzP3TsPI+BGiRp+yxRFcV2hHcAHiNwSAXfYqXmeL4J2BQdE99QMyThY1zX0fQ/DMAT7WzSUM7Zt6+MgJxtjgq2UgizLtiCPFY5p5PZcHOEqXEFrDdbaDUHv9sCmaWSSJMemV1WVI9vuAaiK5fz1R9BA+PbqH1CWZfgAGB9wq2maKnpsSe6J1kiDctM02VdHQU8iPWvWgYNn/wAAAABJRU5ErkJggg==",f="Recommended";let x,b,A,w,k,v={},S=0,E=!1,T=!1,_=!1,I=!1;if(null===(t=h)||void 0===t||!t.appId)throw window.location.href.includes(`https://${i.SiteHostname}`)&&parent.postMessage("failure",`https://${i.SiteHostname}`),new Error("Stackly WebApp is not set up properly");window.location.href.includes(`https://${i.SiteHostname}`)&&parent.postMessage("success",`https://${i.SiteHostname}`),screen.width>768&&(!function(){let t=document.createElement("link");t.href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,500,500i,600,600i,700&display=swap",t.rel="stylesheet",document.getElementsByTagName("head")[0].appendChild(t)}(),function(){let t=location.hostname?location:window.top.location,s=new URL(t.toString());k=(s.protocol+"//"+s.hostname+s.pathname).replace(/\/+$/,"");const n=(s.protocol+"//"+s.hostname).replace(/\/+$/,"");let o=encodeURI(`PageUrl_WebApp|${n}|${h.appId}`),a=i.ApiPath+"Stack/"+o;return e.makeRequest("GET",a)}().then(t=>{console.log("externalJS webApps",t),w=t,"loading"===document.readyState?document.addEventListener("DOMContentLoaded",m):m()}))}()}("undefined"==typeof stacklyExternalJs?stacklyExternalJs={}:stacklyExternalJs);