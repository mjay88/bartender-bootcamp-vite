import React from "react";

export default function Grid({ paragraphs, images }) {
	return (
		<div className="custom-grid-1">
			{paragraphs?.map((paragraph, idx) => (
				<>
					<p className={`paragraph paragraph${idx}`}>{paragraph}</p>
					<img className={`image image${idx}`} src={images[idx]} alt="" />
					{/* <p className={`paragraph`}>{paragraph}</p> */}
				</>
			))}
			{/* {images?.map((image, idx) => (
				<>
					<img className={`image`} src={image} alt="" />
				</>
			))} */}
		</div>
	);
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
}
