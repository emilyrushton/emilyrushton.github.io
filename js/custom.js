function showmore() {
  var extraexperience = document.getElementById("extra-experience");
  var hidebtn = document.getElementById("hide");
  var showbtn = document.getElementById("show");
  extraexperience.style.display = 'inline-block';
  hidebtn.style.display = 'inline-block';
  showbtn.style.display = 'none';
}

function showless() {
  var extraexperience = document.getElementById("extra-experience");
  var hidebtn = document.getElementById("hide");
  var showbtn = document.getElementById("show");
  extraexperience.style.display = 'none';
  showbtn.style.display = 'inline-block';
  hidebtn.style.display = 'none';
}
