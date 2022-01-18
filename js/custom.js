var i = 0;
var txt1 = 'I am a technical communicator';
var txt2 = 'I develop content to help people understand complex technologies';
var txt3 = 'I specialize in software systems — with professional affiliations such as Veeva Systems and Dell EMC';
var txt4 = 'See some of my work here 👇';
var speed = 50;
var firstbutton = document.getElementById('par2');
var secondbutton = document.getElementById('par3');
var thirdbutton = document.getElementById('par4');
var projectsbutton = document.getElementById('showme');

function typeWriter1() {
    document.getElementById("output").innerHTML = txt1
    setTimeout(typeWriter1, speed);
  }
function typeWriter2() {
  if (i < txt2.length) {
    document.getElementById("output").innerHTML = txt2.charAt(i);
    i++;
    setTimeout(typeWriter2, speed);
    firstbutton.style.display = 'none';
    secondbutton.style.display = 'inline-block';
    thirdbutton.style.display = 'none';
  }
}
function typeWriter3() {
  if (i < txt3.length) {
    document.getElementById("output").innerHTML += txt3.charAt(i);
    i++;
    setTimeout(typeWriter3, speed);
    firstbutton.style.display = 'none';
    secondbutton.style.display = 'none';
    thirdbutton.style.display = 'inline-block';
  }
}
function typeWriter4() {
  if (i < txt4.length) {
    document.getElementById("output").innerHTML += txt4.charAt(i);
    i++;
    setTimeout(typeWriter4, speed);
    firstbutton.style.display = 'none';
    secondbutton.style.display = 'none';
    thirdbutton.style.display = 'none';
    projectsbutton.style.marginLeft = '0px';
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
