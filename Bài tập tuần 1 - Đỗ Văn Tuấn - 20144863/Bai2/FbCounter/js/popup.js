fbCount();

function fbCount() {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {fbCounter: 'getNum'}, function (response) {
            $('#fb-num').html(response.num);
        });
    });
}