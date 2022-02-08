/**
 * @param {number} isKjonn //how you identify, hvis du er ikke binær, bruk det tallet som du synes beskriver kjønnet ditt best
 * @param {string} wowRace //other MMO's count too..
 * @param {number} antallGangerRettetGeirSinProg
 * @param {number} treningPerUke //bare kul trening teller.
 * @param {number} McTjukkasPerManed //fatso King also counts
 * @param {boolean} hasFrokostForSkole
 * @param {boolean} hasDrivingFemalePartner or mother/sister
 * @param {boolean} hasMaleDrivingPartner or father/brother
 * @param {boolean} isSpillerItimen
 * @returns age achieved with current lifestyle. Exactly!
 */
export function calculateAge(
	isKjonn,
	wowRace,
	antallGangerRettetGeirSinProg,
	treningPerUke,
	McTjukkasPerManed,
	hasFrokostForSkole,
	hasDrivingFemalePartner,
	hasMaleDrivingPartner,
	isSpillerItimen
) {
	let calculatedAge = isKjonn ? 81.7 : 76.1;

	if (wowRace) calculatedAge -= 10.2; //To much sitting still..
	calculatedAge -= McTjukkasPerManed * 4.666;
	calculatedAge = calculatedAge - antallGangerRettetGeirSinProg * 1.2;
	calculatedAge = calculatedAge + treningPerUke * 1.2;
	calculatedAge += hasFrokostForSkole * 4.19;
	calculatedAge -= isSpillerItimen * 4.21;
	calculatedAge += hasDrivingFemalePartner * 3.75;
	calculatedAge -= hasMaleDrivingPartner * 3.71;
	calculatedAge -= isSpillerItimen * 4.62;

	return calculatedAge;
}
/**
 *
 * @param {{
 *   fodselsdato: Date
 *   isKjonn: number
 *   wowRace: string
 *   antallGangerRettetGeirSinProg: number
 *   treningPerUke: number
 *   McTjukkasPerManed: number
 *   hasFrokostForSkole: boolean
 *   hasDrivingFemalePartner: boolean
 *   hasMaleDrivingPartner: boolean
 *   isSpillerItimen: boolean
 * }} param0
 * @returns
 */
export function calculateExactTimeOfDeath({
	fodselsdato,
	isKjonn = false,
	wowRace,
	antallGangerRettetGeirSinProg,
	treningPerUke,
	McTjukkasPerManed,
	hasFrokostForSkole = false,
	hasDrivingFemalePartner = false,
	hasMaleDrivingPartner = false,
	isSpillerItimen = false,
} = {}) {
	let achievedAge = calculateAge(
		isKjonn,
		wowRace,
		antallGangerRettetGeirSinProg,
		treningPerUke,
		McTjukkasPerManed,
		hasFrokostForSkole,
		hasDrivingFemalePartner,
		hasMaleDrivingPartner,
		isSpillerItimen
	);
	console.log(achievedAge);

	return achievedAge - (new Date().getFullYear() - fodselsdato.getFullYear());
}

/**
 * Convert fields such as "on" to "true" and numbers to actual numbers
 * @param {Record<string, string>} obj The data from a form
 */
export function validateData(obj) {
	for (const key in obj) {
		if (isNaN(obj[key])) {
			const date = new Date(obj[key]);
			if (!isNaN(date.getDate())) {
				obj[key] = date;
				continue;
			}
			obj[key] =
				obj[key] === "on"
					? true
					: obj[key].length === 0
					? false
					: obj[key];
		} else obj[key] = parseInt(obj[key]);
	}
	return obj;
}
