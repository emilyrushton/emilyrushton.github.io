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

var doc, bod, I, TypeMaker; // for use on other loads
addEventListener('load', function(){
doc = document; bod = doc.body;
I = function(id){
  return doc.getElementById(id);
};
var introtyper = new TypeMaker(I('output'));
introtyper.type('I am a technical communicator');

var typer = new TypeMaker(I('output')), single_test = I('single_test'), rand_test = I('rand_test');
var testArray = ['The sky is blue.', 'The stove is hot.', 'The floor is wet.', 'The grass is green.', 'The water is cold.'];
var testArrayL = testArray.length;
var firstbutton = document.getElementById('par2');
var secondbutton = document.getElementById('par3');
var thirdbutton = document.getElementById('par4');
var projectsbutton = document.getElementById('showme');

firstbutton.onclick = function(){
  document.getElementById('output').innerHTML = "";
  typer.type('I found a career in my two favorite things: writing and tech');
  firstbutton.style.display = 'none';
  secondbutton.style.display = 'inline-block';
  thirdbutton.style.display = 'none';
};
secondbutton.onclick = function(){
  typer.type('I specialize in software — with career affiliations such as Veeva Systems and Dell EMC');
  firstbutton.style.display = 'none';
  secondbutton.style.display = 'none';
  thirdbutton.style.display = 'inline-block';
};
thirdbutton.onclick = function(){
  typer.type('Learn more about my work here 👇');
  firstbutton.style.display = 'none';
  secondbutton.style.display = 'none';
  thirdbutton.style.display = 'none';
  projectsbutton.style.marginLeft = '0px';
};
});