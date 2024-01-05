var Cancion1 = "";
var Cancion2 = "";
var Cancion3 = "";
var NumeroM = "";
var mDX = 0;
var mDY = 0;
var mD = 0;
var mIX = 0;
var mIY = 0;
var mI = 0;
function preload(){
    Cancion1 = loadSound("1.mp3");
    Cancion2 = loadSound("2.mp3");
    Cancion3 = loadSound("3.mp3");
}
function setup(){
    lienzo = createCanvas(420, 420);
    lienzo.position(385, 270);
    camara = createCapture(VIDEO);
    camara.hide();
    Po = ml5.poseNet(camara, Hola);
    Po.on("pose", Resultados);
}
function draw(){
    image(camara, 0, 0, 420, 420);
    if (mI > 0.02){
        stroke("black");
        fill("green");
        circle(mIX, mIY, 10);
        if (mIY > 0 && mIY < 210) {
            document.getElementById("V2").innerHTML = "velocidad: 2.5"
            Cancion3.rate(2.5);
            Cancion1.rate(2.5);
            Cancion2.rate(2.5);
        }
        else if (mIY >= 210 && mIY < 260) {
            document.getElementById("V2").innerHTML = "velocidad: 2.0"
            Cancion3.rate(2);
            Cancion1.rate(2);
            Cancion2.rate(2);
        }
        else if (mIY >= 260 && mIY < 310) {
            document.getElementById("V2").innerHTML = "velocidad: 1.5"
            Cancion3.rate(1.5);
            Cancion1.rate(1.5);
            Cancion2.rate(1.5);
        }
        else if (mIY >= 310 && mIY < 360) {
            document.getElementById("V2").innerHTML = "velocidad: 1.0"
            Cancion3.rate(1);
            Cancion1.rate(1);
            Cancion2.rate(1);
        }
        else if (mIY >= 360) {
            document.getElementById("V2").innerHTML = "velocidad: 0.5"
            Cancion3.rate(0.5);
            Cancion1.rate(0.5);
            Cancion2.rate(0.5);
        }
    }
    if (mD > 0.02) {
        stroke("black");
        fill("blue");
        circle(mDX , mDY, 10);
        a1 = Number(mDY);
        a2 = Math.floor(a1);
        a3 = a2/600;
        a4 = a3.toFixed(3);
        console.log(a3); 
        document.getElementById("V1").innerHTML = "volumen: " + a4;
        Cancion3.setVolume(a3);
        Cancion1.setVolume(a3);
        Cancion2.setVolume(a3);

    }

}
function Re(){
    if (NumeroM == "1") {
        Cancion3.stop();
        Cancion1.stop();
        Cancion2.stop();
        Cancion1.play();
    }
    else if (NumeroM == "2") {
        Cancion3.stop();
        Cancion1.stop();
        Cancion2.stop();
        Cancion2.play();
    }
    else{
        Cancion3.stop();
        Cancion1.stop();
        Cancion2.stop();
        Cancion3.play();
    }

}
function Pa(){
    Cancion1.stop();
    Cancion2.stop();
    Cancion3.stop();
}
function Usar(){
    NumeroM = document.getElementById("MusicaN").value
}
function Hola(){
    console.log("hfakhs");
}
function Resultados(BUENOS){
    if (BUENOS.length > 0) {
        console.log(BUENOS);
        mDX = BUENOS[0].pose.rightWrist.x -45;
        mDY = BUENOS[0].pose.rightWrist.y  -110;
        mIX = BUENOS[0].pose.leftWrist.x -165;
        mIY = BUENOS[0].pose.leftWrist.y - 110;
        mI = BUENOS[0].pose.keypoints[9].score;
        mD = BUENOS[0].pose.keypoints[10].score;
    }
}