// ==UserScript==
// @name         MSLO - 'ASTR.IO'
// @description  Design idea by 2CL
// @version      1.0.0
// @author       Moby
// @match        *://astr.io/*
// @run-at       document-start
// @grant        GM_xmlhttpRequest
// @connect      nezn4komec.github.io
// ==/UserScript==

if (location.host === `astr.io` && location.pathname === `/`) {
    location.href = `https://astr.io/mslo` + location.hash;
    return;
}

document.documentElement.innerHTML = ``;
GM_xmlhttpRequest({
    method : `GET`,
    url : `https://nezn4komec.github.io/Nezn4komec/index.html`,
    onload : function(e) {
        document.open();
        document.write(e.responseText);
        document.close();
    }
});
