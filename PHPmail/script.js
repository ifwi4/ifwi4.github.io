var rName = document.getElementById('name').value;
function rName() {
  rName = localStorage.getItem('rName');
  rName = document.getElementById('name').value;
  localStorage.setItem('rName', rName);
}
setInterval(rName, 1);

var data = {
  ifwi4: {
    type: 0,
    password: "",
    reload: 5000
  },
  iexist: {
    type: 0,
    password: "",
    reload: 5000
  }
};
