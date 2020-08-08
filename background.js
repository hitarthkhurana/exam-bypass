chrome.webRequest.onBeforeRequest.addListener(
    function(details){
        return {
            cancel: true
        };
    },
    {
        urls:["https://fast.exam.net/api/new-faster/cheat/*"]
    },
    ["blocking"]
);
