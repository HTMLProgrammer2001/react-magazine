import * as React from 'react';


type IMarkProps = {
	rating: number,
	fixed: boolean,
	onChange?: (newValue: number) => void
};

const Mark: React.FC<IMarkProps> = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		x="0px"
		y="0px"
		width="150px"
		height="30px"
		viewBox="0 0 2150 427"
		className="reviews__mark"
	>
		<defs>
			<polygon
					 points="213.333,10.441 279.249,144.017 426.667,165.436 320,269.41
						 345.173,416.226 213.333,346.91 81.485,416.226 106.667,269.41
						 0,165.436 147.409,144.017 " id="star"/>
		</defs>

		<clipPath id="clip">
			{new Array(5).fill(0).map((item, index) => (
				<use
					href="#star"
					key={index}
					transform={`translate(${index * 430})`}
				/>
			))}
		</clipPath>

		<rect
			x="0"
			y="0"
			width={2150 * props.rating/5}
			height="427"
			fill="yellow"
			className="reviews__mark-fill"
			style={{clipPath: 'url("#clip")'}}/>

		{new Array(5).fill(0).map((item, index) => (
			<use
				href="#star"
				key={index}
				transform={`translate(${index * 430})`}
				onClick={() => !props.fixed && props.onChange ? props.onChange(index + 1) : false}
				className="reviews__mark-star"
			/>
		))}
	</svg>
);

export default Mark;
