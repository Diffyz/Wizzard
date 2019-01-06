import * as React from 'react';

import { steps } from '../data/data';
import {
	IResultChooses,
	IValue,
	IWizzardProps,
	IWizzardState,
} from '../interfaces/WizzardData';

import './wizzard.css';

const result: IResultChooses[] = [
	{
		id: 0,
		resultChoses: '',
	},
];

export class Wizzard extends React.Component<any, IWizzardState> {
	constructor(props: IWizzardProps) {
		super(props);
		this.state = {
			choose: 0,
			data: steps,
			parentValue: '',
		};
	}

	public render() {
		return (
			<div className='container'>
				<div className='choose'>{this.renderChoses()}</div>
				<span>
					<button
						id='prevButton'
						className={this.state.choose === 0 ? 'hide' : ''}
						onClick={this.switchPrev}
					>
						prev
					</button>
					<button
						id='nextButton'
						className={
							this.state.choose === 5 ||
							result[this.state.choose].resultChoses === ''
								? 'hide'
								: ''
						}
						onClick={this.switchNext}
					>
						next
					</button>
				</span>
			</div>
		);
	}

	private switchPrev = (): void =>
		this.setState({ choose: this.state.choose - 1 });

	private renderChoses = (): React.ReactNode =>
		this.drowWizzard(this.state.data[this.state.choose]);

	private isExistingParenValue = (currentData: IWizzardProps): boolean =>
		!!currentData.values.find((value) => value.parentValue !== '');

	private showSutiableValues = (currentData: IWizzardProps): IValue[] =>
		currentData.values.filter((x) => x.parentValue === result[0].resultChoses);

	private isShowingResult = (): boolean =>
		this.state.data && this.state.choose === this.state.data.length - 1;

	private renderResult(chooseResult: string): React.ReactNode {
		return (
			<div key={chooseResult}>
				<h4>{chooseResult}</h4>
			</div>
		);
	}

	private switchNext = (): void => {
		const nextId = this.state.choose + 1;
		this.setState({ choose: nextId });
		if (!result.find((x) => x.id === nextId)) {
			result.push({ id: nextId, resultChoses: '' });
		}
	};

	private selectElement(name: string): void {
		this.setState({ parentValue: name });
		const index = result.findIndex((x) => x.id === this.state.choose);
		index >= 0
			? (result[index].resultChoses = name)
			: result.push({ id: this.state.choose, resultChoses: name });
	}

	private drow(value: IValue): React.ReactNode {
		return (
			<div key={value.value}>
				<label htmlFor={value.value}>{value.value}</label>
				<input
					id={value.value}
					type='radio'
					name='choose'
					checked={result[this.state.choose].resultChoses === value.value}
					onChange={this.selectElement.bind(this, value.value)}
				/>
			</div>
		);
	}

	private drowWizzard(currentData: IWizzardProps): React.ReactNode {
		if (this.isShowingResult()) {
			const chooseResult: string[] = result.map((x) => x.resultChoses);
			return chooseResult.map(this.renderResult);
		}
		const valueForDrow: IValue[] = this.isExistingParenValue(currentData)
			? this.showSutiableValues(currentData)
			: currentData.values.filter((x) => x.value);

		return (
			<div className='control-button'>
				<h4>{currentData.label}</h4>
				{valueForDrow.map((x) => this.drow(x))}
			</div>
		);
	}
}
