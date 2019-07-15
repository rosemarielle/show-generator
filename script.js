alert("Not all of these are Netflix originals, just shows you can watch on Netflix. Thanks! :D")

var shows = [
  "The Office",
  "Stranger Things",
  "You",
  "Chilling Adventures of Sabrina",
  "Black Mirror",
  "Gossip Girl",
  "The Umbrella Academy",
  "Jane the Virgin",
  "Attack On Titan",
  "Riverdale",
  "Friends",
  "The Vampire Diaries",
  "How to Get Away With Murder",
  "The Haunting of Hill House",
  "Gilmore Girls",
  "Gossip Girl"
];
var sources = [
  "https://www.netflix.com/title/70136120",
  "https://www.netflix.com/title/80057281",
  "https://www.netflix.com/title/80211991",
  "https://www.netflix.com/title/80223989",
  "https://www.netflix.com/title/70264888",
  "https://www.netflix.com/title/70143811",
  "https://www.netflix.com/title/80186863",
  "https://www.netflix.com/title/80027158",
  "https://www.netflix.com/title/70299043",
  "https://www.netflix.com/title/80133311",
  "https://www.netflix.com/title/70153404",
  "https://www.netflix.com/title/70143860",
  "https://www.netflix.com/title/80024057",
  "https://www.netflix.com/title/80189221",
  "https://www.netflix.com/title/70155618",
  "https://www.netflix.com/title/70143811"
];
var button = document.getElementById('button');
var text = document.getElementById('text');
var link = document.getElementById('link');

function randNum(array) {
  var decimal = Math.random();
  var makeBig = decimal * shows.length;
  var random = Math.floor(makeBig);
  return random;
}

button.addEventListener("click", function() {
    var index = randNum(shows);
    var show = shows[index];
    text.innerHTML = shows[index];
    link.href = sources[index];
  })
