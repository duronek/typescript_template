export const types = () => {
	enum Days {
		Poniedzialek,
		Wtorek,
		Środa,
		Czwartek,
		Piątek,
	}

	const liczba: number | string = 'Artera';
	let text = 'String';
	const myDay: Days = Days.Piątek;

	text = 'Artur Nowacki';
	console.log(`Dzisiaj jest${myDay}`);
};
