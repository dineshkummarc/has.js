(function(has, addtest, cssprops){

    // FIXME: break this out into "modules", like array.js, dom.js, lang.js (?) ^ph

    // we could define a couple "constants" for reuse ...
    // just need to ensure they are the same across detect/*.js 
    // so we can wrap in a single (fn(){})() at 'build' ^ph
    var STR = "string",
        FN = "function"
    ;   

    // Object tests // break into detect/object.js
    addtest("object-create", function(){
        return "create" in Object;
    });


    addtest("object-__proto__", function(){
        return !!{}.__proto__;
    });


    addtest("object-getprototypeof", function(){
        return "getPrototypeOf" in Object;
    });
    
    addtest("object-seal", function(g){
        var o = Object;
        return ("seal" in o) && ("freeze" in o) && ("isSealed" in o) && ("isFrozen" in o);
    });
    
    addtest("object-keys", function(){
        return "keys" in Object;
    });
    
    addtest("object-extensible", function(){
        return ("preventExtensions" in Object) && ("isExtensible" in Object);
    });
    
    addtest("object-properties", function(){
        var o = Object;
        return ("defineProperty" in o) && ("defineProperties" in o) &&
            ("getOwnPropertyDescriptor" in o) && ("getOwnPropertyNames" in o);
    });
    
    addtest("object-es5", function(){
        return has("object-create") && has("object-getprototypeof") && has("object-seal") &&
            has("object-keys") && has("object-extensible") && has("object-properties");
    });


})(has, has.add, has.cssprops);
