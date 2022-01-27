import React from 'react';
import style from './style.css';

function ProductCard({ props }) {
	const { imageSrc, imageAlt, manufacturer, name, priceFormatted } = props;
	return (
		<div className="flex-box">
			<div>
				<img src={imageSrc} alt={imageAlt} />
			</div>
			<div>
				<p>{manufacturer}</p>
				<p className="bold">{name}</p>
			</div>
			<div>
				<p className="bold">ab {priceFormatted}</p>
			</div>
			<div>
				<hr />
			</div>
		</div>
	);
}

export default ProductCard;
