// based off https://github.com/gorhill/uBlock/blob/cee3c4822db8fa164145a801068077f0ac77540b/assets/resources/scriptlets.js#L677

/// replace-state-clean.js
/// rsc.js
// example.com##+js(rsc,evil)
(() => {
    const cleanparam = "{{1}}";
    window.history.replaceState = new Proxy(window.history.replaceState,{
        apply: function(target, thisArg, args){
            if(args.length < 3){
                return Reflect.apply(target, thisArg, args);
            }
            var newurl = args[2];
            try {
                var loadedurl = new URL(newurl,location.href);
            }
            catch(err){
                console.log("[scriptlet]",err);
                return Reflect.apply(target, thisArg, args);
            }
            loadedurl.searchParams.delete(cleanparam);
            var newargs = args;
            newargs[2] = loadedurl.href.toString();
            return Reflect.apply(target, thisArg, newargs);
        }
    });
})()
