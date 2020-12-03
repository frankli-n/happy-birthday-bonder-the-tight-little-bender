var quotes = [
  'I belong, and my penis, it be long.',
  'My favorite pen is my penis. Put my words in your mouth.',
  'If a man was choking, what would I do? Well, I’d remove my penis from his throat.',
  'How big is my penis? Big enough to touch my hands.',
  'These times are hard, and so is my penis.',
  'My penis is like a wet noodle, only not as thick. Or tasty.'
];

window.onresize = function()
{
  var el = document.getElementsByTagName('section')[0];
  var span = document.getElementsByTagName('span')[0];
  //var width = window.innerWidth;
  var theInstrument = "8";
  var length = Math.floor(window.innerWidth / 10) - 3;
  for(var i=0; i < length; i++)
  {
    theInstrument += '=';
  }
  
  span.innerHTML = quotes[Math.floor(Math.random()*quotes.length)];
  
  theInstrument += "D";
  el.innerHTML = theInstrument;
}

window.onresize();