function iframe() {
  localStorage.setItem('iframe_src', prompt());
  iframe();
}
function proxy() {
  alert("proxy still being built, please wait");
}
function chat() {
  var url = "https://chat.aengine.repl.co";
  var urlObj = new window.URL(window.location.href);
  win = window.open();
  win.document.body.style.margin = "0";
  win.document.body.style.height = "100vh";
  var iframe = win.document.createElement("iframe");
  iframe.style.border = "none";
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.margin = "0";
  iframe.referrerpolicy = "no-referrer";
  iframe.allow = "fullscreen";
  iframe.src = url.toString();
  win.document.body.appendChild(iframe);
}
function iframe() {
    var iframe_src = localStorage.getItem('iframe_src');
    var a, b, c;
    c = iframe_src, b = document.createElement("iframe"), b.setAttribute("src", c), b.setAttribute("id", "ubb"), b.setAttribute("style", "z-index:2147483647;width: 100%; height: 100%; top:0px; left:0px; right:0px; bottom:0px; border:none; position:fixed; overflow:hidden; allowtransparancy:false;"), 
    a = document.getElementsByTagName("body")[0], a.appendChild(b).call(this);
document.getElementsByTagName('head')[0].appendChild(link);
}
var agreed = false;
function validate() {
    if (document.getElementById('check').checked) {
      agreed = true;
    } 
}

function ML_V3M() {
      if (agreed == true) {
        localStorage.setItem('iframe_src', "https://learn.microsoft.com/en-us/training/modules/implement-common-integration-features-finance-ops/10-exercise-1");
        iframe();
      } else {
        alert('You did not check the box!');
      }
}

function v86() {
  localStorage.setItem('iframe_src', 'https://copy.sh/v86/');
  iframe();
}

window.addEventListener('keydown', function(e) {
  if (e.altKey == true&& e.keyCode == 80) {

    location.href = "/msdn/msdn.html";
  }
});
