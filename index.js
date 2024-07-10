// Code your solution in this file!

// Code your solution in this file!

const array=['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers=function(array){
    return (array.slice(0,2));
}
const returnLastTwoDrivers=function(array){
    return (array.slice(2));
}

const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];

  
const createFareMultiplier = (multiplier) => {
    return (fare) => {
      return fare * multiplier;
    };
  };
const fareDoubler=createFareMultiplier(2);
const fareTripler=createFareMultiplier(3);
function selectDifferentDrivers(array,fun){
  if (fun===returnFirstTwoDrivers){
    return returnFirstTwoDrivers(array);
  }
  else{
    return returnLastTwoDrivers(array)
  }
}
