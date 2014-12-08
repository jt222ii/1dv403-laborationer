"use strict";

var quiz = {
    guessesArr: [],
    tries: 0,
    question: null,
    questionNr:0,
    init:function(){
        document.getElementById("knapp").disabled = false;
        document.getElementById("textarea").disabled = false;
        document.getElementById("result").innerHTML = "...";
        document.getElementById("list").innerHTML = "";
        quiz.guessesArr = [];
        quiz.tries = 0;
        quiz.question = null;
        quiz.questionNr = 0;
        quiz.renderQ("http://vhost3.lnu.se:20080/question/1");
    },
    
    renderQ:function(url){
        quiz.tries = 0;
       // quiz.questionNr += 1;
        var quizField = document.getElementById("question");
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4 && xhr.status === 200)
            {
                quiz.question = JSON.parse(xhr.responseText);
                quizField.innerHTML = quiz.question.question;
            }
        };
        xhr.open("GET", url, true);
        xhr.send(null);
        
		var send = document.getElementById("knapp");
        send.onclick = function(e){
            if (document.getElementById("textarea").value !== "")
            {
                var answerValue = document.getElementById("textarea").value;
                document.getElementById("textarea").value = "";
                quiz.nextQ(answerValue, quiz.question.nextURL);
            }
            else
            {e.preventDefault()}
        };
        var entersend = document.getElementById("textarea");
        entersend.onkeypress=function(e){if (e.keyCode == 13){
                if (document.getElementById("textarea").value !== "")
                {
                    var answerValue = document.getElementById("textarea").value;
                    document.getElementById("textarea").value = "";
                    quiz.nextQ(answerValue, quiz.question.nextURL);
                }
                else
                {e.preventDefault()}
            }
        };
    },
    
    nextQ:function(input, url){
        
    console.log(input);
    console.log(url);
    var xhr2 = new XMLHttpRequest();
    xhr2.onreadystatechange = function(){
        if(xhr2.readyState === 4)
        {
            var answerResponse = JSON.parse(xhr2.responseText);
            console.log(answerResponse.message);
            if(answerResponse.message === "Correct answer!")
            {
                quiz.guessesArr.push(quiz.tries);
                if(answerResponse.nextURL !== undefined)
                {
                document.getElementById("result").innerHTML = "Du svarade RÄTT!";  
                //quiz.guessesArr.push(quiz.tries);
               /* var result = document.createElement("p");
                result.innerHTML = "Fråga " + quiz.questionNr + ": " + quiz.tries;
                document.getElementById("list").appendChild(result);*/
                console.log(quiz.guessesArr);
                quiz.renderQ(answerResponse.nextURL);
                
                }
                else
                {
                    
                document.getElementById("result").innerHTML = "Du har nu klarat alla frågor!";
                quiz.renderResult();
                }
            }
            else if (answerResponse.message === "Wrong answer! :(")
            {
                quiz.tries += 1;
                document.getElementById("result").innerHTML = "Du svarade fel!";
            }
        }
    };
    var sAnswer = JSON.stringify({answer: input});
    xhr2.open("POST", url, true);
    xhr2.setRequestHeader("Content-type", "application/json");
    xhr2.send(sAnswer);
    },
    
    renderResult:function(){
        document.getElementById("knapp").disabled = true;
        document.getElementById("textarea").disabled = true;
        for (var i = 0; i < quiz.guessesArr.length; i++) {
            quiz.questionNr += 1;
            var result = document.createElement("p");
            result.innerHTML = "Fråga " + quiz.questionNr + ": " + quiz.guessesArr[i];
            document.getElementById("list").appendChild(result);
        }
        var restart = document.createElement("button");
        restart.innerHTML = "Starta om";
        restart.onclick = function(){
            quiz.init();
        };
        document.getElementById("list").appendChild(restart);
    },
    
};
window.onload = quiz.init;