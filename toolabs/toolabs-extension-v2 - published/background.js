chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed!");
  });
  
  chrome.runtime.onInstalled.addListener(() => {
    // Define the URL you want to redirect to
    const redirectUrl = `${chrome.runtime.getManifest().homepage_url}/dashboard?status=extension-installed`;

    // Open the URL in a new tab
    chrome.tabs.create({ url: redirectUrl });
});