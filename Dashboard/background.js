chrome.app.runtime.onLaunched.addListener(function(){
    chrome.app.window.create('main.html', {
	id: 'main',
	bounds: { width: 600, height: 300 }
    });
});
