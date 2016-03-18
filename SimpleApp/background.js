chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('main.html', {
    id: 'main',
    bounds: { width: 200, height: 100 }
  });
});
