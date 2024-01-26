import React from "react";

export default function Grid({ paragraphs, images }) {
	return (
		<div className="custom-grid-1">
			{paragraphs.map((paragraph, idx) => (
				<>
					<p className={`paragraph paragraph${idx + 1}`}>{paragraph}</p>
					<img className={`image image${idx + 1}`} src={images[idx]} alt="" />
				</>
			))}
		</div>
	);
}
