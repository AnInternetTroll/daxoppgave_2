const timeLeftEl = document.querySelector("#time-left");
const timeLeft = new URL(location.href).searchParams.get("time-left");
// Precision is a myth
const timeLeftDate = new Date();
timeLeftDate.setFullYear(timeLeftDate.getFullYear() + parseInt(timeLeft));
const { format } = new Intl.DateTimeFormat(
	navigator.language, {
		day: "2-digit",
		month: "long",
		year: "numeric",
	}
);

setInterval(() => {
	const secondsToDeath = milsToSeconds(timeLeftDate.getMilliseconds() - Date.now());
	const minutesToDeath = secondsToMinutes(secondsToDeath);
	const hoursToDeath = minToHours(minutesToDeath);
	const daysToDeath = hoursToDays(hoursToDays);
	console.log('we do a little trolling');

	timeLeftEl.textContent = `
		Death date: ${format(timeLeftDate)}
		${parseInt(daysToDeath)}d ${parseInt(hoursToDeath)}h ${parseInt(minutesToDeath)}m ${parseInt(secondsToDeath)}s
		`;
}, 1000);

const milsToSeconds = (m) => m / 1000;
const secondsToMinutes = (s) => s / 60;
const minToHours = (min) => min / 60;
const hoursToDays = (h) => h / 24;
const daysToYears = (d) => d / 365;

