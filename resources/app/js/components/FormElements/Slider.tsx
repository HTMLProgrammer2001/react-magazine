import * as React from 'react';
import {WrappedFieldProps, change} from 'redux-form';
import {connect, ConnectedProps} from 'react-redux';
import {Dispatch} from 'redux';


const mapDispatchToProps = (dispatch: Dispatch, ownProps: ISliderProps) => ({
	changeValue: (name: string, newValue: any) => {
		dispatch(change(ownProps.formName, name, newValue));
	}
});

const connected = connect(null, mapDispatchToProps);

type ISliderProps = {
	min: number,
	max: number,
	formName: string
}

type IWhich = 'left' | 'right' | null;

type ISliderState = {
	which: IWhich
}

type IElementProps = WrappedFieldProps &
	React.InputHTMLAttributes<HTMLDivElement> &
	ISliderProps & ConnectedProps<typeof connected>;

class SliderElement extends React.Component<IElementProps, ISliderState>{
	parent: React.RefObject<HTMLDivElement>;
	indicator: React.RefObject<HTMLDivElement>;
	left: React.RefObject<HTMLDivElement>;
	right: React.RefObject<HTMLDivElement>;

	leftPosition: number;
	rightPosition: number;

	constructor(props: IElementProps){
		super(props);

		//Refs
		this.parent = React.createRef<HTMLDivElement>();
		this.indicator = React.createRef<HTMLDivElement>();
		this.left = React.createRef<HTMLDivElement>();
		this.right = React.createRef<HTMLDivElement>();
		this.leftPosition = 0;
		this.rightPosition = 0;
		
		//Set state
		this.state = {
			which: null
		};

		//Bind events
		this.onMouseUp = this.onMouseUp.bind(this);
		this.onMouseMove = this.onMouseMove.bind(this);
	}

	componentDidMount(): void {
		// 50..100 60 => (60 - 50)/(100 - 50)

		const {min, max, input: {value}} = this.props;

		//Calculate positions
		this.leftPosition = (value.from - min)/(max - min) * 100;
		this.rightPosition = 100 - (value.to - min)/(max - min) * 100;

		this.positeSlider();

		//Add document mouse move listener
		document.addEventListener('mousemove', this.onMouseMove);
		document.addEventListener('mouseup', this.onMouseUp);
	}

	componentDidUpdate(): void {
		const {min, max, input: {value}} = this.props;

		//Calculate positions
		this.leftPosition = (value.from - min)/(max - min) * 100;
		this.rightPosition = 100 - (value.to - min)/(max - min) * 100;

		this.positeSlider();
	}

	render(){
		return (
			<div 
				className={`goods__price ${this.props.className}`} 
				ref={this.parent}
			>
				<div 
					className="goods__price-point left" 
					ref={this.left}
					onMouseDown={this.onMouseDown.bind(this, 'left')}
				/>
				
				<div className="goods__price-indicator" ref={this.indicator}/>
				
				<div 
					className="goods__price-point right" 
					ref={this.right}
					onMouseDown={this.onMouseDown.bind(this, 'right')}
				/>
			</div>
		);
	}

	componentWillUnmount(): void {
		document.removeEventListener('mousemove', this.onMouseMove);
		document.removeEventListener('mouseup', this.onMouseUp);
	}

	onMouseDown(which: IWhich = 'left'){
		this.setState({
			which
		});
	}
	
	onMouseMove(event: any){
		if(!this.state.which) {
			return;
		}

		const {min, max, input: {value}} = this.props;

		const parentBox = this.parent.current!.getBoundingClientRect();
		let newPos = (event.clientX - parentBox.left)/parentBox.width * 100;

		console.log(this.props.input.name);

		//Change value
		if(this.state.which == 'left' && newPos < 95 - this.rightPosition){
			newPos = newPos < 0 ? 0 : newPos;

			this.props.changeValue(this.props.input.name || 'priceRange', {
				from: newPos/100 * (max - min),
				to: value.to
			});
		}
		else if(this.state.which == 'right' && newPos > this.leftPosition + 5){
			newPos = newPos > 100 ? 100 : newPos;

			this.props.changeValue(this.props.name || 'priceRange', {
				from: value.from,
				to: newPos/100 * (max - min)
			});
		}
	}
	
	onMouseUp(){
		this.setState({
			which: null
		});
	}

	positeSlider(){
		//Set positions to manipulators and line
		this.left.current!.style.left = `${this.leftPosition}%`;
		this.right.current!.style.right = `${this.rightPosition}%`;
		
		this.indicator.current!.style.left = `${this.leftPosition}%`;
		this.indicator.current!.style.right = `${this.rightPosition}%`;
	}
}

export default connected(SliderElement);

