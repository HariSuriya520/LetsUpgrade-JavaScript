let userInput = Number(prompt("Enter A Number "));
let tables = null;
let pTables = document.getElementById('ptable');
let h3Tables = document.getElementById('h3table');

//Styling of WebPage

h3Tables.style.fontSize = "25px";
pTables.style.fontSize = "20px";
pTables.style.marginLeft = "20px";
h3Tables.style.marginLeft = "10px";
console.log(userInput !=="");

//Logic TO Print Tables 
if(userInput !=null && userInput !=""){
    h3Tables.innerText = `Table of ${userInput} :-`;
    for(i=1;i<=12;i++){
        tables = `${userInput} x ${i} = ${userInput*i}<br>`;
        // console.log(tables);
        pTables.innerHTML += tables;
    }
}
