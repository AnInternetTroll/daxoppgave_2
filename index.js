import { calculateExactTimeOfDeath, validateData } from "./formler.js";

const datePickerElements = document.querySelectorAll("input[type=date]");
const formEl = document.querySelector("form#calculate-death");

formEl.addEventListener("submit", (e) => {
	e.preventDefault();
	const data = validateData(Object.fromEntries(new FormData(e.target)));
	console.debug(data);
	window.location.href =  `death.html?time-left=${encodeURIComponent(calculateExactTimeOfDeath(data))}`
})

window.onload = () => {
	const todayISO = new Date().toISOString().split("T")[0];
	datePickerElements.forEach(el => (el.max = todayISO))
}
