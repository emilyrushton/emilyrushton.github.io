TypeMaker = function(element, interval){
  this.element = element; this.interval = interval || 25;
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
var typer = new TypeMaker(I('output')), single_test = I('single_test'), rand_test = I('rand_test');
var testArray = ['The sky is blue.', 'The stove is hot.', 'The floor is wet.', 'The grass is green.', 'The water is cold.'];
var testArrayL = testArray.length;
var introtyper = new TypeMaker(I('intro'));
var firstbutton = document.getElementById('par2');
var secondbutton = document.getElementById('par3');
var thirdbutton = document.getElementById('par4');

window.onload = function(){
  introtyper.type('I am a technical communicator.');
  firstbutton.style.display = 'block';
  secondbutton.style.display = 'none';
  thirdbutton.style.display = 'none';
};
firstbutton.onclick = function(){
  typer.type('I develop content to help people understand complex technologies.');
  firstbutton.style.display = 'none';
  secondbutton.style.display = 'block';
  thirdbutton.style.display = 'none';
};
secondbutton.onclick = function(){
  typer.type('I’ve worked nearly 7 years’ in the software industry, with companies such as Dell EMC and Veeva Systems.');
  firstbutton.style.display = 'none';
  secondbutton.style.display = 'none';
  thirdbutton.style.display = 'block';
};
thirdbutton.onclick = function(){
  typer.type('Every day is an opportunity to get better. My ideal job is one where I am challenged and learn every day. Tech writing gives me that challenge, while I get to dedicate my career to helping others learn too.');
  firstbutton.style.display = 'none';
  secondbutton.style.display = 'none';
  thirdbutton.style.display = 'none';
};
});