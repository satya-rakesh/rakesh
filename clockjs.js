/*setInterval(time,1000);*/		
	function time(){
		var date = new Date();
		let currentHour = date.getHours();
		let currentMinuits = date.getMinutes();
		let currentSeconds = date.getSeconds();
		let specification="AM";
		const hourNeedle = document.querySelector(".hour-needle");
		const minuiteNeedle = document.querySelector(".minuite-needle");
		const secondNeedle = document.querySelector(".second-needle");
		var hrAngle = 1;
		var minAngle = 1;
		var secAngle = 1;

		if(currentHour === 0){
			currentHour = 12;
			}

		if(currentHour > 12){
			currentHour = currentHour - 12;
			specification = "PM";
			}

		currentHour = (currentHour < 10) ? "0" + currentHour : currentHour;
		currentMinuits = (currentMinuits < 10) ? "0" + currentMinuits : currentMinuits;
		currentSeconds = (currentSeconds < 10) ? "0" + currentSeconds : currentSeconds;
		

		document.getElementById("hrs").innerHTML=currentHour;
		document.getElementById("mins").innerHTML=currentMinuits;
		document.getElementById("sec").innerHTML=currentSeconds;
		document.getElementById("specification").innerHTML=specification;

		setTimeout(function(){
			hrAngle =currentHour*30;
			minAngle =currentMinuits*6;
			secAngle =currentSeconds*6;
			hourNeedle.style.transform=`rotate(${hrAngle}deg)`;
			minuiteNeedle.style.transform=`rotate(${minAngle}deg)`;
			secondNeedle.style.transform=`rotate(${secAngle}deg)`;
		},0);
		let t = setTimeout(function(){ time() }, 0);
	}
	time();		