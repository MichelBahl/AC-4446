// This is a test harness for your module
// You should do something interesting in this harness
// to test out the module and to provide instructions
// to users on how to use it by example.

// This is a test harness for your module
// You should do something interesting in this harness
// to test out the module and to provide instructions
// to users on how to use it by example.

function request(){
       var client = Ti.Network.createHTTPClient({
            username: "httpwatch",
            password: Ti.Platform.createUUID(),
            onload: function onLoad() {
                //Ti.API.info("Success: " + JSON.stringify(this.responseText));
                Ti.API.info("SUCCESS\n\n");
            },
            onerror: function onError(e) {
                Ti.API.info("Err: " + JSON.stringify(e));
                Ti.API.info("\n\n");
                
                var headers = this.getAllResponseHeaders();
                headers = headers.split("\n");
                    var newLocation = null;
                    for (var h=0; h<headers.length; h++) {
                        if (headers[h].indexOf("Location") != -1) {
                        newLocation = headers[h].substr(headers[h].indexOf(":")+1).trim();
                            break;
                        }
                    }
            } 
        }); 
//        client.open('GET', "https://pb-proxy.intellinet.de/bank-api/prod/postbankid/accounts/spar/DE22201100223206095671/transactions?fromDate=2016-09-04");
        client.open('GET', "http://www.httpwatch.com/httpgallery/authentication/authenticatedimage/");
    //    client.setRequestHeader("Content-Type","text/html"),
     //   client.setRequestHeader("X-AUTH","000001570f85c48fa320b28a0906f874e4ebdbedc557629c_D12_ls00053z"),
        client.send();    
}


function doClickButton(){
    Ti.API.info("doClickButton");
    for (var i = 0; i <= 10;i++){
        
        var b = i;
        b = i > 5 ? 10: i;
        Ti.API.info("b:: " + b);
        setTimeout(function(){
            request();
        },5000 * b);
    }
}

function doClickSingleButton(){
    request();
}
    

$.index.open();
