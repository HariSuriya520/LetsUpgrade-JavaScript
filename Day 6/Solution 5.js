var name = prompt('enter employee name: ');
      var sales = prompt('enter annual sales made by him .. ');
      if(sales>0 && sales<=5000){
        console.log(name+" is earned 2% reward");
      }
      else if(sales>=5001 && sales<=10000){
        console.log(name+" is earned 5% reward");
      }   
      else if(sales>=10001 && sales<=20000){
        console.log(name+" is earned 7% reward");
      }
      else if(sales>2000){
        console.log(name+" is earned 10% reward");
      }
      else{
        console.log("sending resignation letter to "+name+"! he is now fired.. !");
      }
