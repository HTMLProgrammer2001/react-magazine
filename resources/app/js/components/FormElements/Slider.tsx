import * as React from 'react';
import {WrappedFieldProps, change} from 'redux-form';
import {connect, ConnectedProps} from 'react-redux';


const connected = connect();

type ISliderProps = {
	min: number,
	max: number,
	formName: string
}

type IWhich = 'left' | 'right' | null;

type ISliderState = {
	which: IWhich,
	left: number,
	right: number
}

type IElementProps = WrappedFieldProps &
	React.InputHTMLAttributes<HTMLDivElement> &
	ISliderProps & ConnectedProps<typeof connected>;

class SliderElement extends React.Component<IElementProps, ISliderState>{
	parent: React.RefObject<HTMLDivElement>;
	indicator: React.RefObject<HTMLDivElement>;
	left: React.RefObject<HTMLDivElement>;
	right: React.RefObject<HTMLDivElement>;

	constructor(props: IElementProps){
		super(props);

		//Refs
		this.parent = React.createRef<HTMLDivElement>();
		this.indicator = React.createRef<HTMLDivElement>();
		this.left = React.createRef<HTMLDivElement>();
		this.right = React.createRef<HTMLDivElement>();
		
		//Set state
		this.state = {
			which: null,
			left: 0,
			right: 0
		};

		//Bind events
		this.onMouseUp = this.onMouseUp.bind(this);
		this.onMouseMove = this.onMouseMove.bind(this);
	}

	componentDidMount(): void {
		// 50..100 60 => (60 - 50)/(100 - 50)

		const {min, max, input: {value}} = this.props;

		//Calculate positions
		const leftPosition = (value.from - min)/(max - min) * 100;
		const rightPosition = (value.to - min)/(max - min) * 100;

		this.setState({
			left: leftPosition,
			right: rightPosition
		});

		//Add document mouse move listener
		document.addEventListener('mousemove', this.onMouseMove);
		document.addEventListener('mouseup', this.onMouseUp);
	}

	componentDidUpdate(): void {
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

		console.log(which);
	}
	
	onMouseMove(event: any){
		if(!this.state.which) {
			return;
		}

		const {min, max, dispatch} = this.props;

		const parentBox = this.parent.current!.getBoundingClientRect();
		const newPos = (event.clientX - parentBox.left)/parentBox.width * 100;

		//Move left point
		if(this.state.which == 'left' && newPos < this.state.right - 5) {
			this.setState({
				left: newPos < 0 ? 0 : newPos
			});
		}
		//Move right point
		else if(this.state.which == 'right' && newPos > this.state.left + 5){
			this.setState({
				right: 100 - (newPos > 100 ? 100 : newPos)
			});
		}

		//Dispatch change
		dispatch(change(this.props.formName, 'priceRange', {
			from: this.state.left/100 * (max - min) + min,
			to: (100 - this.state.right)/100 * (max - min) + min
		}));
	}
	
	onMouseUp(){
		this.setState({
			which: null
		});
	}

	positeSlider(){
		//Set positions to manipulators and line
		this.left.current!.style.left = `${this.state.left}%`;
		this.right.current!.style.right = `${this.state.right}%`;
		
		this.indicator.current!.style.left = `${this.state.left}%`;
		this.indicator.current!.style.right = `${this.state.right}%`;
	}
}

export default connected(SliderElement);
