alert('enter your option number in prompt.. ');
	var option = prompt('[1]. Addition, [2]. Subtration [3]. Multiply [4]. Division [5]. squreroot [6]. percentage');
	switch(parseInt(option)){
    	case 1:
    		    var a= prompt('enter first number');
            var b= prompt('enter second number');
            console.log(parseInt(a)+parseInt(b));
            break;
      case 2:
       		   var a=prompt('enter first number');
             var b=prompt('enter second number');
             console.log(parseInt(a)-parseInt(b));
             break;
      case 3:
       		   var a=prompt('enter first number');
             var b=prompt('enter second number');
             console.log(parseInt(a)*parseInt(b));
             break;
      case 4:
       		   var a=prompt('enter first number');
             var b=prompt('enter second number');
             console.log(parseInt(a)/parseInt(b));
             break;
      case 5:
       		   var a=prompt('enter number for square root');
             console.log(parseInt(a)**2);
             break;
      case 6:
       		   var a= prompt('enter your answer');
             var b= prompt('enter total number');
             console.log((parseInt(a)/parseInt(b))*100+"%");
             break;
      default:
            alert('please choose the number (1 to 6) .. ');
            break;
    }
