export const steps = [
	{
		id: 0,
		label: 'Maker',
		title: 'Choose maker',
		values: [
			{ parentValue: '', value: 'Audi' },
			{ parentValue: '', value: 'BMW' },
			{ parentValue: '', value: 'Mersedec-bens' },
		],
	},
	{
		id: 1,
		label: 'Model',
		title: 'Choose Model',
		values: [
			{ parentValue: 'Audi', value: 'A4' },
			{ parentValue: 'Audi', value: 'A6' },
			{ parentValue: 'Audi', value: 'A8' },
			{ parentValue: 'BMW', value: 'M3' },
			{ parentValue: 'BMW', value: 'M5' },
			{ parentValue: 'BMW', value: 'X5' },
			{ parentValue: 'Mersedec-bens', value: 'Vito' },
			{ parentValue: 'Mersedec-bens', value: 'SL-Class' },
			{ parentValue: 'Mersedec-bens', value: 'S-class' },
		],
	},
	{
		id: 2,
		label: 'Transmission',
		title: 'Choose Transmission',
		values: [
			{ parentValue: '', value: 'Automatic' },
			{ parentValue: '', value: 'Semi-automatic' },
		],
	},
	{
		id: 3,
		label: 'Type fuel',
		title: 'Choose type fuel',
		values: [
			{ parentValue: '', value: 'gas' },
			{ parentValue: '', value: 'diesel' },
		],
	},
	{
		id: 4,
		label: 'Result',
		title: 'Summary',
		values: [{ parentValue: '', value: '' }],
	},
];
