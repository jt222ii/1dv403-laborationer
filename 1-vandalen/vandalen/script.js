"use strict";

var makePerson = function(persArr){
    // Din kod här...
    //ska innehålla information om den högsta åldern, lägsta åldern, medelåldern samt en sträng med samtliga namn sorterade i bokstavsordning
    var minAge;
    var maxAge;
    var averageAge;
    var names = "";
    var nameArray = [];
    var ageArray = [];
    var result = {}; 

 /*   for(var i=0;i<persArr.length; i += 1)
    {
       nameArray[i] = persArr[i]['name'];   //persArr[i].name; fungerar också
    }

    for(var i=0;i<persArr.length; i += 1)
    {
       ageArray[i] = persArr[i]['age'];   //persArr[i].name; fungerar också
    }*/
    
    //.map: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    ageArray = persArr.map(function(ageArr){
        return ageArr.age;
    });
    
    nameArray = persArr.map(function(nameArr){
        return nameArr.name;}).sort(function (a,b){return a.localeCompare(b, 'sv');}); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
    //sort med localecompare kollar ger värden till strängarna i arrayen baserat på bokstavsordningen och sorterar sedan utifrån detta.
    
    //nameArray.sort(function (a,b){return a.localeCompare(b, 'sv');}); 
    names = nameArray.toString();                                     
    names = names.split(",").join(", ");
    
	//ageArray.sort();

    maxAge = Math.max.apply(Math, ageArray);
    minAge = Math.min.apply(Math, ageArray); 

    averageAge = ageArray.reduce(function(a, b) { return a + b });   //https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
    averageAge = averageAge / ageArray.length;                      // a = previousValue b = currentValue. Så 37(a) + 36(b) -> 79(a) + 46(b)
        
    result = {minAge: minAge, maxAge: maxAge, averageAge: Math.round(averageAge), names: names};
    
    return result;
};
var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];
var result = makePerson(data);
console.log(result);