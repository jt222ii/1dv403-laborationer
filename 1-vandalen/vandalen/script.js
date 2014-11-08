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
    var result = {}; // taget från uppgiften 

    for(var i=0;i<persArr.length;i++)
    {
       nameArray[i] = persArr[i]['name'];   //persArr[i].name; fungerar också
    }
    
    
        for(var i=0;i<persArr.length;i++)
    {
       ageArray[i] = persArr[i]['age'];   //persArr[i].name; fungerar också
    }
    
    
    nameArray.sort();
    
    names = nameArray.toString();

	ageArray.sort();


}
var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}, {name: "Apan Hej", age: 46}];
var result = makePerson(data);

console.log(result);