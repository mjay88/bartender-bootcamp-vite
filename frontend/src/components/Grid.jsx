import React, { useRef, useLayoutEffect } from "react";
import { Container } from "react-bootstrap";

export default function Grid({ paragraphs, images }) {
	// console.log(paragraphs, images, "Grid");
	// images = images.map((imgObject) => imgObject.url);
	return (
		<Container mb="5">
			<div className="custom-grid-1">
				{paragraphs?.map((paragraph, idx) => (
					<React.Fragment key={idx}>
						<p className={`paragraph`}>{paragraph}</p>
						<img className={`image`} src={images[idx]?.url} alt="" />
					</React.Fragment>
				))}
			</div>
		</Container>
	);
}
