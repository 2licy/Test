console.log("Launching game...");
function whenLoaded() {
    document.title = "Immortal";
    console.log("Immortal v1.0.0");
    var online = "Connected to the Internet: " + navigator.onLine;
    console.log(online);
    document.querySelector(".loading").style.display = "none";
    document.addEventListener('contextmenu', event => event.preventDefault());
    window.addEventListener("click", attack, false);
    window.addEventListener("keydown", functionKeydown, false);
    window.addEventListener("keyup", functionKeyup, false);

    document.getElementById("inventory1").innerHTML = "1";
    document.getElementById("inventory2").innerHTML = "2";
    document.getElementById("inventory3").innerHTML = "3";
    document.getElementById("inventory4").innerHTML = "4";
    document.getElementById("inventory5").innerHTML = "5";
    document.getElementById("inventory6").innerHTML = "6";
    document.getElementById("inventory7").innerHTML = "7";
    document.getElementById("inventory8").innerHTML = "8";
    document.getElementById("inventory9").innerHTML = "9";

    if (screen.width < 1100) {
        //Mobile Preset
        console.log("Mobile version");
        showArrows();
    }

    hp = 100;
    gold = 100;
    damage = 8;

    startTime();
    spawnBonus1();
    spawnBonus2();
}

//Define Value
item1 = false;//Items
item2 = false;
item3 = false;
item4 = false;
item5 = false;
item6 = false;
item7 = false;
item8 = false;
item9 = false;
ghost = false;
displayed1 = false;//Message/TURRET
displayed2 = false;
displayed3 = false;
displayed4 = false;
displayed5 = false;
displayed6 = false;
displayed7 = false;
displayed8 = false;
displayed9 = false;
displayed10 = false;
displayed11 = false;
turret1 = true;//turrets
turret2 = true;
turret3 = true;
turret4 = true;
turret5 = true;
turret6 = true;
turret7 = true;
turret8 = true;
turret9 = true;
turret10 = true;
turret11 = true;
hit1 = false;//turretHit
hit2 = false;
hit3 = false;
hit4 = false;
hit5 = false;
hit6 = false;
hit7 = false;
hit8 = false;
hit9 = false;
hit10 = false;
hit11 = false;
hit15 = false;//nexusHit
hit52 = false;//enemyHit
hit53 = false;//minionHit
hit54 = false;
hit55 = false;
hit56 = false;
hit57 = false;
hit58 = false;
hit59 = false;
hit60 = false;
hit61 = false;
EscButton = false;//Button
QButton = false;
MinimapButton = false;
ShopButton = false;
SettingsButton = false;
MuteButton = false;
soundDefeatPlay = false;//Sounds
soundVictoryPlay = false;
soundNexusUnderAttack = false;
firstBlood = false;//Blood
firstDetect = false;//Move
playerMove = true;
enemyMove = true;
runningEnemyPositions = true;
iPS = false;
minionMove = false;
minionSpawned = false;
checkLineHit = false;//checkLine()
checkLine1 = true;
checkLine2 = true;
checkLine3 = true;
checkLine4 = true;
pause = false;//Pause

$(function(){
    $('#shop').draggable({
      handle: "#shop"
  });
    $('#shop').resizable();
});

$(function(){
    $('#settings').draggable({
      handle: "#settings"
  });
    $('#settings').resizable();
});

function audioPlay(whichAudioId, theVolume) {
    let theAudio = document.getElementById(whichAudioId);
    theAudio.play();
    theAudio.volume = theVolume;
}

function audioStop(whichAudioId) {
    let theAudio = document.getElementById(whichAudioId);
    theAudio.pause();
}

//audioPlay("soundBackground", 1);

function functionKeydown() {
    if (firstDetect === false) {
        audioPlay("soundWelcome", 1);
        audioPlay("soundBackground", 0.3);
        firstDetect = true;
    }
}

function functionKeyup() {
}

if (localStorage.getItem("Logged")) {
    login();
    logged = true;
} else {
    document.querySelector("#singUp").style.display = "block";
    console.log('Not logged in');
    logged = false;
}

function login() {
    localStorage.getItem("Username");
    console.log("Username = " + localStorage.getItem("Username"));
    document.querySelector("#singUp").style.display = "none";
    document.querySelector("#avatar").style.display = "block";
    document.querySelector("#profile").style.display = "block";
    document.getElementById("profile").textContent = localStorage.getItem("Username");

    const win1 = localStorage.getItem("winCounter1");
    const win2 = localStorage.getItem("winCounter2");
    const win3 = localStorage.getItem("winCounter3");
    const win4 = localStorage.getItem("winCounter4");
    const win5 = localStorage.getItem("winCounter5");
    const win6 = localStorage.getItem("winCounter6");
    const win7 = localStorage.getItem("winCounter7");
    const win8 = localStorage.getItem("winCounter8");
    const win9 = localStorage.getItem("winCounter9");

    if(win9){
        winResult = localStorage.getItem("winCounter9");
    }else if(win8){
        winResult = localStorage.getItem("winCounter8");
    }else if(win7){
        winResult = localStorage.getItem("winCounter7");
    }else if(win6){
        winResult = localStorage.getItem("winCounter6");
    }else if(win5){
        winResult = localStorage.getItem("winCounter5");
    }else if(win4){
        winResult = localStorage.getItem("winCounter4");
    }else if(win3){
        winResult = localStorage.getItem("winCounter3");
    }else if(win2){
        winResult = localStorage.getItem("winCounter2");
    }else if(win1){
        winResult = localStorage.getItem("winCounter1");
    }else {
        winResult = localStorage.getItem("winCounter0");
    }

    document.getElementById("winCounter").textContent= "Win Counter: " + winResult;
}

function singUp() {
    let username = prompt("Username:");
    localStorage.setItem("Username", username);
    localStorage.setItem("winCounter0", "0");

    if (localStorage.getItem("Username") === "null"){
        console.log("Login failed");
    }else if (localStorage.getItem("Username") === ""){
        console.log("Login failed");
    }else {
        localStorage.setItem("Logged", "True");
        login();
    }
}

function showStats() {
    if (localStorage.getItem("Logged")) {
        document.querySelector("#stats").style.display = "block";
        setTimeout(() => { document.querySelector("#stats").style.display = "none"; }, 7500);
    }
}

function delData() {
    logged = false;
    let text;
    if (confirm("Delete local data?") == true) {
        text = "The data has been deleted.";
        localStorage.clear();
        console.clear();
        document.querySelector("#rank").style.backgroundImage = "url('images/others/transparent.png')";
        document.querySelector("#profile").style.display = "none";
        document.querySelector("#avatar").style.display = "none";
        document.querySelector("#stats").style.display = "none";
        document.querySelector("#rank").style.display = "none";
        document.querySelector("#singUp").style.display = "block";
    } else {
        text = "Data has not been deleted";
    }
    console.log(text);
}

function rank() {
    document.querySelector("#rank").style.display = "block";
    const win1 = localStorage.getItem("winCounter1");
    const win3 = localStorage.getItem("winCounter3");
    const win6 = localStorage.getItem("winCounter6");
    const win9 = localStorage.getItem("winCounter9");
    const xp1 = localStorage.getItem("EnemyHasBeenKilled");

    if(win9){
        localStorage.setItem("Rank", "Challenger");
        document.querySelector("#rank").style.backgroundImage = "url('images/ranks/challenger.png')";
    }else if(win6){
        localStorage.setItem("Rank", "Diamond");
        document.querySelector("#rank").style.backgroundImage = "url('images/ranks/diamond.png')";
    }else if(win3){
        localStorage.setItem("Rank", "Gold");
        document.querySelector("#rank").style.backgroundImage = "url('images/ranks/gold.png')";
    }else if(win1){
        localStorage.setItem("Rank", "Silver");
        document.querySelector("#rank").style.backgroundImage = "url('images/ranks/silver.png')";
    }else if(xp1){
        localStorage.setItem("Rank", "Bronz");
        document.querySelector("#rank").style.backgroundImage = "url('images/ranks/bronz.png')";
    }else{
        localStorage.setItem("Rank", "Unranked");
    }
    var rankResult = localStorage.getItem("Rank");
    document.getElementById("rankText").textContent= "Rank: " + rankResult;
}

//Timer
var sec=0,min=0;
var timeoutId=null;
var check="stop";

function timer() {
    sec++;
    if(sec/60==1){
        min++;
        sec=0;
        if(min/60==1){
            min=0;
        }
    }
    if(sec<10){ dispSec="0"+sec.toString(); }
    else { dispSec=sec.toString(); }
    if(min<10){ dispMin="0"+min.toString(); }
    else { dispMin=min.toString(); }
    document.getElementById("timer").innerHTML=dispMin+":"+dispSec;
}

function startTime() {
    if (check==="stop") {
        timeoutId=window.setInterval(timer,1000);
        check="start";
    } 
    else {
    window.clearInterval(timeoutId);
    check="stop";
    }
}

var fps = document.getElementById("fps");
var fpsTime = Date.now();
var frame = 0;

function tick() {
  var time = Date.now();
  frame++;
  if (time - fpsTime > 1000) {
      fps.innerHTML = "FPS: " + (frame / ((time - fpsTime) / 1000)).toFixed(1);
      fpsResult = (frame / ((time - fpsTime) / 1000)).toFixed(1);
      fpsTime = time;
      frame = 0;
	}
  window.requestAnimationFrame(tick);
}
tick();

function spawnBonus1() {
    bonus1Left = Math.floor(Math.random() * 1500) + 500;
    bonus1Top = Math.floor(Math.random() * 1500) + 500;
    document.querySelector("#bonus1").style.left = bonus1Left + "px";
    document.querySelector("#bonus1").style.top = bonus1Top + "px";
}

function spawnBonus2() {
    bonus2Left = Math.floor(Math.random() * 1500) + 500;
    bonus2Top = Math.floor(Math.random() * 1500) + 500;
    document.querySelector("#bonus2").style.left = bonus2Left + "px";
    document.querySelector("#bonus2").style.top = bonus2Top + "px";
}

//JavaScript Key Code
var keyboard = {};
    keyboard.W = 87;
    keyboard.S = 83;
    keyboard.A = 65;
    keyboard.D = 68;
    keyboard.R = 82;
    keyboard.Q = 81;
    keyboard.E = 69;
    keyboard.F = 70;
    keyboard.T = 84;
    keyboard.C = 67;
    keyboard.ESC = 27;
    keyboard.SHIFT = 16;
    keyboard.TAB = 9;
    keyboard.SEMICOLON = 192;
    keyboard.ITEM1 = 49;
    keyboard.ITEM2 = 50;
    keyboard.ITEM3 = 51;
    keyboard.ITEM4 = 52;
    keyboard.ITEM5 = 53;
    keyboard.ITEM6 = 54;
    keyboard.ITEM7 = 55;
    keyboard.ITEM8 = 56;
    keyboard.ITEM9 = 57;

var ourPlayer = {
    x: 251,
    y: 2326,
    speedMultiplier: 2,
    playerId: document.getElementById("player")
};

var enemy = {
    top: 285,
    left: 2730,
};

//MID LINE (Spacing 40px)
var minion1 = {
    top: 850,
    left: 2100,
};
var minion2 = {
    top: 810,
    left: 2140,
};
var minion3 = {
    top: 770,
    left: 2180,
};

//TOP LINE (Spacing 60px)
var minion4 = {
    top: 770,//720
    left: 520,//550
};
var minion5 = {
    top: 710,//660
    left: 520,//520
};
var minion6 = {
    top: 650,//600
    left: 520,//550
};

//BOT LINE (Spacing 70px)
var minion7 = {
    top: 2200,
    left: 2160,
};
var minion8 = {
    top: 2200,
    left: 2230,
};
var minion9 = {
    top: 2200,
    left: 2300,
};

function spawnMinions() {
    minionMove = true;
    minionSpawned = true;
    audioPlay("soundMinion", 1);

    //MID LINE
    document.querySelector("#minion1").style.left = minion1.left + "px";
    document.querySelector("#minion1").style.top = minion1.top + "px";
    document.querySelector("#minion2").style.left = minion2.left + "px";
    document.querySelector("#minion2").style.top = minion2.top + "px";
    document.querySelector("#minion3").style.left = minion3.left + "px";
    document.querySelector("#minion3").style.top = minion3.top + "px";

    //TOP LINE
    document.querySelector("#minion4").style.left = minion4.left + "px";
    document.querySelector("#minion4").style.top = minion4.top + "px";
    document.querySelector("#minion5").style.left = minion5.left + "px";
    document.querySelector("#minion5").style.top = minion5.top + "px";
    document.querySelector("#minion6").style.left = minion6.left + "px";
    document.querySelector("#minion6").style.top = minion6.top + "px";

    //BOT LINE
    document.querySelector("#minion7").style.left = minion7.left + "px";
    document.querySelector("#minion7").style.top = minion7.top + "px";
    document.querySelector("#minion8").style.left = minion8.left + "px";
    document.querySelector("#minion8").style.top = minion8.top + "px";
    document.querySelector("#minion9").style.left = minion9.left + "px";
    document.querySelector("#minion9").style.top = minion9.top + "px";
}
setTimeout(() => { spawnMinions(); }, 20000);

//Key Press Detection
document.body.onkeyup =
document.body.onkeydown = function(e){

//Prevent Keyboard from Scrolling the Window
if (e.preventDefault) {
    e.preventDefault();
}
else {
    e.returnValue = false;
}

//Find out which key was pressed
var theKeyCode = e.keyCode || e.which;
    keyboard[theKeyCode] = e.type == 'keydown';
};

//Player Movement Updating
var movePlayer = function(theX, theY) {
    ourPlayer.x += (theX||0) * ourPlayer.speedMultiplier;
    ourPlayer.y += (theY||0) * ourPlayer.speedMultiplier;

    ourPlayer.playerId.style.left = ourPlayer.x + 'px';
    ourPlayer.playerId.style.top = ourPlayer.y + 'px';
};

//Player Controls
var sensePlayerMotion = function() {
    if (keyboard[keyboard.W]) {
        if (playerMove == true) {
            movePlayer(0,-1);
            document.querySelector("#player").style.backgroundImage = "url('images/player/jump.gif')";
            setTimeout(() => { document.querySelector("#player").style.backgroundImage = "url('images/player/idle.gif')"; }, 100);
        }
    }

    if (keyboard[keyboard.A]) {
        if (playerMove == true) {
            movePlayer(-1,0);
            document.querySelector("#player").style.backgroundImage = "url('images/player/run.gif')";
            setTimeout(() => { document.querySelector("#player").style.backgroundImage = "url('images/player/idle.gif')"; }, 100);
            document.querySelector("#player").style.transform = "scaleX(-1)";

            if (keyboard[keyboard.W]) {
                document.querySelector("#player").style.transform = "rotate(+20deg) scaleX(-1)";
                setTimeout(() => { document.querySelector("#player").style.transform = "rotate(+0deg) scaleX(-1)"; }, 100);
            }
        }
    }

    if (keyboard[keyboard.S]) {
        if (playerMove == true) {
            movePlayer(0,1);
            document.querySelector("#player").style.backgroundImage = "url('images/player/fall.gif')";
            setTimeout(() => { document.querySelector("#player").style.backgroundImage = "url('images/player/idle.gif')"; }, 100);
        }
    }

    if (keyboard[keyboard.D]) {
        if (playerMove == true) {
            movePlayer(1,0);
            document.querySelector("#player").style.backgroundImage = "url('images/player/run.gif')";
            setTimeout(() => { document.querySelector("#player").style.backgroundImage = "url('images/player/idle.gif')"; }, 100);
            setTimeout(() => { document.querySelector("#player").style.transform = "scaleX(+1)"; }, 100);

            if (keyboard[keyboard.W]) {
                document.querySelector("#player").style.transform = "rotate(-20deg) scaleX(+1)";
                setTimeout(() => { document.querySelector("#player").style.transform = "rotate(+0deg) scaleX(+1)"; }, 100);
            }

            if (keyboard[keyboard.S]) {
                document.querySelector("#player").style.transform = "rotate(+20deg) scaleX(+1)";
                setTimeout(() => { document.querySelector("#player").style.transform = "rotate(+0deg) scaleX(+1)"; }, 100);
            }
        }
    }

    if (keyboard[keyboard.ITEM1]) {
        if (item1 === false) {
            document.querySelector("#inventory1").style.opacity = 0.7;
            setTimeout(() => { document.querySelector("#inventory1").style.opacity = 1; }, 100);
        }

        if (item1 === true) {
            audioPlay("soundActivate", 0.7);
            hp += 25;

            document.querySelector("#inventory1").style.width = "75" + "px";
            document.querySelector("#inventory1").style.height = "75" + "px";
            setTimeout(() => { document.querySelector("#inventory1").style.width = "62" + "px"; }, 200);
            setTimeout(() => { document.querySelector("#inventory1").style.height = "62" + "px"; }, 200);

            setTimeout(() => { document.getElementById("inventory1").style.backgroundImage = "url('images/others/transparent.png')"; }, 200);
            item1 = false;
        }
    }

    if (keyboard[keyboard.ITEM2]) {
        if (item2 === false) {
            document.querySelector("#inventory2").style.opacity = 0.7;
            setTimeout(() => { document.querySelector("#inventory2").style.opacity = 1; }, 100);
        }

        if (item2 === true) {
            audioPlay("soundActivate", 0.7);
            ourPlayer.x = 251;
            ourPlayer.y = 2326;
            movePlayer(0,0);

            document.querySelector("#inventory2").style.width = "75" + "px";
            document.querySelector("#inventory2").style.height = "75" + "px";
            setTimeout(() => { document.querySelector("#inventory2").style.width = "62" + "px"; }, 200);
            setTimeout(() => { document.querySelector("#inventory2").style.height = "62" + "px"; }, 200);

            setTimeout(() => { document.getElementById("inventory2").style.backgroundImage = "url('images/others/transparent.png')"; }, 200);
            item2 = false;
        }
    }

    if (keyboard[keyboard.ITEM3]) {
        if (item3 === false) {
            document.querySelector("#inventory3").style.opacity = 0.7;
            setTimeout(() => { document.querySelector("#inventory3").style.opacity = 1; }, 100);
        }

        if (item3 === true) {
            audioPlay("soundActivate", 0.7);
            ourPlayer.speedMultiplier = 4;
            setTimeout(() => { ourPlayer.speedMultiplier = 2; }, 20000);

            document.querySelector("#inventory3").style.width = "75" + "px";
            document.querySelector("#inventory3").style.height = "75" + "px";
            setTimeout(() => { document.querySelector("#inventory3").style.width = "62" + "px"; }, 20000);
            setTimeout(() => { document.querySelector("#inventory3").style.height = "62" + "px"; }, 20000);

            setTimeout(() => { document.getElementById("inventory3").style.backgroundImage = "url('images/others/transparent.png')"; }, 20000);
            item3 = false;
        }
    }

    if (keyboard[keyboard.ITEM4]) {
        if (item4 === false) {
            document.querySelector("#inventory4").style.opacity = 0.7;
            setTimeout(() => { document.querySelector("#inventory4").style.opacity = 1; }, 100);
        }

        if (item4 === true) {
            audioPlay("soundActivate", 0.7);
            damage = 4;
            setTimeout(() => { damage = 10; }, 20000);

            document.querySelector("#inventory4").style.width = "75" + "px";
            document.querySelector("#inventory4").style.height = "75" + "px";
            setTimeout(() => { document.querySelector("#inventory4").style.width = "62" + "px"; }, 20000);
            setTimeout(() => { document.querySelector("#inventory4").style.height = "62" + "px"; }, 20000);

            setTimeout(() => { document.getElementById("inventory4").style.backgroundImage = "url('images/others/transparent.png')"; }, 20000);
            item4 = false;
        }
    }

    if (keyboard[keyboard.ITEM5]) {
        if (item5 === false) {
            document.querySelector("#inventory5").style.opacity = 0.7;
            setTimeout(() => { document.querySelector("#inventory5").style.opacity = 1; }, 100);
        }

        if (item5 === true) {
            audioPlay("soundActivate", 0.7);
            hp += 100;

            document.querySelector("#inventory5").style.width = "75" + "px";
            document.querySelector("#inventory5").style.height = "75" + "px";
            setTimeout(() => { document.querySelector("#inventory5").style.width = "62" + "px"; }, 200);
            setTimeout(() => { document.querySelector("#inventory5").style.height = "62" + "px"; }, 200);

            setTimeout(() => { document.getElementById("inventory5").style.backgroundImage = "url('images/others/transparent.png')"; }, 200);
            item5 = false;
        }
    }

    if (keyboard[keyboard.ITEM6]) {
        if (item6 === false) {
            document.querySelector("#inventory6").style.opacity = 0.7;
            setTimeout(() => { document.querySelector("#inventory6").style.opacity = 1; }, 100);
        }

        if (item6 === true) {
            audioPlay("soundActivate", 0.7);
            damage = 2;
            setTimeout(() => { damage = 10; }, 20000);

            document.querySelector("#inventory6").style.width = "75" + "px";
            document.querySelector("#inventory6").style.height = "75" + "px";
            setTimeout(() => { document.querySelector("#inventory6").style.width = "62" + "px"; }, 20000);
            setTimeout(() => { document.querySelector("#inventory6").style.height = "62" + "px"; }, 20000);

            setTimeout(() => { document.getElementById("inventory6").style.backgroundImage = "url('images/others/transparent.png')"; }, 20000);
            item6 = false;
        }
    }

    if (keyboard[keyboard.ITEM7]) {
        if (item7 === false) {
            document.querySelector("#inventory7").style.opacity = 0.7;
            setTimeout(() => { document.querySelector("#inventory7").style.opacity = 1; }, 100);
        }

        if (item7 === true) {
            audioPlay("soundActivate", 0.7);
            enemyMove = false;
            setTimeout(() => { enemyMove = true; }, 30000);
            minionMove = false;
            setTimeout(() => { minionMove = true; }, 30000);
            window.clearInterval(timeoutId);
            setTimeout(() => { timeoutId=window.setInterval(timer,1000); }, 30000);

            document.querySelector("#inventory7").style.width = "75" + "px";
            document.querySelector("#inventory7").style.height = "75" + "px";
            setTimeout(() => { document.querySelector("#inventory7").style.width = "62" + "px"; }, 30000);
            setTimeout(() => { document.querySelector("#inventory7").style.height = "62" + "px"; }, 30000);

            setTimeout(() => { document.getElementById("inventory7").style.backgroundImage = "url('images/others/transparent.png')"; }, 30000);
            item7 = false
        }
    }

    if (keyboard[keyboard.ITEM8]) {
        if (item8 === false) {
            document.querySelector("#inventory8").style.opacity = 0.7;
            setTimeout(() => { document.querySelector("#inventory8").style.opacity = 1; }, 100);
        }

        if (item8 === true) {
            audioPlay("soundActivate", 0.7);
            ghost = true;
            setTimeout(() => { ghost = false; }, 30000);
            document.querySelector("#player").style.opacity = "0.4";
            setTimeout(() => { document.querySelector("#player").style.opacity = "1"; }, 30000);

            document.querySelector("#inventory8").style.width = "75" + "px";
            document.querySelector("#inventory8").style.height = "75" + "px";
            setTimeout(() => { document.querySelector("#inventory8").style.width = "62" + "px"; }, 30000);
            setTimeout(() => { document.querySelector("#inventory8").style.height = "62" + "px"; }, 30000);

            setTimeout(() => { document.getElementById("inventory8").style.backgroundImage = "url('images/others/transparent.png')"; }, 30000);
            item8 = false;
        }
    }

    if (keyboard[keyboard.ITEM9]) {
        if (item9 === false) {
            document.querySelector("#inventory9").style.opacity = 0.7;
            setTimeout(() => { document.querySelector("#inventory9").style.opacity = 1; }, 100);
        }

        if (item9 === true) {
            audioPlay("soundActivate", 0.7);
            //Spawn on default location
            setTimeout(() => { enemy.top = 285 }, 20000);
            setTimeout(() => { enemy.left = 2730 }, 20000);
            document.querySelector("#enemy").style.display = "none";
            setTimeout(() => { document.querySelector("#enemy").style.display = "block"; }, 20000);

            setTimeout(() => { minion1.top = 850 }, 20000);
            setTimeout(() => { minion1.left = 2100 }, 20000);
            document.querySelector("#minion1").style.display = "none";
            setTimeout(() => { document.querySelector("#minion1").style.display = "block"; }, 20000);

            setTimeout(() => { minion2.top = 810 }, 20000);
            setTimeout(() => { minion2.left = 2140 }, 20000);
            document.querySelector("#minion2").style.display = "none";
            setTimeout(() => { document.querySelector("#minion2").style.display = "block"; }, 20000);

            setTimeout(() => { minion3.top = 770 }, 20000);
            setTimeout(() => { minion3.left = 2180 }, 20000);
            document.querySelector("#minion3").style.display = "none";
            setTimeout(() => { document.querySelector("#minion3").style.display = "block"; }, 20000);

            setTimeout(() => { minion4.top = 770 }, 20000);
            setTimeout(() => { minion4.left = 520 }, 20000);
            document.querySelector("#minion4").style.display = "none";
            setTimeout(() => { document.querySelector("#minion4").style.display = "block"; }, 20000);

            setTimeout(() => { minion5.top = 710 }, 20000);
            setTimeout(() => { minion5.left = 520 }, 20000);
            document.querySelector("#minion5").style.display = "none";
            setTimeout(() => { document.querySelector("#minion5").style.display = "block"; }, 20000);

            setTimeout(() => { minion6.top = 650 }, 20000);
            setTimeout(() => { minion6.left = 520 }, 20000);
            document.querySelector("#minion6").style.display = "none";
            setTimeout(() => { document.querySelector("#minion6").style.display = "block"; }, 20000);

            setTimeout(() => { minion7.top = 2200 }, 20000);
            setTimeout(() => { minion7.left = 2160 }, 20000);
            document.querySelector("#minion7").style.display = "none";
            setTimeout(() => { document.querySelector("#minion7").style.display = "block"; }, 20000);

            setTimeout(() => { minion8.top = 2200 }, 20000);
            setTimeout(() => { minion8.left = 2230 }, 20000);
            document.querySelector("#minion8").style.display = "none";
            setTimeout(() => { document.querySelector("#minion8").style.display = "block"; }, 20000);

            setTimeout(() => { minion9.top = 2200 }, 20000);
            setTimeout(() => { minion9.left = 2300 }, 20000);
            document.querySelector("#minion9").style.display = "none";
            setTimeout(() => { document.querySelector("#minion9").style.display = "block"; }, 20000);

            document.querySelector("#inventory9").style.width = "75" + "px";
            document.querySelector("#inventory9").style.height = "75" + "px";
            setTimeout(() => { document.querySelector("#inventory9").style.width = "62" + "px"; }, 200);
            setTimeout(() => { document.querySelector("#inventory9").style.height = "62" + "px"; }, 200);

            setTimeout(() => { document.getElementById("inventory9").style.backgroundImage = "url('images/others/transparent.png')"; }, 200);
            item9 = false;
        }
    }

    if (keyboard[keyboard.TAB]) {
        document.querySelector("#TAB").style.display = "none";
        document.querySelector("#inventory1").style.display = "block";
        document.querySelector("#inventory2").style.display = "block";
        document.querySelector("#inventory3").style.display = "block";
        document.querySelector("#inventory4").style.display = "block";
        document.querySelector("#inventory5").style.display = "block";
        document.querySelector("#inventory6").style.display = "block";
        document.querySelector("#inventory7").style.display = "block";
        document.querySelector("#inventory8").style.display = "block";
        document.querySelector("#inventory9").style.display = "block";

        setTimeout(() => { document.querySelector("#TAB").style.display = "block"; }, 4000);
        setTimeout(() => { document.querySelector("#inventory1").style.display = "none"; }, 4000);
        setTimeout(() => { document.querySelector("#inventory2").style.display = "none"; }, 4000);
        setTimeout(() => { document.querySelector("#inventory3").style.display = "none"; }, 4000);
        setTimeout(() => { document.querySelector("#inventory4").style.display = "none"; }, 4000);
        setTimeout(() => { document.querySelector("#inventory5").style.display = "none"; }, 4000);
        setTimeout(() => { document.querySelector("#inventory6").style.display = "none"; }, 4000);
        setTimeout(() => { document.querySelector("#inventory7").style.display = "none"; }, 4000);
        setTimeout(() => { document.querySelector("#inventory8").style.display = "none"; }, 4000);
        setTimeout(() => { document.querySelector("#inventory9").style.display = "none"; }, 4000);
    }

    if (keyboard[keyboard.Q]) {
        document.querySelector("#arrowID").style.display = "block";
        setTimeout(() => { QButton = true; }, 300);
        MinimapButton = false;
        hideMinimap();

        if (QButton === true) {
            document.querySelector("#arrowID").style.display = "none";
            setTimeout(() => { QButton = false; }, 300);
            MinimapButton = true;
            hideMinimap();
        }
    }

    if (keyboard[keyboard.E]) {
        showItemShop();
    }

    if (keyboard[keyboard.SHIFT]) {
        fullscreen();
    }

    if (keyboard[keyboard.R]) {
        reload();
    }

    if (keyboard[keyboard.F]) {
        hideMinimap();
    }

    if (keyboard[keyboard.ESC]) {
        pauseGame();
    }

    if (keyboard[keyboard.C]) {
        toggleMute();
    }

    if (keyboard[keyboard.T]) {
        showStats();
    }

    if (keyboard[keyboard.SEMICOLON]) {
        showSettings();
    }
};

function attack() {
    if (screen.width < 1100) {
        fullscreen();
    }
    if (firstDetect === false) {
        audioPlay("soundWelcome", 1);
        audioPlay("soundBackground", 0.3);
        firstDetect = true;
    }
    if (playerMove == true) {
        audioPlay("soundAttack", 0.6);
        document.querySelector("#player").style.backgroundImage = "url('images/player/attack.gif')";
        setTimeout(() => { document.querySelector("#player").style.backgroundImage = "url('images/player/idle.gif')"; }, 300);
    }
}

function toggleMute() {
    setTimeout(() => { MuteButton = true; }, 300);
    document.querySelectorAll("video, audio").forEach((elem) => mute(elem));
    document.getElementById("setText2").innerHTML = "Volume Off";
    document.querySelector("#settingsImg2").style.backgroundImage = "url('images/settings/mute1.png')";

    if (MuteButton === true) {
        setTimeout(() => { MuteButton = false; }, 300);
        document.querySelectorAll("video, audio").forEach((elem) => unmute(elem));
        document.getElementById("setText2").innerHTML = "Volume On";
        document.querySelector("#settingsImg2").style.backgroundImage = "url('images/settings/unmute1.png')";
    }
}

// Mute a singular HTML5 element
function mute(elem) {
    elem.muted = true;
    elem.pause();
    audioPlay("soundBackground", 0);
}

function unmute(elem) {
    elem.muted = false;
    elem.pause();
    audioPlay("soundBackground", 0.3);
}

function reload() {
    //Refresh page
    location.reload();
}

function pauseGame() {
    MuteButton = false;
    toggleMute();
    //document.querySelectorAll("video, audio").forEach((elem) => mute(elem));
    document.querySelector("#ESC").style.display = "block";
    document.querySelector("body").style.opacity = "0.7";
    document.getElementById("setText1").innerHTML = "Resume Game";
    document.querySelector("#settingsImg1").style.backgroundImage = "url('images/settings/play1.png')";
    setTimeout(() => { EscButton = true; }, 300);
    pause = true;
    enemyMove = false;
    minionMove = false;
    playerMove = false;
    window.clearInterval(timeoutId);

    if (EscButton === true) {
        MuteButton = true;
        toggleMute();
        //document.querySelectorAll("video, audio").forEach((elem) => unmute(elem));
        document.querySelector("#ESC").style.display = "none";
        document.querySelector("body").style.opacity = "1";
        document.getElementById("setText1").innerHTML = "Pause Game";
        document.querySelector("#settingsImg1").style.backgroundImage = "url('images/settings/pause1.png')";
        setTimeout(() => { EscButton = false; }, 300);
        pause = false;
        enemyMove = true;
        minionMove = true;
        playerMove = true;
        timeoutId=window.setInterval(timer,1000);
    }
}

function fullscreen() {
    //Invoke Fullscreen:
    document.documentElement.requestFullscreen();
    console.log("Fullscreen changed");
}

function showItemShop() {
    document.querySelector("#shop").style.display = "block";
    setTimeout(() => { ShopButton = true; }, 300);

    if (ShopButton === true) {
        setTimeout(() => { ShopButton = false; }, 300);
        document.querySelector("#shop").style.display = "none";
    }
}

function showSettings() {
    document.querySelector("#settings").style.display = "block";
    setTimeout(() => { SettingsButton = true; }, 300);

    if (SettingsButton === true) {
        setTimeout(() => { SettingsButton = false; }, 300);
        document.querySelector("#settings").style.display = "none";
    }
}

function hideMinimap() {
    setTimeout(() => { MinimapButton = true; }, 300);
    document.querySelector("#minimap").style.display = "none";
    document.querySelector("#shopBtn").style.right = "10px";
    document.querySelector("#settingsBtn").style.right = "10px";
    document.getElementById("setText6").innerHTML = "Show Minimap";

    if (MinimapButton === true) {
        setTimeout(() => { MinimapButton = false; }, 300);
        document.querySelector("#minimap").style.display = "block";
        QButton = true;
        showArrows();

        document.querySelector("#shopBtn").style.right = "245px";
        document.querySelector("#settingsBtn").style.right = "245px";
        document.getElementById("setText6").innerHTML = "Hide Minimap";
    }
}

function showArrows() {
    keyboard[keyboard.Q] = true;
    setTimeout(() => { keyboard[keyboard.Q] = false }, 100);
}

let duration1 = 1600,
    success1 = button => {
        //Success1 function
        button.classList.add('success1');
    };

document.querySelectorAll('#arrowUp').forEach(button => {
    button.style.setProperty('--duration1', duration1 + 'ms');
    ['mousedown', 'touchstart', 'keypress'].forEach(e => {
        button.addEventListener(e, ev => {
            keyboard[keyboard.W] = true; //aaaa
            if(e != 'keypress' || (e == 'keypress' && ev.which == 32 && !button.classList.contains('process'))) {
                button.classList.add('process');
                button.timeout = setTimeout(success1, duration1, button);
            }
        });
    });
    ['mouseup', 'mouseout', 'touchend', 'keyup'].forEach(e => {
        button.addEventListener(e, ev => {
            if(e != 'keyup' || (e == 'keyup' && ev.which == 32)) {
                setTimeout(() => { keyboard[keyboard.W] = false }, 10); //bbbb
                button.classList.remove('process');
                clearTimeout(button.timeout);
            }
        }, false);
    });
});

let duration2 = 1600,
    success = button => {
        //Success function
        button.classList.add('success');
    };

document.querySelectorAll('#arrowDown').forEach(button => {
    button.style.setProperty('--duration2', duration2 + 'ms');
    ['mousedown', 'touchstart', 'keypress'].forEach(e => {
        button.addEventListener(e, ev => {
            keyboard[keyboard.S] = true; //aaaa
            if(e != 'keypress' || (e == 'keypress' && ev.which == 32 && !button.classList.contains('process'))) {
                button.classList.add('process');
                button.timeout = setTimeout(success, duration2, button);
            }
        });
    });
    ['mouseup', 'mouseout', 'touchend', 'keyup'].forEach(e => {
        button.addEventListener(e, ev => {
            if(e != 'keyup' || (e == 'keyup' && ev.which == 32)) {
                setTimeout(() => { keyboard[keyboard.S] = false }, 10); //bbbb
                button.classList.remove('process');
                clearTimeout(button.timeout);
            }
        }, false);
    });
});

let duration3 = 1600,
    success3 = button => {
        //Success3 function
        button.classList.add('success3');
    };

document.querySelectorAll('#arrowLeft').forEach(button => {
    button.style.setProperty('--duration3', duration3 + 'ms');
    ['mousedown', 'touchstart', 'keypress'].forEach(e => {
        button.addEventListener(e, ev => {
            keyboard[keyboard.A] = true; //aaaa
            if(e != 'keypress' || (e == 'keypress' && ev.which == 32 && !button.classList.contains('process'))) {
                button.classList.add('process');
                button.timeout = setTimeout(success3, duration3, button);
            }
        });
    });
    ['mouseup', 'mouseout', 'touchend', 'keyup'].forEach(e => {
        button.addEventListener(e, ev => {
            if(e != 'keyup' || (e == 'keyup' && ev.which == 32)) {
                setTimeout(() => { keyboard[keyboard.A] = false }, 10); //bbbb
                button.classList.remove('process');
                clearTimeout(button.timeout);
            }
        }, false);
    });
});

let duration4 = 1600,
    success4 = button => {
        //Success4 function
        button.classList.add('success4');
    };

document.querySelectorAll('#arrowRight').forEach(button => {
    button.style.setProperty('--duration4', duration4 + 'ms');
    ['mousedown', 'touchstart', 'keypress'].forEach(e => {
        button.addEventListener(e, ev => {
            keyboard[keyboard.D] = true; //aaaa
            if(e != 'keypress' || (e == 'keypress' && ev.which == 32 && !button.classList.contains('process'))) {
                button.classList.add('process');
                button.timeout = setTimeout(success4, duration4, button);
            }
        });
    });
    ['mouseup', 'mouseout', 'touchend', 'keyup'].forEach(e => {
        button.addEventListener(e, ev => {
            if(e != 'keyup' || (e == 'keyup' && ev.which == 32)) {
                setTimeout(() => { keyboard[keyboard.D] = false }, 10); //bbbb
                button.classList.remove('process');
                clearTimeout(button.timeout);
            }
        }, false);
    });
});

//Update the Position of the player
movePlayer();
function getPos(theId) {
    theId = document.getElementById(theId);
    var theRect = theId.getBoundingClientRect();
    var theRectY = theId.getBoundingClientRect().top + window.scrollY; 

    var posXY = { 
        x:parseInt(theRect.x) + parseInt(theRect.width)/2 + window.scrollX, 
        y:parseInt(theRectY) + parseInt(theRect.height)/2
    }; 
    return posXY;
}

function scrollIt() {
    document.getElementById("player").scrollIntoView({block: "center", inline: "center"});
}

function getSize(theId) {
    theId = document.getElementById(theId);
    var theRect = theId.getBoundingClientRect();

    var sizeXY = {
        x:parseInt(theRect.width),
        y:parseInt(theRect.height)
    };
    return sizeXY;
}

function compareObjects(obj1, obj2) {

    let theRect1 = document.getElementById(obj1).getBoundingClientRect();
    let theRect2 = document.getElementById(obj2).getBoundingClientRect();

    let collided = !(theRect1.right < theRect2.left || 
        theRect1.left > theRect2.right || 
        theRect1.bottom < theRect2.top || 
        theRect1.top > theRect2.bottom);

    if (playerMove == true) {
        if (collided == true) {
            if (obj2 == "turret1") {
                hitturret1();
                if (turret1 == true) {
                    takeHit();
                    document.querySelector("#turretZone1").style.backgroundColor = "rgb(139, 14, 0, 0.1)";
                    setTimeout(() => { document.querySelector("#turretZone1").style.backgroundColor = "rgb(139, 14, 0, 0.0)"; }, 700);
                }
            }

            if (obj2 == "turret2") {
                hitturret2();
                if (turret2 == true) {
                    takeHit();
                    document.querySelector("#turretZone2").style.backgroundColor = "rgb(139, 14, 0, 0.1)";
                    setTimeout(() => { document.querySelector("#turretZone2").style.backgroundColor = "rgb(139, 14, 0, 0.0)"; }, 700);
                }
            }

            if (obj2 == "turret3") {
                hitturret3();
                if (turret3 == true) {
                    takeHit();
                    document.querySelector("#turretZone3").style.backgroundColor = "rgb(139, 14, 0, 0.1)";
                    setTimeout(() => { document.querySelector("#turretZone3").style.backgroundColor = "rgb(139, 14, 0, 0.0)"; }, 700);
                }
            }

            if (obj2 == "turret4") {
                hitturret4()
                if (turret4 == true) {
                    takeHit();
                    document.querySelector("#turretZone4").style.backgroundColor = "rgb(139, 14, 0, 0.1)";
                    setTimeout(() => { document.querySelector("#turretZone4").style.backgroundColor = "rgb(139, 14, 0, 0.0)"; }, 700);
                }
            }

            if (obj2 == "turret5") {
                hitturret5();
                if (turret5 == true) {
                    takeHit();
                    document.querySelector("#turretZone5").style.backgroundColor = "rgb(139, 14, 0, 0.1)";
                    setTimeout(() => { document.querySelector("#turretZone5").style.backgroundColor = "rgb(139, 14, 0, 0.0)"; }, 700);
                }
            }

            if (obj2 == "turret6") {
                hitturret6();
                if (turret6 == true) {
                    takeHit();
                    document.querySelector("#turretZone6").style.backgroundColor = "rgb(139, 14, 0, 0.1)";
                    setTimeout(() => { document.querySelector("#turretZone6").style.backgroundColor = "rgb(139, 14, 0, 0.0)"; }, 700);
                }
            }

            if (obj2 == "turret7") {
                hitturret7();
                if (turret7 == true) {
                    takeHit();
                    document.querySelector("#turretZone7").style.backgroundColor = "rgb(139, 14, 0, 0.1)";
                    setTimeout(() => { document.querySelector("#turretZone7").style.backgroundColor = "rgb(139, 14, 0, 0.0)"; }, 700);
                }
            }

            if (obj2 == "turret8") {
                hitturret8();
                if (turret8 == true) {
                    takeHit();
                    document.querySelector("#turretZone8").style.backgroundColor = "rgb(139, 14, 0, 0.1)";
                    setTimeout(() => { document.querySelector("#turretZone8").style.backgroundColor = "rgb(139, 14, 0, 0.0)"; }, 700);
                }
            }

            if (obj2 == "turret9") {
                hitturret9();
                if (turret9 == true) {
                    takeHit();
                    document.querySelector("#turretZone9").style.backgroundColor = "rgb(139, 14, 0, 0.1)";
                    setTimeout(() => { document.querySelector("#turretZone9").style.backgroundColor = "rgb(139, 14, 0, 0.0)"; }, 700);
                }
            }

            if (obj2 == "turret10") {
                hitturret10();
                if (turret10 == true) {
                    takeHit();
                    document.querySelector("#turretZone10").style.backgroundColor = "rgb(139, 14, 0, 0.1)";
                    setTimeout(() => { document.querySelector("#turretZone10").style.backgroundColor = "rgb(139, 14, 0, 0.0)"; }, 700);
                }
            }

            if (obj2 == "turret11") {
                hitturret11();
                if (turret11 == true) {
                    takeHit();
                    document.querySelector("#turretZone11").style.backgroundColor = "rgb(139, 14, 0, 0.1)";
                    setTimeout(() => { document.querySelector("#turretZone11").style.backgroundColor = "rgb(139, 14, 0, 0.0)"; }, 700);
                }
            }

            if (obj2 == "bonus1") {
                gold += 75;
                spawnBonus1();
            }

            if (obj2 == "bonus2") {
                hp += 75;
                spawnBonus2();
            }

            if (obj2 == "card1") {
                hp += 100;
                document.querySelector("#card1").style.display = "none";
            }

            if (obj2 == "card2") {
                gold += 100;
                document.querySelector("#card2").style.display = "none";
            }

            if (obj2 == "enemy") {
                document.querySelector("#enemy").style.backgroundImage = "url('images/enemy/attack.png')";
                setTimeout(() => { document.querySelector("#enemy").style.backgroundImage = "url('images/enemy/run1.png')"; }, 10);
                document.querySelector("#enemy").style.width = "55" + "px";
                document.querySelector("#enemy").style.height = "55" + "px";
                setTimeout(() => { document.querySelector("#enemy").style.width = "45" + "px"; }, 10);
                setTimeout(() => { document.querySelector("#enemy").style.height = "45" + "px"; }, 10);
                hitEnemy();
                takeHit();
                enemyMove = false;
                setTimeout(() => { enemyMove = true; }, 10);
            }

            if (obj2 == "nexus1") {
                gameOver();
            }

            if (obj2 == "nexus2") {
                hitNexus2();
            }

            if (obj2 == "platform") {
                if (soundNexusUnderAttack === false) {
                    audioPlay("soundNexusUnderAttack", 1);
                    soundNexusUnderAttack = true;
                }
            }

            if (obj2 == "minion1") {
                hitMinion1();
                takeHit();
                minion1.top -= 0.1
                minion1.left += 0.12
            }

            if (obj2 == "minion2") {
                hitMinion2();
                takeHit();
                minion2.top -= 0.1
                minion2.left += 0.12
            }

            if (obj2 == "minion3") {
                hitMinion3();
                takeHit();
                minion3.top -= 0.1
                minion3.left += 0.12
            }

            if (obj2 == "minion4") {
                hitMinion4();
                takeHit();
                minion4.top -= 0.1
            }

            if (obj2 == "minion5") {
                hitMinion5();
                takeHit();
                minion5.top -= 0.1
            }

            if (obj2 == "minion6") {
                hitMinion6();
                takeHit();
                minion6.top -= 0.1
            }

            if (obj2 == "minion7") {
                hitMinion7();
                takeHit();
                minion7.left += 0.13
            }

            if (obj2 == "minion8") {
                hitMinion8();
                takeHit();
                minion8.left += 0.13
            }

            if (obj2 == "minion9") {
                hitMinion9();
                takeHit();
                minion9.left += 0.13
            }
        }
    }
}

function buyItem1() {
    if (gold > 24) {
        gold -= 25;
        document.getElementById("inventory1").style.backgroundImage = "url('images/items/heal1.png')";
        item1 = true;
    } else {
        audioPlay("soundNotEnoughGold", 1);
    }
}

function buyItem2() {
    if (gold > 24) {
        gold -= 25;
        document.getElementById("inventory2").style.backgroundImage = "url('images/items/teleport.png')";
        item2 = true;
    } else {
        audioPlay("soundNotEnoughGold", 1);
    }
}

function buyItem3() {
    if (gold > 49) {
        gold -= 50;
        document.getElementById("inventory3").style.backgroundImage = "url('images/items/flash.png')";
        item3 = true;
    } else {
        audioPlay("soundNotEnoughGold", 1);
    }
}

function buyItem4() {
    if (gold > 74) {
        gold -= 75;
        document.getElementById("inventory4").style.backgroundImage = "url('images/items/damage1.png')";
        item4 = true;
    } else {
        audioPlay("soundNotEnoughGold", 1);
    }
}

function buyItem5() {
    if (gold > 99) {
        gold -= 100;
        document.getElementById("inventory5").style.backgroundImage = "url('images/items/heal2.png')";
        item5 = true;
    } else {
        audioPlay("soundNotEnoughGold", 1);
    }
}

function buyItem6() {
    if (gold > 124) {
        gold -= 125;
        document.getElementById("inventory6").style.backgroundImage = "url('images/items/damage2.png')";
        item6 = true;
    } else {
        audioPlay("soundNotEnoughGold", 1);
    }
}

function buyItem7() {
    if (gold > 149) {
        gold -= 150;
        document.getElementById("inventory7").style.backgroundImage = "url('images/items/stopwatch.png')";
        item7 = true;
    } else {
        audioPlay("soundNotEnoughGold", 1);
    }
}

function buyItem8() {
    if (gold > 174) {
        gold -= 175;
        document.getElementById("inventory8").style.backgroundImage = "url('images/items/ghost.png')";
        item8 = true;
    } else {
        audioPlay("soundNotEnoughGold", 1);
    }
}

function buyItem9() {
    if (gold > 199) {
        gold -= 200;
        document.getElementById("inventory9").style.backgroundImage = "url('images/items/kill.png')";
        item9 = true;
    } else {
        audioPlay("soundNotEnoughGold", 1);
    }
}

function activateItem1() {
    keyboard[keyboard.ITEM1] = true;
    setTimeout(() => { keyboard[keyboard.ITEM1] = false; }, 50);
}

function activateItem2() {
    keyboard[keyboard.ITEM2] = true;
    setTimeout(() => { keyboard[keyboard.ITEM2] = false; }, 50);
}

function activateItem3() {
    keyboard[keyboard.ITEM3] = true;
    setTimeout(() => { keyboard[keyboard.ITEM3] = false; }, 50);
}

function activateItem4() {
    keyboard[keyboard.ITEM4] = true;
    setTimeout(() => { keyboard[keyboard.ITEM4] = false; }, 50);
}

function activateItem5() {
    keyboard[keyboard.ITEM5] = true;
    setTimeout(() => { keyboard[keyboard.ITEM5] = false; }, 50);
}

function activateItem6() {
    keyboard[keyboard.ITEM6] = true;
    setTimeout(() => { keyboard[keyboard.ITEM6] = false; }, 50);
}

function activateItem7() {
    keyboard[keyboard.ITEM7] = true;
    setTimeout(() => { keyboard[keyboard.ITEM7] = false; }, 50);
}

function activateItem8() {
    keyboard[keyboard.ITEM8] = true;
    setTimeout(() => { keyboard[keyboard.ITEM8] = false; }, 50);
}

function activateItem9() {
    keyboard[keyboard.ITEM9] = true;
    setTimeout(() => { keyboard[keyboard.ITEM9] = false; }, 50);
}

function activateInventory() {
    keyboard[keyboard.TAB] = true;
    setTimeout(() => { keyboard[keyboard.TAB] = false; }, 10);
}

//Game Loop
var theRefresh;
function Loop() {
    if (damage === 2) {
        document.getElementById("damage").innerHTML = "3Damage";
    } else if (damage === 4) {
        document.getElementById("damage").innerHTML = "2Damage";
    } else {//10
        document.getElementById("damage").innerHTML = "1Damage";
    }

    if (ourPlayer.speedMultiplier === 4) {
        document.getElementById("speed").innerHTML = "2Speed";
    } else {//2
        document.getElementById("speed").innerHTML = "1Speed";
    }

    document.getElementById("hp").innerHTML = hp + "HP";
    document.getElementById("gold").innerHTML = gold + "Gold";

    sensePlayerMotion();
    scrollIt();
    checkLine();

    if (localStorage.getItem("Logged")) {
        rank();
    }

   compareObjects("player", "turret1");
   compareObjects("player", "turret2");
   compareObjects("player", "turret3");
   compareObjects("player", "turret4");
   compareObjects("player", "turret5");
   compareObjects("player", "turret6");
   compareObjects("player", "turret7");
   compareObjects("player", "turret8");
   compareObjects("player", "turret9");
   compareObjects("player", "turret10");
   compareObjects("player", "turret11");

   compareObjects("player", "minion1");
   compareObjects("player", "minion2");
   compareObjects("player", "minion3");
   compareObjects("player", "minion4");
   compareObjects("player", "minion5");
   compareObjects("player", "minion6");
   compareObjects("player", "minion7");
   compareObjects("player", "minion8");
   compareObjects("player", "minion9");

   compareObjects("player", "bonus1");
   compareObjects("player", "bonus2");
   compareObjects("player", "card1");
   compareObjects("player", "card2");
   compareObjects("player", "nexus2");
   compareObjects("player", "enemy");

   compareObjects("enemy", "nexus1");
   compareObjects("minion1", "nexus1");
   compareObjects("minion2", "nexus1");
   compareObjects("minion3", "nexus1");
   compareObjects("minion4", "nexus1");
   compareObjects("minion5", "nexus1");
   compareObjects("minion6", "nexus1");
   compareObjects("minion7", "nexus1");
   compareObjects("minion8", "nexus1");
   compareObjects("minion9", "nexus1");

   compareObjects("enemy", "platform");
   compareObjects("minion1", "platform");
   compareObjects("minion2", "platform");
   compareObjects("minion3", "platform");
   compareObjects("minion4", "platform");
   compareObjects("minion5", "platform");
   compareObjects("minion6", "platform");
   compareObjects("minion7", "platform");
   compareObjects("minion8", "platform");
   compareObjects("minion9", "platform");

    if (hp < 0) {
        document.querySelector("#player").style.backgroundImage = "url('images/player/death.png')";
        gameOver();
    }

    if (pause === true) {
        enemyMove = false;
        minionMove = false;
        playerMove = false;
    }

    if (enemyMove === true) {

        if (enemy.top < ourPlayer.y) {
            enemy.top += 0.2
            document.querySelector("#enemy").style.rotate = "-40deg";
        } else {
            enemy.top -= 0.2
            document.querySelector("#enemy").style.rotate = "+20deg";
        }
        document.querySelector("#enemy").style.top = enemy.top + "px";

        if (enemy.left > ourPlayer.x) {
            enemy.left -= 0.24
            document.querySelector("#enemy").style.transform = "scaleX(+1)";
        } else {
            enemy.left += 0.24
            //document.querySelector("#enemy").style.transform = "scaleX(-1)";
            //document.querySelector("#enemy").style.rotate = "0deg";
            identicalXLeft();
        }
        document.querySelector("#enemy").style.left = enemy.left + "px";

        if (runningEnemyPositions === true) {
            setTimeout(() => { document.querySelector("#enemy").style.backgroundImage = "url('images/enemy/run1.png')"; }, 600);
            setTimeout(() => { runningEnemyPositions = false; }, 600);
        } else {
            setTimeout(() => { runningEnemyPositions = true; }, 600);
            setTimeout(() => { document.querySelector("#enemy").style.backgroundImage = "url('images/enemy/run2.png')"; }, 600);
        }
    }

    function identicalXLeft() {
        if (ourPlayer.x - enemy.left > 1) {
            document.querySelector("#enemy").style.transform = "scaleX(-1)";
            document.querySelector("#enemy").style.rotate = "0deg";
        }
    }

    if (minionMove === true) {
        if (minionSpawned === true) {
            //MID LINE
            minion1.top += 0.1
            minion1.left -= 0.12
            document.querySelector("#minion1").style.left = minion1.left + "px";
            document.querySelector("#minion1").style.top = minion1.top + "px";
            minion2.top += 0.1
            minion2.left -= 0.12
            document.querySelector("#minion2").style.left = minion2.left + "px";
            document.querySelector("#minion2").style.top = minion2.top + "px";
            minion3.top += 0.1
            minion3.left -= 0.12
            document.querySelector("#minion3").style.left = minion3.left + "px";
            document.querySelector("#minion3").style.top = minion3.top + "px";

            //TOP LINE
            minion4.top += 0.1
            document.querySelector("#minion4").style.top = minion4.top + "px";
            minion5.top += 0.1
            document.querySelector("#minion5").style.top = minion5.top + "px";
            minion6.top += 0.1
            document.querySelector("#minion6").style.top = minion6.top + "px";

            //BOT LINE
            minion7.left -= 0.13
            document.querySelector("#minion7").style.left = minion7.left + "px";
            minion8.left -= 0.13
            document.querySelector("#minion8").style.left = minion8.left + "px";
            minion9.left -= 0.13
            document.querySelector("#minion9").style.left = minion9.left + "px";
        }
    }
    theRefresh = requestAnimationFrame(Loop);
}
Loop();

function gameOver() {
    document.querySelector("html").style.backgroundColor = "var(--dark-red)";
    document.querySelector("body").style.opacity = "0.7";
    document.querySelector("#shop").style.display = "none";
    document.querySelector("#settings").style.display = "none";
    if (soundDefeatPlay === false) {
        audioPlay("soundDefeat", 1);
        soundDefeatPlay = true;
    }
    console.log("Game Over");
    document.querySelector("#middle-of-the-screen").style.display = "block";
    document.querySelector("#defeat").style.display = "block";
    setTimeout(() => { document.querySelector("#message").style.display = "block"; }, 1500);
    enemyMove = false;
    minionMove = false;
    playerMove = false;
    window.clearInterval(timeoutId);
    setTimeout(() => { window.addEventListener("keydown", reload, false); }, 1500);
    setTimeout(() => { window.addEventListener("click", reload, false); }, 1500);
}

function victory() {
    document.querySelector("html").style.backgroundColor = "var(--yellow)";
    document.querySelector("body").style.opacity = "0.7";
    document.querySelector("#shop").style.display = "none";
    document.querySelector("#settings").style.display = "none";
    if (localStorage.getItem("Logged")) {
        pluswinCounter();
    }
    if (soundVictoryPlay === false) {
        audioPlay("soundVictory", 1);
        soundVictoryPlay = true;
    }
    console.log("Victory!");
    document.querySelector("#middle-of-the-screen").style.display = "block";
    document.querySelector("#victory").style.display = "block";
    setTimeout(() => { document.querySelector("#message").style.display = "block"; }, 1500);
    enemyMove = false;
    minionMove = false;
    playerMove = false;
    window.clearInterval(timeoutId);
    setTimeout(() => { window.addEventListener("keydown", reload, false); }, 1500);
    setTimeout(() => { window.addEventListener("click", reload, false); }, 1500);
}

function pluswinCounter() {
    const win0 = localStorage.getItem("winCounter0");
    const win1 = localStorage.getItem("winCounter1");
    const win2 = localStorage.getItem("winCounter2");
    const win3 = localStorage.getItem("winCounter3");
    const win4 = localStorage.getItem("winCounter4");
    const win5 = localStorage.getItem("winCounter5");
    const win6 = localStorage.getItem("winCounter6");
    const win7 = localStorage.getItem("winCounter7");
    const win8 = localStorage.getItem("winCounter8");

    if(win8){
        localStorage.setItem("winCounter9", "9+");
        winResult = localStorage.getItem("winCounter9");
    }else if(win7){
        localStorage.setItem("winCounter8", "8");
        winResult = localStorage.getItem("winCounter8");
    }else if(win6){
        localStorage.setItem("winCounter7", "7");
        winResult = localStorage.getItem("winCounter7");
    }else if(win5){
        localStorage.setItem("winCounter6", "6");
        winResult = localStorage.getItem("winCounter6");
    }else if(win4){
        localStorage.setItem("winCounter5", "5");
        winResult = localStorage.getItem("winCounter5");
    }else if(win3){
        localStorage.setItem("winCounter4", "4");
        winResult = localStorage.getItem("winCounter4");
    }else if(win2){
        localStorage.setItem("winCounter3", "3");
        winResult = localStorage.getItem("winCounter3");
    }else if(win1){
        localStorage.setItem("winCounter2", "2");
        winResult = localStorage.getItem("winCounter2");
    }else if(win0){
        localStorage.setItem("winCounter1", "1");
        winResult = localStorage.getItem("winCounter1");
    }

    document.getElementById("winCounter").textContent= "Win Counter: " + winResult;
}

function takeHit() {
    hp -= 1;
    document.querySelector("#hp").style.color = "red";
    document.querySelector("html").style.backgroundColor = "var(--dark-red)";
    document.querySelector("body").style.opacity = "0.9";
    setTimeout(() => { document.querySelector("#hp").style.color = "var(--font-color)"; }, 10);
    setTimeout(() => { document.querySelector("html").style.backgroundColor = "var(--black)"; }, 10);
    setTimeout(() => { document.querySelector("body").style.opacity = "1"; }, 10);

    if (playerMove == false) {
        document.querySelector("#hp").style.color = "var(--font-color)";
        hp += 1;
    }

    if (ghost == true) {
        document.querySelector("#hp").style.color = "var(--font-color)";
        hp += 1;
        if (checkLineHit == true) {
            hp -= 1;
            document.querySelector("#hp").style.color = "red";
            setTimeout(() => { document.querySelector("#hp").style.color = "var(--font-color)"; }, 10);
        }
    }
}

function checkLine() {
    //checkLine1
    if (checkLine1 === true) {
        if (ourPlayer.x > 1820) {
            if (ourPlayer.y < 1076) {
                checkLineHit = true;
                setTimeout(() => { checkLineHit = false; }, 100);
                takeHit();
            }
        }
        if (ourPlayer.y < 1076) {
            if (ourPlayer.x > 1820) {
                checkLineHit = true;
                setTimeout(() => { checkLineHit = false; }, 100);
                takeHit();
            }
        }
    }

    //checkLine2
    if (checkLine2 === true) {
        if (ourPlayer.x > 1960) {
            if (ourPlayer.y < 852) {
                checkLineHit = true;
                setTimeout(() => { checkLineHit = false; }, 100);
                takeHit();
            }
        }
        if (ourPlayer.y < 852) {
            if (ourPlayer.x > 1960) {
                checkLineHit = true;
                setTimeout(() => { checkLineHit = false; }, 100);
                takeHit();
            }
        }
    }

    //checkLine3
    if (checkLine3 === true) {
        if (ourPlayer.x > 2190) {
            if (ourPlayer.y < 691) {
                checkLineHit = true;
                setTimeout(() => { checkLineHit = false; }, 100);
                takeHit();
            }
        }
        if (ourPlayer.y < 691) {
            if (ourPlayer.x > 2190) {
                checkLineHit = true;
                setTimeout(() => { checkLineHit = false; }, 100);
                takeHit();
            }
        }
    }

    //checkLine4
    if (checkLine4 === true) {
        if (ourPlayer.x > 2430) {
            if (ourPlayer.y < 500) {
                checkLineHit = true;
                setTimeout(() => { checkLineHit = false; }, 100);
                takeHit();
            }
        }
        if (ourPlayer.y < 500) {
            if (ourPlayer.x > 2430) {
                checkLineHit = true;
                setTimeout(() => { checkLineHit = false; }, 100);
                takeHit();
            }
        }
    }
}

//Hit objects
count1 = 0;
function hitturret1() {
    hit1 = true;
    window.addEventListener("click", clickTurret1, false);
    if (count1 > damage + 5) {
        document.querySelector("#turret1").style.backgroundImage = "url('images/others/destroyed-turret.png')";
        checkLine1 = false;
        turret1 = false;

        if (displayed1 === false) {
            audioPlay("soundTurretDestroyedEffect", 1);
            audioPlay("soundTurretDestroyed", 1);
            displayed1 = true;
        }
    }
}
function clickTurret1() {
    if (hit1 === true) {
        count1 += 1;
    }
    hit1 = false;
}

count2 = 0;
function hitturret2() {
    hit2 = true;
    window.addEventListener("click", clickTurret2, false);
    if (count2 > damage + 5) {
        document.querySelector("#turret2").style.backgroundImage = "url('images/others/destroyed-turret.png')";
        checkLine1 = false;
        turret2 = false;

        if (displayed2 === false) {
            audioPlay("soundTurretDestroyedEffect", 1);
            audioPlay("soundTurretDestroyed", 1);
            displayed2 = true;
        }
    }
}
function clickTurret2() {
    if (hit2 === true) {
        count2 += 1;
    }
    hit2 = false;
}

count3 = 0;
function hitturret3() {
    hit3 = true;
    window.addEventListener("click", clickTurret3, false);
    if (count3 > damage + 5) {
        document.querySelector("#turret3").style.backgroundImage = "url('images/others/destroyed-turret.png')";
        checkLine1 = false;
        turret3 = false;

        if (displayed3 === false) {
            audioPlay("soundTurretDestroyedEffect", 1);
            audioPlay("soundTurretDestroyed", 1);
            displayed3 = true;
        }
    }
}
function clickTurret3() {
    if (hit3 === true) {
        count3 += 1;
    }
    hit3 = false;
}

count4 = 0;
function hitturret4() {
    hit4 = true;
    window.addEventListener("click", clickTurret4, false);
    if (count4 > damage + 5) {
        document.querySelector("#turret4").style.backgroundImage = "url('images/others/destroyed-turret.png')";
        checkLine2 = false;
        turret4 = false;

        if (displayed4 === false) {
            audioPlay("soundTurretDestroyedEffect", 1);
            audioPlay("soundTurretDestroyed", 1);
            displayed4 = true;
        }
    }
}
function clickTurret4() {
    if (hit4 === true) {
        count4 += 1;
    }
    hit4 = false;
}

count5 = 0;
function hitturret5() {
    hit5 = true;
    window.addEventListener("click", clickTurret5, false);
    if (count5 > damage + 5) {
        document.querySelector("#turret5").style.backgroundImage = "url('images/others/destroyed-turret.png')";
        checkLine2 = false;
        turret5 = false;

        if (displayed5 === false) {
            audioPlay("soundTurretDestroyedEffect", 1);
            audioPlay("soundTurretDestroyed", 1);
            displayed5 = true;
        }
    }
}
function clickTurret5() {
    if (hit5 === true) {
        count5 += 1;
    }
    hit5 = false;
}

count6 = 0;
function hitturret6() {
    hit6 = true;
    window.addEventListener("click", clickTurret6, false);
    if (count6 > damage + 5) {
        document.querySelector("#turret6").style.backgroundImage = "url('images/others/destroyed-turret.png')";
        checkLine2 = false;
        turret6 = false;

        if (displayed6 === false) {
            audioPlay("soundTurretDestroyedEffect", 1);
            audioPlay("soundTurretDestroyed", 1);
            displayed6 = true;
        }
    }
}
function clickTurret6() {
    if (hit6 === true) {
        count6 += 1;
    }
    hit6 = false;
}

count7 = 0;
function hitturret7() {
    hit7 = true;
    window.addEventListener("click", clickTurret7, false);
    if (count7 > damage + 5) {
        document.querySelector("#turret7").style.backgroundImage = "url('images/others/destroyed-turret.png')";
        checkLine3 = false;
        turret7 = false;

        if (displayed7 === false) {
            audioPlay("soundTurretDestroyedEffect", 1);
            audioPlay("soundTurretDestroyed", 1);
            displayed7 = true;
        }
    }
}
function clickTurret7() {
    if (hit7 === true) {
        count7 += 1;
    }
    hit7 = false;
}

count8 = 0;
function hitturret8() {
    hit8 = true;
    window.addEventListener("click", clickTurret8, false);
    if (count8 > damage + 5) {
        document.querySelector("#turret8").style.backgroundImage = "url('images/others/destroyed-turret.png')";
        checkLine3 = false;
        turret8 = false;

        if (displayed8 === false) {
            audioPlay("soundTurretDestroyedEffect", 1);
            audioPlay("soundTurretDestroyed", 1);
            displayed8 = true;
        }
    }
}
function clickTurret8() {
    if (hit8 === true) {
        count8 += 1;
    }
    hit8 = false;
}

count9 = 0;
function hitturret9() {
    hit9 = true;
    window.addEventListener("click", clickTurret9, false);
    if (count9 > damage + 5) {
        document.querySelector("#turret9").style.backgroundImage = "url('images/others/destroyed-turret.png')";
        checkLine3 = false;
        turret9 = false;

        if (displayed9 === false) {
            audioPlay("soundTurretDestroyedEffect", 1);
            audioPlay("soundTurretDestroyed", 1);
            displayed9 = true;
        };
    }
}
function clickTurret9() {
    if (hit9 === true) {
        count9 += 1;
    }
    hit9 = false;
}

count10 = 0;
function hitturret10() {
    hit10 = true;
    window.addEventListener("click", clickTurret10, false);
    if (count10 > damage + 5) {
        document.querySelector("#turret10").style.backgroundImage = "url('images/others/destroyed-turret.png')";
        checkLine4 = false;
        turret10 = false;

        if (displayed10 === false) {
            audioPlay("soundTurretDestroyedEffect", 1);
            audioPlay("soundTurretDestroyed", 1);
            displayed10 = true;
        }
    }
}
function clickTurret10() {
    if (hit10 === true) {
        count10 += 1;
    }
    hit10 = false;
}

count11 = 0;
function hitturret11() {
    hit11 = true;
    window.addEventListener("click", clickTurret11, false);
    if (count11 > damage + 5) {
        document.querySelector("#turret11").style.backgroundImage = "url('images/others/destroyed-turret.png')";
        checkLine4 = false;
        turret11 = false;

        if (displayed11 === false) {
            audioPlay("soundTurretDestroyedEffect", 1);
            audioPlay("soundTurretDestroyed", 1);
            displayed11 = true;
        }
    }
}
function clickTurret11() {
    if (hit11 === true) {
        count11 += 1;
    }
    hit11 = false;
}

count15 = 0;
function hitNexus2() {
    hit15 = true;
    window.addEventListener("click", clickNexus2, false);
    if (count15 > damage + 5) {
        victory();
    }
}
function clickNexus2() {
    if (hit15 === true) {
        count15 += 1;
    }
    hit15 = false;
}

count52 = 0;
function hitEnemy() {
    hit52 = true;
    window.addEventListener("click", clickEnemy, false);
    if (count52 > damage + 2) {
        gold += 100
        count52 = 0;

        if (localStorage.getItem("Logged")) {
            localStorage.setItem("EnemyHasBeenKilled", "True");
        }

        enemy.top = 285
        enemy.left = 2730

        document.querySelector("#enemy").style.display = "none";
        setTimeout(() => { document.querySelector("#enemy").style.display = "block"; }, 20000);

        audioPlay("soundEnemySlain", 1);

        firstBlood = true;
    }
}
function clickEnemy() {
    if (hit52 === true) {
        count52 += 1;
        document.querySelector("#enemy").style.opacity = "0.7";
        setTimeout(() => { document.querySelector("#enemy").style.opacity = "1"; }, 100);
    }
    hit52 = false;
}

count53 = 0;
function hitMinion1() {
    hit53 = true;
    window.addEventListener("click", clickMinion1, false);
    if (count53 > 2) {
        gold += 50
        count53 = 0;

        minion1.top = 850
        minion1.left = 2100

        document.querySelector("#minion1").style.display = "none";
        setTimeout(() => { document.querySelector("#minion1").style.display = "block"; }, 20000);

        if (firstBlood === false) {
            audioPlay("soundFirstBlood", 1);
            firstBlood = true;
        }
    }
}
function clickMinion1() {
    if (hit53 === true) {
        count53 += 1;
        document.querySelector("#minion1").style.opacity = "0.7";
        setTimeout(() => { document.querySelector("#minion1").style.opacity = "1"; }, 100);
    }
    hit53 = false;
}

count54 = 0;
function hitMinion2() {
    hit54 = true;
    window.addEventListener("click", clickMinion2, false);
    if (count54 > 2) {
        gold += 50
        count54 = 0;

        minion2.top = 810
        minion2.left = 2140

        document.querySelector("#minion2").style.display = "none";
        setTimeout(() => { document.querySelector("#minion2").style.display = "block"; }, 20000);

        if (firstBlood === false) {
            audioPlay("soundFirstBlood", 1);
            firstBlood = true;
        }
    }
}
function clickMinion2() {
    if (hit54 === true) {
        count54 += 1;
        document.querySelector("#minion2").style.opacity = "0.7";
        setTimeout(() => { document.querySelector("#minion2").style.opacity = "1"; }, 100);
    }
    hit54 = false;
}

count55 = 0;
function hitMinion3() {
    hit55 = true;
    window.addEventListener("click", clickMinion3, false);
    if (count55 > 2) {
        gold += 50
        count55 = 0;

        minion3.top = 770
        minion3.left = 2180

        document.querySelector("#minion3").style.display = "none";
        setTimeout(() => { document.querySelector("#minion3").style.display = "block"; }, 20000);

        if (firstBlood === false) {
            audioPlay("soundFirstBlood", 1);
            firstBlood = true;
        }
    }
}
function clickMinion3() {
    if (hit55 === true) {
        count55 += 1;
        document.querySelector("#minion3").style.opacity = "0.7";
        setTimeout(() => { document.querySelector("#minion3").style.opacity = "1"; }, 100);
    }
    hit55 = false;
}

count56 = 0;
function hitMinion4() {
    hit56 = true;
    window.addEventListener("click", clickMinion4, false);
    if (count56 > 2) {
        gold += 50
        count56 = 0;

        setTimeout(() => { minion4.top = 770 }, 20000);
        setTimeout(() => { minion4.left = 520 }, 20000);

        document.querySelector("#minion4").style.display = "none";
        setTimeout(() => { document.querySelector("#minion4").style.display = "block"; }, 20000);

        if (firstBlood === false) {
            audioPlay("soundFirstBlood", 1);
            firstBlood = true;
        }
    }
}
function clickMinion4() {
    if (hit56 === true) {
        count56 += 1;
        document.querySelector("#minion4").style.opacity = "0.7";
        setTimeout(() => { document.querySelector("#minion4").style.opacity = "1"; }, 100);
    }
    hit56 = false;
}

count57 = 0;
function hitMinion5() {
    hit57 = true;
    window.addEventListener("click", clickMinion5, false);
    if (count57 > 2) {
        gold += 50
        count57 = 0;

        setTimeout(() => { minion5.top = 710 }, 20000);
        setTimeout(() => { minion5.left = 520 }, 20000);

        document.querySelector("#minion5").style.display = "none";
        setTimeout(() => { document.querySelector("#minion5").style.display = "block"; }, 20000);

        if (firstBlood === false) {
            audioPlay("soundFirstBlood", 1);
            firstBlood = true;
        }
    }
}
function clickMinion5() {
    if (hit57 === true) {
        count57 += 1;
        document.querySelector("#minion5").style.opacity = "0.7";
        setTimeout(() => { document.querySelector("#minion5").style.opacity = "1"; }, 100);
    }
    hit57 = false;
}

count58 = 0;
function hitMinion6() {
    hit58 = true;
    window.addEventListener("click", clickMinion6, false);
    if (count58 > 2) {
        gold += 50
        count58 = 0;

        setTimeout(() => { minion6.top = 650 }, 20000);
        setTimeout(() => { minion6.left = 520 }, 20000);

        document.querySelector("#minion6").style.display = "none";
        setTimeout(() => { document.querySelector("#minion6").style.display = "block"; }, 20000);

        if (firstBlood === false) {
            audioPlay("soundFirstBlood", 1);
            firstBlood = true;
        }
    }
}
function clickMinion6() {
    if (hit58 === true) {
        count58 += 1;
        document.querySelector("#minion6").style.opacity = "0.7";
        setTimeout(() => { document.querySelector("#minion6").style.opacity = "1"; }, 100);
    }
    hit58 = false;
}

count59 = 0;
function hitMinion7() {
    hit59 = true;
    window.addEventListener("click", clickMinion7, false);
    if (count59 > 2) {
        gold += 50
        count59 = 0;

        setTimeout(() => { minion7.top = 2200 }, 20000);
        setTimeout(() => {minion7.left = 2160 }, 20000);

        document.querySelector("#minion7").style.display = "none";
        setTimeout(() => { document.querySelector("#minion7").style.display = "block"; }, 20000);

        if (firstBlood === false) {
            audioPlay("soundFirstBlood", 1);
            firstBlood = true;
        }
    }
}
function clickMinion7() {
    if (hit59 === true) {
        count59 += 1;
        document.querySelector("#minion7").style.opacity = "0.7";
        setTimeout(() => { document.querySelector("#minion7").style.opacity = "1"; }, 100);
    }
    hit59 = false;
}

count60 = 0;
function hitMinion8() {
    hit60 = true;
    window.addEventListener("click", clickMinion8, false);
    if (count60 > 2) {
        gold += 50
        count60 = 0;

        setTimeout(() => { minion8.top = 2200 }, 20000);
        setTimeout(() => { minion8.left = 2230 }, 20000);

        document.querySelector("#minion8").style.display = "none";
        setTimeout(() => { document.querySelector("#minion8").style.display = "block"; }, 20000);

        if (firstBlood === false) {
            audioPlay("soundFirstBlood", 1);
            firstBlood = true;
        }
    }
}
function clickMinion8() {
    if (hit60 === true) {
        count60 += 1;
        document.querySelector("#minion8").style.opacity = "0.7";
        setTimeout(() => { document.querySelector("#minion8").style.opacity = "1"; }, 100);
    }
    hit60 = false;
}

count61 = 0;
function hitMinion9() {
    hit61 = true;
    window.addEventListener("click", clickMinion9, false);
    if (count61 > 2) {
        gold += 50
        count61 = 0;

        setTimeout(() => { minion9.top = 2200 }, 20000);
        setTimeout(() => { minion9.left = 2300 }, 20000);

        document.querySelector("#minion9").style.display = "none";
        setTimeout(() => { document.querySelector("#minion9").style.display = "block"; }, 20000);

        if (firstBlood === false) {
            audioPlay("soundFirstBlood", 1);
            firstBlood = true;
        }
    }
}
function clickMinion9() {
    if (hit61 === true) {
        count61 += 1;
        document.querySelector("#minion9").style.opacity = "0.7";
        setTimeout(() => { document.querySelector("#minion9").style.opacity = "1"; }, 100);
    }
    hit61 = false;
}