import{a as o,e as t,g as r,_ as a,l as s}from"./index-2f1b89c7.js";import{P as l}from"./page-7843e2a1.js";const n=()=>(o.managers.appStateManager.pushToState("authState",{_:"authStateSignedIn"}),t.requestedServerLanguage||t.getCacheLangPack().then(e=>{e.local&&t.getLangPack(e.lang_code)}),i.pageEl.style.display="",r(),Promise.all([a(()=>import("./appDialogsManager-bb2c2b64.js"),["./appDialogsManager-bb2c2b64.js","./avatar-b1525003.js","./button-fef695b5.js","./index-2f1b89c7.js","./index-23920502.css","./page-7843e2a1.js","./wrapEmojiText-bbf717f4.js","./scrollable-2f6743d7.js","./putPreloader-0167800b.js","./htmlToSpan-86a9acf9.js","./countryInputField-af859e63.js","./textToSvgURL-c6ebb454.js","./codeInputField-ae5e56c9.js","./appDialogsManager-0e9d48fd.css"],import.meta.url),s(),"requestVideoFrameCallback"in HTMLVideoElement.prototype?Promise.resolve():a(()=>import("./requestVideoFrameCallbackPolyfill-d3040205.js"),[],import.meta.url)]).then(([e])=>{e.default.start(),setTimeout(()=>{document.getElementById("auth-pages").remove()},1e3)})),i=new l("page-chats",!1,n);export{i as default};
//# sourceMappingURL=pageIm-9624cfd4.js.map