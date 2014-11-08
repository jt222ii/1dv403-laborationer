"use strict";

window.onload = function(){


	var birthday = function(date){
		


			// Din kod här.
			var dateNow = new Date();
			var usersBirthday = new Date(date);
			var days = 0;
			var months = 0;
			var numberOfDays = 0;
			
			var oneDay = 1000*60*60*24;

			var BirthDayNextYear = new Date();
			
			usersBirthday.setFullYear(dateNow.getFullYear());
			numberOfDays = (usersBirthday.getTime() - dateNow.getTime())/oneDay; 
			numberOfDays = Math.ceil(numberOfDays); 
			
			days = usersBirthday.getDate() - dateNow.getDate();
			months = usersBirthday.getMonth() - dateNow.getMonth();
			//years = usersBirthday.getFullYear() - dateNow.getFullYear();
			
			if (date === "")
			{throw new Error("Ange ett datum...");}
			
			// om användaren inte fyllt år eller fyller år
		    //if (usersBirthday.getMonth() - dateNow.getMonth() >= 0 && usersBirthday.getDate() - dateNow.getDate() >= 0)
			if ((usersBirthday.getTime() - dateNow.getTime())/oneDay >= -1)
			{
				//if birthday
				if (days === 0 && months === 0 )
				{
					return 0;
				} // return 0 för switch satsen nedan
				//if birthday tomorrow
				if (days === 1 && months === 0) 
				{
					return 1;
				}
				//else birthday later this year
				else
				return numberOfDays;
			}
			//annars om man fyllt år
			else
			{
			/*	BirthDayNextYear.setFullYear(usersBirthday.getFullYear()-1);
				return (usersBirthday.getTime() - BirthDayNextYear.getTime())/oneDay;  */
				return numberOfDays + 365;
			}


	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};