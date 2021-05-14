function setup(){
c=createCanvas(300,250);
c.center();
v=createCapture(VIDEO);
v.hide();

clas=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/fGtuXrn1p//model.json' , load)
}
function load(){
console.log("model loaded")
console.log("version", ml5.version)
}
function draw(){
image(v,0,0,300,250)
clas.classify(v , rsult)
}
function rsult(error , result){
if(error){
console.error(error)
}
else{
console.log(result)
document.getElementById("obj").innerHTML=result[0].label;
document.getElementById("obj").innerHTML=result[0].confidence.toFixed(2);
}
};