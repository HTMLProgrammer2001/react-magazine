import * as React from 'react';
import c from 'classnames';


type IGalleryProps = {
	images: Array<string>
}

export const Gallery: React.FC<IGalleryProps> = (props) => {
	const [curImage, changeImage] = React.useState(0);

	return (
		<div className="product__images">
			<div className="product__image product__image_lg">
				<img
					src={props.images[curImage] || '/image/product.png'}
					alt="Product photo"
				/>
			</div>

			<div className="row space-between center">
				{
					props.images.map((image, index) => {
						const prodClass = c('product__image product__image_sm cur', {
							'product__image_active': curImage == index
						});

						return (
							<div
								className={prodClass}
								key={index}
								onClick={() => changeImage(index)}
							>
								<img src={image} width="100%" alt="Gallery photo"/>
							</div>
						);
					})
				}
			</div>
		</div>
	);
};

export default Gallery;
