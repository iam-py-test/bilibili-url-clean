"use strict";
var tmpurlobject = new URL(location.href);
tmpurlobject.searchParams.delete("vd_source");
history.replaceState(null,null,tmpurlobject.href);