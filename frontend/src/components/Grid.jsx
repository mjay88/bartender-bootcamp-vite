import React, { useRef, useLayoutEffect } from "react";
import { Container } from "react-bootstrap";

export default function Grid({ paragraphs, images }) {
	// console.log(paragraphs, images, "Grid");
	// images = images.map((imgObject) => imgObject.url);
	return (
		<Container mb="5">
			<div className="custom-grid-1">
				{paragraphs?.map((paragraph, idx) => (
					<>
						<p key={`paragraph${idx}`} className={`paragraph paragraph${idx}`}>
							{paragraph}
						</p>
						<img
							key={`image${idx}`}
							className={`image image${idx}`}
							src={images[idx]?.url}
							alt=""
						/>
					</>
				))}
			</div>
		</Container>
	);
}
// return (
// 	<div className="custom-grid-1">
// 		{paragraphs?.map((paragraph, idx, paragraphsArray) => {
// 			if (idx >= 8) {
// 				return (
// 					<>
// 						<Grid
// 							paragraphs={paragraphsArray.slice(8)}
// 							images={images.slice(5)}
// 						/>
// 					</>
// 				);
// 			} else {
// 				return (
// 					<>
// 						<p className={`paragraph paragraph${idx}`}>{paragraph}</p>
// 						<img className={`image image${idx}`} src={images[idx]} alt="" />
// 						{/* <p className={`paragraph`}>{paragraph}</p> */}
// 					</>
// 				);
// 			}
// 		})}
// 	</div>
// );

//custom-grid-3

// return (
// 	<Container>
// 		<div className="custom-grid-3">
// 			{paragraphs.map((paragraph, idx) => (
// 				<>
// 					<p key={idx} className={`paragraph`}>
// 						{paragraph}
// 					</p>
// 					<img
// 						key={`${images[idx]}`}
// 						className={`image`}
// 						src={images[idx]}
// 						alt=""
// 					/>
// 				</>
// 			))}
// 		</div>
// 	</Container>
// );
