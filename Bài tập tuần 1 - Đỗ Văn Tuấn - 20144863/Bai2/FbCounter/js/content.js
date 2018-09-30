var num;

chrome.storage.sync.get(['num'], function(result) {
    if(isNaN(result.num)){
        chrome.storage.sync.set({'num': 1}, function() {});
    }
    else{
        result.num++;
        chrome.storage.sync.set({'num': result.num}, function() {});
    }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.fbCounter === 'getNum') {
        chrome.storage.sync.get(['num'], function(result) {
            window.num = result.num;
        });
        sendResponse({num: window.num});
    }
});

