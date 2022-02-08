const timeLeftEl = document.querySelector("#time-left");
const timeLeft = new URL(location.href).searchParams.get("time-left");
// Precision is a myth
const timeLeftDate = new Date();
timeLeftDate.setFullYear(timeLeftDate.getFullYear() + parseInt(timeLeft));

setInterval(() => {
	const now = new Date();
	console.log(now, timeLeftDate);
	timeLeftEl.textContent = `year ${
		timeLeftDate.getFullYear() - now.getFullYear()
	} month ${timeLeftDate.getMonth() - now.getMonth()} day ${
		timeLeftDate.getDay() - now.getDay()
	} ${timeLeftDate.getHours() - now.getHours()}:${
		timeLeftDate.getMinutes() - now.getMinutes()
	}:${timeLeftDate.getSeconds() - now.getSeconds()}`;
}, 1000);
