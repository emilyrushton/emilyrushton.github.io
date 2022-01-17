TypeMaker = function(element, interval){
  this.element = element; this.interval = interval || 50;
  var t = this, r;
  this.type = function(string){
    if(r)clearInterval(r);
    var s = string.split(''), l = s.length, i = 0;
    var p = 'value' in this.element ? 'value' : 'innerHTML';
    this.element[p] = '';
    r = setInterval(function(){
      t.element[p] += s[i++];
      if(i === l){
        clearInterval(r); r = undefined;
      }
    }, t.interval);
  };
};

var introtyper = new TypeMaker(I('output'));
introtyper.type('I am a technical communicator');

var doc, bod, I, TypeMaker; // for use on other loads
addEventListener('load', function(){
doc = document; bod = doc.body;
I = function(id){
  return doc.getElementById(id);
};
var typer = new TypeMaker(I('output')), single_test = I('single_test'), rand_test = I('rand_test');
var testArray = ['The sky is blue.', 'The stove is hot.', 'The floor is wet.', 'The grass is green.', 'The water is cold.'];
var testArrayL = testArray.length;
var firstbutton = document.getElementById('par2');
var secondbutton = document.getElementById('par3');
var thirdbutton = document.getElementById('par4');
var projectsbutton = document.getElementById('showme');

firstbutton.onclick = function(){
  typer.type('I develop content to help people understand complex technologies');
  firstbutton.style.display = 'none';
  secondbutton.style.display = 'inline-block';
  thirdbutton.style.display = 'none';
};
secondbutton.onclick = function(){
  typer.type('I specialize in software systems — my professional affiliations include Veeva Systems and Dell EMC');
  firstbutton.style.display = 'none';
  secondbutton.style.display = 'none';
  thirdbutton.style.display = 'inline-block';
};
thirdbutton.onclick = function(){
  typer.type('See some of my work here 👇');
  firstbutton.style.display = 'none';
  secondbutton.style.display = 'none';
  thirdbutton.style.display = 'none';
  projectsbutton.style.marginLeft = '0px';
};
});

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
