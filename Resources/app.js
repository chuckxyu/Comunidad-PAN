//create a window where to show a webview
var win = Titanium.UI.createWindow({ 
    backgroundColor:'#fff'
});
 
//create a webview with a website url inside
var webview = Titanium.UI.createWebView({
    url: 'http://comunidad.pandf.org.mx/',
    top: 0,
    left: 0,
    width: "100%",
    height: "100%"
});
 
//add webview to window
win.add(webview);
 
//open window
win.open();