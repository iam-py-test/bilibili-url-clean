"use strict";
var tmpurlobject = new URL(location.href); // load the current page url into a URL object
tmpurlobject.searchParams.delete("vd_source"); // delete the vd_source param
history.replaceState(null,null,tmpurlobject.href); // use history.replaceState to apply the changes without a reload
void 0;
