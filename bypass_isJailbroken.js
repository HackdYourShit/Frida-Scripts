// Based on https://github.com/mwrlabs/needle/blob/master/needle/modules/dynamic/detection/script_jailbreak-detection-bypass.py

if (ObjC.available)
{   
    console.log("Objective-C Runtime is available!"); 
    console.log("Script started!");
    try
    {
        var className = "JailbreakDetection";
        var funcName = "isJailbroken";
        var hook = eval('ObjC.classes.' + className + '["' + funcName + '"]');
        Interceptor.attach(hook.implementation, {
            onLeave: function(retval) {
                console.log("\n[*] Class Name: " + className);
                console.log("\t[*] Method Name: " + funcName);
                console.log("\t[*] Type of return value: " + typeof retval);
                console.log("\t[*] Return Value: " + retval);
                newretval = ptr("0x0")
                retval.replace(newretval)
                console.log("\t[*] New Return Value: " + newretval)
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