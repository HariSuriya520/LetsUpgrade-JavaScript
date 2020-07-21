let arrColor = ['Red','Blue','Green','Yellow','Skyblue','grey'];


let bg = document.getElementById('bg');



function changeBg(){
    const arrColorLength = arrColor.length;
    let random = Math.trunc(Math.random()*arrColorLength);
    console.log(arrColor[random]);
    bg.style.backgroundColor = arrColor[random];
}

setInterval(changeBg,5000);
