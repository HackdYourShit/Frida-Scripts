// Based on https://github.com/interference-security/frida-scripts/blob/master/iOS/hook-specific-method-of-class.js

if (ObjC.available)
{   
    console.log("Objective-C Runtime is available!"); 
    console.log("Script started!");
    try
    {
        var resolver = new ApiResolver('objc');
        resolver.enumerateMatches('*[* *isJailbroken]', {
            onMatch: function (match) {
                var funcName = match["name"];
                var hook = match["address"];
                Interceptor.attach(hook, {
                    onLeave: function(retval) {
                        console.log("\n[*] Method Name: " + funcName);
                        console.log("\t[*] Type of return value: " + typeof retval);
                        console.log("\t[*] Return Value: " + retval);
                        newretval = ptr("0x0")
                        retval.replace(newretval)
                        console.log("\t[*] New Return Value: " + newretval)
                    }
                });
            },
            onComplete: function () {
            }   
        });
    }
    catch(err)
    {
        console.log("[!] Exception2: " + err.message);
    }
    console.log("Script executed successfully!");
}
else
{
    console.log("Objective-C Runtime is not available!");
}