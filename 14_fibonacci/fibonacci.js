const fibonacci = function(n) {
    let prevNum = [1,1]
    n = parseInt(n);
    if(n === 0){
        return 0;
    }else if(n === 1 || n === 2){
        return 1;
    }else if(n < 0){
        return 'OOPS';
    }



    let nthValue = 0;
    for(let i = 2; i < n; i++){
        nthValue =  prevNum[0] + prevNum[1] // 2
        //set a to 2

        prevNum.shift();
        prevNum.push(nthValue);

        
    }
    return nthValue;
};

// Do not edit below this line
module.exports = fibonacci;

