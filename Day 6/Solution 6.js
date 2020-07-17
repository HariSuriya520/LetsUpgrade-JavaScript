function run(){
        var number = prompt('enter number greater than 100...');
        return (number>100)?run():console.log('bye..');
      }

run();
