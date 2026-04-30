const sumAll = function(firstNum, secondNum) {

    let endValue = 0;
    let startValue = 0;
    if(firstNum < 0 || secondNum < 0){
        return 'ERROR';
    }
    if(firstNum > secondNum){
        //assign firstNum as end value
        endValue = firstNum;
        startValue = secondNum;
    }
    else{
        startValue = firstNum;
        endValue = secondNum;
    }

    let sumArray = []; 

    for(let i = startValue; i <= endValue; i++){
        sumArray.push(i);
    }


    return sumArray.reduce((total, currentNum) => total + currentNum, 0)
    
    
    



};

// Do not edit below this line
module.exports = sumAll;
