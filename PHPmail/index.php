
<!DOCTYPE html>
<html>
  <link rel="stylesheet" href="style.css">
  <script src="script.js"></script>
  
<div id="settings" style="display:none;">
  
</div>
<div id="email" style="display:none;">
<head>
  <div class="topnav">
    <a class="active" href="/email.php">General Chat</a>
    <a href="/settings.php">Settings</a>
    <a href="/contact.php">Contact Admin</a>
  </div>
  <title>IM Group Email</title>
  <h1 style="color:green;"> 
    <center>
    Welcome to the IM Group Email!
    </center>
  </h1> 
<script> 
function reload() {
const iframe = document.getElementById('displayer');
iframe.src = iframe.src;
}
setInterval(reload, 5000)
</script>
</head>
  <iframe id="displayer" src="displayer.php" height="50%" width="99%" style="border:3px solid black;"></iframe>

<form id="sendmessage" method="post"> 
  <input autocomplete='off' spellcheck='false' autocorrect='off' onkeydown="setInterval(Check,0)" id='name' name="name" placeholder='Enter your name here!' style='width:143px;height:50px;left:0px'></input>
  
<input autocomplete='off' spellcheck='false' autocorrect='off' id='message' name="message" placeholder='Press "Enter" to send a message!' style='width:750px;height:50px;left:0px'></input>

<button name="send" id="send" style="width:150px;height:50px;left:0px">Send your message!</button>
</form>
<br></br>This is the official stable version of PHPmail. To visit the beta-testing version, go to email.aengine.repl.co
</div>


<div id="current">
<h1 style="color:green;"> 
  Welcome to the IM Group Email
</h1> 

<form method="post">
  Enter Username: <input type="text" name="username" placeholder="Username"><br>
  Enter Pre-Shared Key: <input type="text" id="psk" name="password" placeholder="Pre-Shared Key"><br>
  <button onclick="login();">Login</button>
  </form>
<script>
var divstatus = localStorage.getItem("divstatus");
if (divstatus == 'true') {
  document.getElementById("current").style.display = "none";
  document.getElementById("email").style.display = "block";
}
var psk;
psk = document.getElementById("psk").value;
function login() {
    localStorage.setItem("divstatus", "true");
    document.getElementById("current").style.display = "none";
    document.getElementById("email").style.display = "block";
}
</script>
  </div>
</html>
