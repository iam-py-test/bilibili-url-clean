"use strict";

const DEBUG_ENABLED = false; // when testing

/* not a great fix, but makes it work in Chromium */
if(typeof browser === "undefined" && typeof chrome !== "undefined"){
    var BUCE_browser = chrome;
}
else{
    if(typeof browser !== "undefined"){
        var BUCE_browser = browser;
    }
    else{
        // we are somewhere with neither?
        console.error("Neither browser nor chrome found!");
    }
}

BUCE_browser.webNavigation.onHistoryStateUpdated.addListener(function(event){
    /*
    when history.replaceState is used by bilibili.com, check if vd_source is in use
    */
   if(DEBUG_ENABLED){
    console.log("[BUCE] Got history.replaceState: ",event);
   }
   if(event.url.includes("vd_source")){ // this check is designed to avoid the overhead of constructing a URL object for all urls by limiting it to those probably with the vd_source param
    let tmpurlobject = new URL(event.url);
    if(tmpurlobject.searchParams.has("vd_source")){
        BUCE_browser.tabs.executeScript(event.tabId,{"file":"clean.js"});
    }
   }
},{"url":[{"hostContains":"bilibili.com"}]});
