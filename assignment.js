//SITE: https://github.com/zafor-khalid/assignment

// FUNCTION kilometerToMeter STRARTS HERE
function kilometerToMeter(input) {
    if (input < 0)
        return "Distance Can't Be Negetive. Enter a valid input.";   //COME OUT FROM FUNCTION WHEN DISTANECE IS NEGETIVE 

    else
        return input * 1000;               //   RETURN THE RESULT WITH THE FORMULLA: 1 KM = 1000 METER
}
// FUNCTION kilometerToMeter ENDS HERE


// FUNCTION budgetCalculator STARTS HERE
function budgetCalculator(numberOfClock, numberOfPhone, numberOfLaptop) {
    if (numberOfClock < 0 || numberOfPhone < 0 || numberOfLaptop < 0) {
        return "Number Can't Be Negetive. Enter a valid input.";   //COME OUT FROM FUNCTION WHEN NUMBER IS NEGETIVE 
    }
    else if (Math.ceil(numberOfClock) - Math.floor(numberOfClock) != 0 ||
        Math.ceil(numberOfPhone) - Math.floor(numberOfPhone) != 0 ||
        Math.ceil(numberOfLaptop) - Math.floor(numberOfLaptop) != 0) {

        return "Number Can't Be float. Enter a valid input.";   //COME OUT FROM FUNCTION WHEN NUMBER IS FLOAT 
    }
    else {
        const clockPrice = 50, phonePrice = 100, laptopPrice = 500;   // SET THE VALUE OF EACH COMPONENT
        return clockPrice * numberOfClock + phonePrice * numberOfPhone + laptopPrice * numberOfLaptop;
    }
}
// FUNCTION budgetCalculator STARTS HERE


// FUNCTION hotelCost STARTS HERE
function hotelCost(numberOfDays) {
    if (numberOfDays < 0) {
        return "Number Can't Be Negetive"        // CHECK VALUE ACCPETABLE OR NOT
    }
    else if (numberOfDays <= 10) {
        return numberOfDays * 100;
    }
    else if (numberOfDays <= 20) {
        return 1000 + (numberOfDays - 10) * 80;
    }
    else {
        return 1000 + 800 + (numberOfDays - 20) * 50;
    }
}
//FUNCTION hotelCost ENDS HERE


//FUNCTION megaFriend STARTS HERE
function megaFriend(inputArray) {
    let longestName = inputArray[0];
    for (var i = 0; i < inputArray.length; i++) {
        if (longestName.length < inputArray[i].length) {
            longestName = inputArray[i];
        }
    }
    return longestName;            // RETURN THE LONGEST NAME
}
// FUNCTION megaFriend ENDS HERE


