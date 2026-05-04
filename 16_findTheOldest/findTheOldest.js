const findTheOldest = function(people) {
    let currentYear = new Date().getFullYear();

    let oldest = people.reduce((oldestSoFar, currentPerson) => {

    
        if (oldestSoFar.yearOfDeath == undefined || 
            currentPerson.yearOfDeath == undefined){
            oldestSoFar.yearOfDeath = currentYear;
        }

        
       if(oldestSoFar.yearOfDeath - oldestSoFar.yearOfBirth >
        currentPerson.yearOfDeath - currentPerson.yearOfBirth
       ){
        return oldestSoFar;
       }else{
        return currentPerson;
       }
    });

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;


