import React from "react";
import Carousel from "react-bootstrap/Carousel";
import newsImage1 from "../../assets/img/esports-pic-1.jpg";

export default function NewsCarousel(props) {
	return (
		<Carousel indicators={false} controls={false}>
			<Carousel.Item>
				<img
					className="d-block w-100 news-image"
					src={newsImage1}
					alt="Welcome To DontFeed.gg"
				/>
				<Carousel.Caption>
					<h1 className="text-stroke">Welcome To DontFeed.gg</h1>
					<p>Where professional Esports meets casual gaming</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}
