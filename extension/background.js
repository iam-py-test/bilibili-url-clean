"use strict";
browser.webNavigation.onHistoryStateUpdated.addListener(function(event){
    /*
    when history.replaceState is used by bilibili.com, check if vd_source is in use
    */
   //console.log(event);
   if(event.url.includes("vd_source")){ // this check is designed to avoid the overhead of constructing a URL object for all urls by limiting it to those probably with the vd_source param
    let tmpurlobject = new URL(event.url);
    if(tmpurlobject.searchParams.has("vd_source")){
        browser.tabs.executeScript(event.tabId,{"file":"clean.js"});
    }
   }
},{"url":[{"hostContains":"bilibili.com"}]});
