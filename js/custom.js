var i = 0;
var txt1 = 'I am a technical communicator';
var txt2 = 'I develop content to help people understand complex technologies';
var speed = 50;
var firstbutton = document.getElementById('par2');
var secondbutton = document.getElementById('par3');
var thirdbutton = document.getElementById('par4');
var projectsbutton = document.getElementById('showme');

function typeWriter1() {
  if (i < txt1.length) {
    document.getElementById("output").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter1, speed);
  }
}
function typeWriter2() {
  if (i < txt2.length) {
    document.getElementById("output").innerHTML += txt2.charAt(i);
    i++;
    setTimeout(typeWriter1, speed);
  }
}


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
