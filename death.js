const timeLeftEl = document.querySelector("#time-left")
const timeLeft = new URL(location.href).searchParams.get("time-left")
// Precision is a myth
const now = new Date();
const timeLeftDate = now.setFullYear(now.getFullYear() + parseInt(timeLeft))
const format = new Intl.DateTimeFormat(navigator.language, {
	"day": "2-digit"
}).format;

setInterval(() => {
	console.log(now, timeLeftDate);
	timeLeftEl.textContent = format(Math.abs(timeLeftDate - new Date()))
}, 1000);
