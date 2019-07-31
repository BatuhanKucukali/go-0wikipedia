chrome.webRequest.onBeforeRequest.addListener(function (details) {
    return {redirectUrl: details.url.replace("wikipedia", "2wikipedia")}
}, {urls: ["*://*.wikipedia.org/*"]}, ["blocking"]);