chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	if (request.method == "getSelection")
		sendResponse({ data: window.getSelection().toString() });
	else
		sendResponse({}); // snub them.
});

chrome.runtime.onMessage.addListener( // this is the message listener
    function(request, sender, sendResponse) {
        if (request.message === "messageSent")
            runThisFunction();
    }
);
