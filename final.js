/*AUTHOR: Kyle Kruskamp*/
var noun = [];
var adjective = [];
var verb = [];
var p_verb = [];

function normal()
{
  setCookie("noun", noun, 1);
  setCookie("adjective", adjective, 1);
  setCookie("verb", verb, 1);
  setCookie("p_verb", p_verb, 1);

  window.location.href='lib.html'
}

function nounz()
{
  if (document.getElementById("noun").value == "")
  {
    window.alert('please enter a valid input');
  }

  else {
    noun.push(document.getElementById("noun").value);
    console.log(noun);
    document.getElementById("noun").value = "";
    noun.toString();
  }
}

function adjz()
{
  if (document.getElementById("adjective").value == "")
  {
    window.alert('please enter a valid input');
  }

  else {
    adjective.push(document.getElementById("adjective").value);
    console.log(adjective);
    document.getElementById("adjective").value = "";
    adjective.toString();
  }
}

function verbz()
{
  if (document.getElementById("verb").value == "")
  {
    window.alert('please enter a valid input');
  }

  else {
    verb.push(document.getElementById("verb").value);
    console.log(verb);
    document.getElementById("verb").value = "";
    verb.toString();
  }
}

function pverbz()
{
  if (document.getElementById("p_verb").value == "")
  {
    window.alert('please enter a valid input');
  }

  else {
    p_verb.push(document.getElementById("p_verb").value);
    console.log(p_verb);
    document.getElementById("p_verb").value = "";
    p_verb.toString();
  }
}

function randomize()
{
  var nouns = ['baseball','committee','farmer','girl','accident','wife','uncle'
                ,'muffin', 'chicken', 'frog', 'president', 'buffalo', 'gun','dinosaur'];
  nouns = nouns.toString();

  var adjectives = ["blue","powerful","golden","fat","smelly","massive","green"
                    ,'stupid', 'greedy', 'weak','tremendous', 'black', 'shiny', 'striped'];
  adjectives = adjectives.toString();

  var verbs = ["attack","fart","yell","run","work","give","use"
                ,'throw','smoke','drink','cry','type', 'spit','sell'];
  verbs = verbs.toString();

  var p_verbs = ["farted","yelled","ran","worked","gave","used","abused"
                  ,'cried', 'smoked', 'threw','sold','ate','drove','held'];
  p_verbs = p_verbs.toString();

  setCookie("nouns", nouns, 1);
  setCookie("adjectives", adjectives, 1);
  setCookie("verbs", verbs, 1);
  setCookie("p_verbs", p_verbs, 1);

  window.location.href='r_lib.html'
}

//******************************************
//normal functions
//******************************************

function libWar() {
  var rNoun = getCookie("noun");
  rNoun = rNoun.split(",");

  var rAdj = getCookie("adjective");
  rAdj = rAdj.split(",");

  var rVerb = getCookie("verb");
  rVerb = rVerb.split(",");

  var rp_verb = getCookie("p_verb")
  rp_verb = rp_verb.split(",")

console.log(rNoun.length);
console.log(rAdj.length);
console.log(rVerb.length);
console.log(rp_verb.length);

  if ((rNoun.length < rAdj.length) && (rNoun.length < rVerb.length) && (rNoun.length < rp_verb.length))
  {
    gNumber = rNoun.length;
  }

  else if ((rAdj.length < rNoun.length) && (rAdj.length < rVerb.length) && (rAdj.length < rp_verb.length))
  {
    gNumber = rAdj.length;
  }

  else if ((rVerb.length < rNoun.length) && (rVerb.length < rAdj.length) && (rVerb.length < rp_verb.length))
  {
    gNumber = rVerb.length;
  }

  else {
    gNumber = rp_verb.length;
  }
  document.getElementById("lib_title").innerHTML = "War";
  var random = Math.floor(Math.random() * gNumber)

  document.getElementById("para_choice").innerHTML = "Today I was deployed. All they gave me was a(n) " + rNoun[random] +
  " and a " + rNoun[random] + ". I remember hearing about the stories of war from my " + rNoun[random] + ". I " + rp_verb[random] +
  " and thought about all of the " + rAdj[random] + " pictures that I had seen, and what I had just gotten myself into." +
  " I " + rp_verb[random] + ". My mom and " + rNoun[random] + " had given me my " + rNoun[random] +
  ". I overheard the other recruits talking about how " + rAdj[random] + " and " + rAdj[random] + " the food on base was." +
  " above my head I heard the sound of the " + rNoun[random] + " " + rVerb[random] +
  " just then I heard the shout of the sergent, and the convoy ahead had " + rp_verb[random] + ". my ears rang as I saw the wreckage." +
  " I didn't " + rVerb[random] + " I had seen that too many times to. War changes you.";
}

function libCar() {
  var rNoun = getCookie("noun");
  rNoun = rNoun.split(",");

  var rAdj = getCookie("adjective");
  rAdj = rAdj.split(",");

  var rVerb = getCookie("verb");
  rVerb = rVerb.split(",");

  var rp_verb = getCookie("p_verb")
  rp_verb = rp_verb.split(",")

console.log(rNoun.length);
console.log(rAdj.length);
console.log(rVerb.length);
console.log(rp_verb.length);

  if ((rNoun.length < rAdj.length) && (rNoun.length < rVerb.length) && (rNoun.length < rp_verb.length))
  {
    gNumber = rNoun.length;
  }

  else if ((rAdj.length < rNoun.length) && (rAdj.length < rVerb.length) && (rAdj.length < rp_verb.length))
  {
    gNumber = rAdj.length;
  }

  else if ((rVerb.length < rNoun.length) && (rVerb.length < rAdj.length) && (rVerb.length < rp_verb.length))
  {
    gNumber = rVerb.length;
  }

  else {
    gNumber = rp_verb.length;
  }
  document.getElementById("lib_title").innerHTML = "Car";
  var random = Math.floor(Math.random() * gNumber)

  document.getElementById("para_choice").innerHTML = "We left for camp today. my " + rNoun[random] +
  " said I should bring a " + rNoun[random] + " and a " + rNoun[random] +
  ". We " + rp_verb[random] + " just like we always do on long drives. " + "I've always liked staring at the " + rAdj[random] + rNoun[random] +
  + rVerb[random] + "." + " My mom and dad were up front talking, until one of them " + rp_verb[random] + ". We all laughed." +
  " I starting dozing off once I heard the sound of the " + rNoun[random] + " " + rVerb[random] + " on the radio. Went I woke up again " +
  " we were almost to my " + rNoun[random] + "s house."

}

function resetGo() {
    window.location.href='final.html'
}

function libZoo() {
  var rNoun = getCookie("noun");
  rNoun = rNoun.split(",");

  var rAdj = getCookie("adjective");
  rAdj = rAdj.split(",");

  var rVerb = getCookie("verb");
  rVerb = rVerb.split(",");

  var rp_verb = getCookie("p_verb")
  rp_verb = rp_verb.split(",")

console.log(rNoun.length);
console.log(rAdj.length);
console.log(rVerb.length);
console.log(rp_verb.length);

  if ((rNoun.length < rAdj.length) && (rNoun.length < rVerb.length) && (rNoun.length < rp_verb.length))
  {
    gNumber = rNoun.length;
  }

  else if ((rAdj.length < rNoun.length) && (rAdj.length < rVerb.length) && (rAdj.length < rp_verb.length))
  {
    gNumber = rAdj.length;
  }

  else if ((rVerb.length < rNoun.length) && (rVerb.length < rAdj.length) && (rVerb.length < rp_verb.length))
  {
    gNumber = rVerb.length;
  }

  else {
    gNumber = rp_verb.length;
  }

  document.getElementById("lib_title").innerHTML = "Zoo";

  var random = Math.floor(Math.random() * gNumber)

  document.getElementById("lib_title").innerHTML = "Zoo";
  document.getElementById("para_choice").innerHTML = "Today I went to the zoo and saw a(n) " + rAdj[random] +
  " " + rNoun[random] + " jumping up and down in its cage, he " + rp_verb[random] +
  " through the large tunnel that led to its " + rAdj[random] +
  " " + rNoun[random] + " I had some peanuts and passed them through the cage to a gigantic " + rNoun[random] +
  " towering above my head. Feeding that animal made me hungry. I went to get a " + rAdj[random] + " scoop of ice cream." +
  " It filled my stomach. Afterward I had to " + rVerb[random] + " to catch our bus. When i got home I " + rp_verb[random] + ".";
}

//******************************************
//random functions
//******************************************

function rlibZoo() {
  var rNoun = getCookie("nouns");
  rNoun = rNoun.split(",");

  var rAdj = getCookie("adjectives");
  rAdj = rAdj.split(",");

  var rVerb = getCookie("verbs");
  rVerb = rVerb.split(",");

  var rp_verb = getCookie("p_verbs")
  rp_verb = rp_verb.split(",")

var random = (Math.floor(Math.random() * 10) + 2);

  console.log(random);
  console.log(rNoun);

  if (random == 13)
  {
    random--;
  }

  if (random == 0)
  {
    random++;
  }

  document.getElementById("lib_title").innerHTML = "Zoo";
  document.getElementById("para_choice").innerHTML = "Today I went to the zoo and saw a(n) " + rAdj[random + 1] +
  " " + rNoun[random - 1] + " jumping up and down in its cage, he " + rp_verb[random] +
  " through the large tunnel that led to its " + rAdj[random] +
  " " + rNoun[random] + " I had some peanuts and passed them through the cage to a gigantic " + rNoun[random + 1] +
  " towering above my head. Feeding that animal made me hungry. I went to get a " + rAdj[random - 1] + " scoop of ice cream." +
  " It filled my stomach. Afterward I had to " + rVerb[random] + " to catch our bus. When I got home I " + rp_verb[random + 1] + ".";
}

function rlibWar() {
  var rNoun = getCookie("nouns");
  rNoun = rNoun.split(",");

  var rAdj = getCookie("adjectives");
  rAdj = rAdj.split(",");

  var rVerb = getCookie("verbs");
  rVerb = rVerb.split(",");

  var rp_verb = getCookie("p_verbs")
  rp_verb = rp_verb.split(",")

  var random = (Math.floor(Math.random() * 10) + 2);

  console.log(random);
  console.log(rNoun);

  document.getElementById("lib_title").innerHTML = "War";

  document.getElementById("para_choice").innerHTML = "Today I was deployed. All they gave me was a(n) " + rNoun[random + 1] +
  " and a " + rNoun[random - 1] + ". I remember hearing about the stories of war from my " + rNoun[random] + ". I " + rp_verb[random] +
  " and thought about all of the " + rAdj[random] + " pictures that I had seen, and what I had just gotten myself into." +
  " I " + rp_verb[random - 1] + ". My mom and " + rNoun[random + 2] + " had given me my " + rNoun[random - 2] +
  ". I overheard the other recruits talking about how " + rAdj[random + 1] + " and " + rAdj[random - 1] + " the food on base was." +
  " above my head I heard the sound of the" + rNoun[random] + " " + rVerb[random] +
  " just then I heard the shout of the sergent, and the convoy ahead had " + rp_verb[random + 1] + ". my ears rang as I saw the wreckage." +
  " I didn't " + rVerb[random + 1] + " I had seen that too many times to. War changes you.";
}

function rlibCar() {
  var rNoun = getCookie("nouns");
  rNoun = rNoun.split(",");

  var rAdj = getCookie("adjectives");
  rAdj = rAdj.split(",");

  var rVerb = getCookie("verbs");
  rVerb = rVerb.split(",");

  var rp_verb = getCookie("p_verbs")
  rp_verb = rp_verb.split(",")

var random = (Math.floor(Math.random() * 10) + 2);

  console.log(random);
  console.log(rNoun);

  if (random == 13)
  {
    random--;
  }

  if (random == 0)
  {
    random++;
  }

  document.getElementById("lib_title").innerHTML = "Car";
  document.getElementById("para_choice").innerHTML = "We left for camp today. my " + rNoun[random + 1] +
  " said I should bring a " + rNoun[random] + " and a " + rNoun[random - 2] +
  ". We " + rp_verb[random + 1] + " just like we always do on long drives. " + "I've always liked staring at the "
  + rAdj[random] + " " + rNoun[random] + " " + rVerb[random] + "." + " My mom and dad were up front talking, until one of them "
  + rp_verb[random - 1] + ". We all laughed." + " I starting dozing off once I heard the sound of the "
  + rNoun[random - 1] + " " + rVerb[random + 1] + " on the radio. Went I woke up again " +
  " we were almost to my " + rNoun[random + 2] + "s house."

}

//******************************************
//cookies - courtesy of w3 schools
//******************************************

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
