let userName = prompt("Enter The Name:- ");  //User Input

let bodyBg = document.getElementById('bodyBg');
let h3Name = document.getElementById('h3name');
let h3Clock = document.getElementById('clock');
let btn = document.getElementById('btn');

h3Name.innerText=`Welcome ${userName}.`;  //Display User Name

btn.onclick =()=>{                          //Dark Mode
 bodyBg.classList.toggle('bg');
}


function clock(){           //Clock
    let date = new Date();
    let time = date.toLocaleTimeString();
    h3Clock.innerText=time;
}
setInterval(clock,1000)  //Live Clock
