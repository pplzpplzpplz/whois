console.log('it works');

const playButton = document.querySelector('#playButton');
const skipButton = document.querySelector('#skipButton');
const turnsCount = document.querySelector('#turnsCount');
const listensCount = document.querySelector('#listensCount');
const timeCount = document.querySelector('#timeCount');
const audioIncrement = .1;
const top200Songs = [
  "As It Was by Harry Styles", 
  "First Class by Jack Harlow", 
  "WAIT FOR U (feat. Drake & Tems) by Future", 
  "PUFFIN ON ZOOTIEZ by Future", 
  "I'M ON ONE (feat. Drake) by Future", 
  "Heat Waves by Glass Animals", 
  "About Damn Time by Lizzo", 
  "712PM by Future", 
  "I'M DAT N**** by Future", 
  "KEEP IT BURNIN (feat. Kanye West) by Future", 
  "INDUSTRY BABY (feat. Jack Harlow) by Lil Nas X", 
  "STAY (with Justin Bieber) by The Kid LAROI", 
  "Honest (feat. Don Toliver) by Justin Bieber", 
  "No Role Modelz by J. Cole", 
  "good 4 u by Olivia Rodrigo", 
  "LOVE YOU BETTER by Future", 
  "Woman by Doja Cat", 
  "FOR A NUT (feat. Gunna & Young Thug) by Future", 
  "MASSAGING ME by Future", 
  "Wait a Minute! by WILLOW", 
  "Enemy (with JID) - from the series Arcane League of Legends by Imagine Dragons", 
  "Ghost by Justin Bieber", 
  "Thousand Miles by The Kid LAROI", 
  "GOLD STACKS by Future", 
  "Need to Know by Doja Cat", 
  "Super Gremlin by Kodak Black", 
  "Knife Talk (with 21 Savage ft. Project Pat) by Drake", 
  "PROVENZA by KAROL G", 
  "505 by Arctic Monkeys", 
  "MAMIII by Becky G, KAROL G", 
  "CHICKENS (feat. EST Gee) by Future", 
  "THATS WHAT I WANT by Lil Nas X", 
  "Bam Bam (feat. Ed Sheeran) by Camila Cabello", 
  "Dark Red by Steve Lacy", 
  "Sweater Weather by The Neighbourhood", 
  "I Love You So by The Walters", 
  "Cold Heart - PNAU Remix by Elton John, Dua Lipa", 
  "Wasted On You by Morgan Wallen", 
  "Nail Tech by Jack Harlow", 
  "Don't Think Jesus by Morgan Wallen", 
  "We Don't Talk About Bruno by Carolina Gaitán - La Gaita, Mauro Castillo, Adassa, Rhenzy Feliz, Diane Guerrero, Stephanie Beatriz, Encanto - Cast", 
  "Shivers by Ed Sheeran", 
  "Boyfriend by Dove Cameron", 
  "See You Again (feat. Kali Uchis) by Tyler, The Creator", 
  "Kiss Me More (feat. SZA) by Doja Cat", 
  "Wants and Needs (feat. Lil Baby) by Drake", 
  "family ties (with Kendrick Lamar) by Baby Keem", 
  "traitor by Olivia Rodrigo", 
  "MIDDLE OF THE NIGHT by Elley Duhé", 
  "HOLY GHOST by Future", 
  "Monëy so big by Yeat", 
  "WE JUS WANNA GET HIGH by Future", 
  "VOODOO (feat. Kodak Black) by Future", 
  "Flowers by Lauren Spencer-Smith", 
  "Lost by Frank Ocean", 
  "pushin P (feat. Young Thug) by Gunna, Future", 
  "One Right Now (with The Weeknd) by Post Malone", 
  "deja vu by Olivia Rodrigo", 
  "In The Stars by Benson Boone", 
  "Happier Than Ever by Billie Eilish", 
  "20 Min by Lil Uzi Vert", 
  "Numb Little Bug by Em Beihold", 
  "Broadway Girls (feat. Morgan Wallen) by Lil Durk", 
  "10 Things I Hate About You by Leah Kate", 
  "Right On by Lil Baby", 
  "Better Days (NEIKED x Mae Muller x Polo G) by NEIKED", 
  "Money Trees by Kendrick Lamar, Jay Rock", 
  "abcdefu by GAYLE", 
  "Whiskey Glasses by Morgan Wallen", 
  "Light Switch by Charlie Puth", 
  "Watermelon Sugar by Harry Styles", 
  "In My Head by Lil Tjay", 
  "Levitating (feat. DaBaby) by Dua Lipa", 
  "The Motto by Tiësto, Ava Max", 
  "YKWIM? by Yot Club", 
  "Easy On Me by Adele", 
  "Heartless by Kanye West", 
  "NEW MAGIC WAND by Tyler, The Creator", 
  "The Spins by Mac Miller", 
  "Drowning (feat. Kodak Black) by A Boogie Wit da Hoodie", 
  "drivers license by Olivia Rodrigo", 
  "BACK TO THE BASICS by Future", 
  "Big Energy by Latto", 
  "Blinding Lights by The Weeknd", 
  "Something In The Way - Remastered by Nirvana", 
  "Something in the Orange by Zach Bryan", 
  "Die For You by The Weeknd", 
  "Mr. Brightside by The Killers", 
  "Sunflower - Spider-Man: Into the Spider-Verse by Post Malone, Swae Lee", 
  "she's all i wanna be by Tate McRae", 
  "Dandelions by Ruth B.", 
  "Notion by The Rare Occasions", 
  "You Right by Doja Cat, The Weeknd", 
  "Tek It by Cafuné", 
  "THE WAY THINGS GOING by Future", 
  "Ain't Shit by Doja Cat", 
  "Drip Too Hard (Lil Baby & Gunna) by Lil Baby", 
  "Bound 2 by Kanye West", 
  "Way 2 Sexy (with Future & Young Thug) by Drake", 
  "Wet Dreamz by J. Cole", 
  "What Happened To Virgil (feat. Gunna) by Lil Durk", 
  "Revenge by XXXTENTACION", 
  "RAPSTAR by Polo G", 
  "Space Song by Beach House", 
  "Sand In My Boots by Morgan Wallen", 
  "Pepas by Farruko", 
  "Plan B by Megan Thee Stallion", 
  "Bad Habits by Ed Sheeran", 
  "Get Into It (Yuh) by Doja Cat", 
  "Frozen by Lil Baby", 
  "Lucid Dreams by Juice WRLD", 
  "Sweetest Pie by Megan Thee Stallion, Dua Lipa", 
  "Goin Up by Lil Tjay", 
  "That That (prod. & feat. SUGA of BTS) by PSY", 
  "favorite crime by Olivia Rodrigo", 
  "Freaks by Surf Curse", 
  "Buy Dirt by Jordan Davis, Luke Bryan", 
  "All Girls Are The Same by Juice WRLD", 
  "Pursuit Of Happiness (Nightmare) by Kid Cudi, MGMT, Ratatat", 
  "Meet Me At Our Spot by THE ANXIETY, WILLOW, Tyler Cole", 
  "Yes Indeed by Lil Baby, Drake", 
  "Save Your Tears by The Weeknd", 
  "Yonaguni by Bad Bunny", 
  "Skyline by Khalid", 
  "Work Out by J. Cole", 
  "Ni**as In Paris by JAY-Z, Kanye West", 
  "Softcore by The Neighbourhood", 
  "2055 by Sleepy Hallow", 
  "Martin & Gina by Polo G", 
  "I Hate U by SZA", 
  "Surface Pressure - From \"Encanto\"/Soundtrack Version by Jessica Darrow", 
  "X ÚLTIMA VEZ by Daddy Yankee, Bad Bunny", 
  "Soy El Unico by Yahritza Y Su Esencia", 
  "DÁKITI by Bad Bunny, Jhay Cortez", 
  "Flashing Lights by Kanye West, Dwele", 
  "Lo Siento BB:/ (with Bad Bunny & Julieta Venegas) by Tainy", 
  "In A Minute by Lil Baby", 
  "Father Stretch My Hands Pt. 1 by Kanye West", 
  "Daddy Issues by The Neighbourhood", 
  "Jugaste y Sufrí by Eslabon Armado, DannyLux", 
  "Fair Trade (with Travis Scott) by Drake", 
  "Redbone by Childish Gambino", 
  "Adore You by Harry Styles", 
  "Love Sosa by Chief Keef", 
  "The Way Life Goes (feat. Oh Wonder) by Lil Uzi Vert", 
  "SLOW DANCING IN THE DARK by Joji", 
  "Cover Me Up by Morgan Wallen", 
  "Dreams - 2004 Remaster by Fleetwood Mac", 
  "jealousy, jealousy by Olivia Rodrigo", 
  "Sky by Playboi Carti", 
  "Circles by Post Malone", 
  "Smells Like Teen Spirit - Remastered by Nirvana", 
  "Alien Blues by Vundabar", 
  "Iris by The Goo Goo Dolls", 
  "Shoota (feat. Lil Uzi Vert) by Playboi Carti", 
  "The Real Slim Shady by Eminem", 
  "LA CANCIÓN by J Balvin, Bad Bunny", 
  "Passionfruit by Drake", 
  "EA (feat. 21 Savage) by Young Nudy", 
  "Good Days by SZA", 
  "Scrape It Off (feat. Lil Uzi Vert & Don Toliver) by Pusha T", 
  "It Was A Good Day by Ice Cube", 
  "HUMBLE. by Kendrick Lamar", 
  "LOVE. FEAT. ZACARI. by Kendrick Lamar", 
  "Leave The Door Open by Bruno Mars, Anderson .Paak, Silk Sonic", 
  "Flower Shops (feat. Morgan Wallen) by ERNEST", 
  "'Til You Can't by Cody Johnson", 
  "Fingers Crossed by Lauren Spencer-Smith", 
  "More Than My Hometown by Morgan Wallen", 
  "Tennessee Whiskey by Chris Stapleton", 
  "Hold That Heat (feat. Travis Scott) by Southside, Future", 
  "Tell Em by Cochise, $NOT", 
  "Took Her To The O by King Von", 
  "The Hills by The Weeknd", 
  "When You're Gone by Shawn Mendes", 
  "Fuck Love (feat. Trippie Redd) by XXXTENTACION", 
  "XO Tour Llif3 by Lil Uzi Vert", 
  "P power (feat. Drake) by Gunna", 
  "MONTERO (Call Me By Your Name) by Lil Nas X", 
  "Sunroof by Nicky Youre, dazy", 
  "Me and Your Mama by Childish Gambino", 
  "Young by Vacations", 
  "Cigarette Daydreams by Cage The Elephant", 
  "Banking On Me by Gunna", 
  "MIDDLE CHILD by J. Cole", 
  "IDGAF (with blackbear) by BoyWithUke", 
  "EARFQUAKE by Tyler, The Creator", 
  "Without Me by Eminem", 
  "Ric Flair Drip (with Metro Boomin) by Offset", 
  "The Less I Know The Better by Tame Impala", 
  "Desesperados by Rauw Alejandro, Chencho Corleone", 
  "Mr. Rager by Kid Cudi", 
  "Chasin' You by Morgan Wallen", 
  "House of Memories by Panic! At The Disco", 
  "Streets by Doja Cat", 
  "'Till I Collapse by Eminem, Nate Dogg", 
  "Save Your Tears (Remix) (with Ariana Grande) - Bonus Track by The Weeknd", 
  "Lose Yourself - From \"8 Mile\" Soundtrack by Eminem", 
  "this is what falling in love feels like by JVKE", 
  "Envolver by Anitta",
]

let song;
let cueStart = 43.5;
let duration = .1;

let turnsCountData = 0;
let listensCountData = 0;
let timeCountData = .1;
let finalScore;

function preload() {
  song = loadSound('asitwas.mp3');
}

function setup() {
  var calcedHeight = windowWidth;
  var canvas = createCanvas(300, calcedHeight);
  canvas.parent('playerContainer');
  angleMode(DEGREES); // Change the mode to DEGREES
  colorMode(HSB);
  fft = new p5.FFT(0.9, 128);
  space_between_lines = width / 128;
}

playButton.addEventListener('click', playSound);

function playSound() {
  gsap.to(playButton, {duration: .05, opacity: 0});
  listensCountData = listensCountData + 1;
  listensCount.innerHTML = listensCountData;
  // play([startTime], [rate], [amp], [cueStart], [duration])
  song.play(0, 1, 1, cueStart, duration);
  song.onended(function() {
    gsap.to(playButton, {duration: .05, opacity: 1});
  });
}

skipButton.addEventListener('click', skipClicked);

function skipClicked() {
  turnsCountData = turnsCountData + 1;
  turnsCount.innerHTML = turnsCountData;
  duration = duration + audioIncrement;
  timeCountData = timeCountData + audioIncrement
  timeCount.innerHTML = `${timeCountData.toFixed(1)} s`;
}



// 
// 
// 
// 
// 
// 
// 



let buttton, fft, space_between_lines;

function toggleSong() {
  if(song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}




//Switch to branch symmetric-spectrum using "git checkout symmetric-spectrum" if you want symmetric spectrum.

function draw() {
  background(0);
  
  let spectrum = fft.analyze();
  for (let i = 0; i < spectrum.length; i++) {
    fill(i, 255, 255, spectrum[i]);
    let amp = spectrum[i];
    let y = map(amp, 0, 256, height, 0);
    rect(i * (space_between_lines), y, space_between_lines, height - y, 20);
  }
}

// Chrome 70 will require user gestures to enable web audio api
// Click on the web page to start audio
function touchStarted() {
  getAudioContext().resume();
}

let wCount = 0;

document.addEventListener('keypress', function(e) {
  if(e.key === 'w') {
    wCount = wCount+1
    if (wCount % 2 === 0) {
      gsap.to(playButton, {duration: .05, opacity: 1});
      document.querySelector('.winner').classList.remove('show');
      document.querySelector('iframe').classList.remove('show');
    } else {
      gsap.to(playButton, {duration: .05, opacity: 0});
      document.querySelector('.winner').classList.add('show');
      document.querySelector('iframe').classList.add('show');
      

      finalScore = turnsCountData + listensCountData + timeCountData;
      
      document.querySelector('#score').innerHTML = `${finalScore}`;
      let winnerSongID = '4LRPiXqCikLlN15c3yImP7';
      let winnerSongURL = `https://open.spotify.com/embed/track/${winnerSongID}?utm_source=generator`;
      document.querySelector('iframe').src = winnerSongURL;
    }
  }
});

