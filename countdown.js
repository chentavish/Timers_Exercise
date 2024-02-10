function countDown(nums){
    let counter = setInterval(function(){
        nums--;
        if (nums > 0){
            console.log(nums);
        }
        else if (nums === 0) {
            clearInterval(nums);
            done();
        }
    },1000)
  }

  function done(){
    console.log("DONE!");
  }
  
  countDown(4);
  

