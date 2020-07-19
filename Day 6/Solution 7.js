let userInput = Number(prompt("Enter A Number"));
checkPrime(userInput);

function checkPrime(n){
let i = 2;
let count,c = null;       
   for (count = 2 ;count <= n;  )
   {
      for (c = 2 ;c <= i - 1;c++)
      {
         if (i%c == 0)
            break;
      }
      if (c == i)
      {
        console.log(i);
        document.getElementById("demo").innerHTML += i+"<br>";
         count++;
      }
      i++; 
}
}   
