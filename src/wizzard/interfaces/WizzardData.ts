interface IWizzardProps {
	id: number;
	label: string;
	title: string;
	values: IValue[];
}
interface IWizzardState {
	choose: number;
	data: IWizzardProps[];
	parentValue: string;
}

interface IValue {
	parentValue: string;
	value: string;
}

interface IResultChooses {
	id: number;
	resultChoses: string;
}

export { IWizzardProps, IWizzardState, IResultChooses, IValue };
