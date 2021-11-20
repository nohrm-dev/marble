import html from "../../../.storybook/helpers/html";
import { CarouselSlide } from "./slide/carousel-slide.stories.js";
import carousel, { flickityDefaults } from "./carousel.js";
import { useEffect } from "@storybook/client-api";
import { object, withKnobs } from "@storybook/addon-knobs";

export default {
	title: "Carousel/Carousel",
	decorators: [withKnobs],
};

const Carousel = () => {
	useEffect(() => {
		carousel(object("Flickity Settings", flickityDefaults));
	});

	return html` <section class="carousel-wrapper">
		<div class="js-carousel carousel">
			${CarouselSlide(false)} ${CarouselSlide(false)} ${CarouselSlide(false)} ${CarouselSlide(false)}
			${CarouselSlide(false)} ${CarouselSlide(false)} ${CarouselSlide(false)} ${CarouselSlide(false)}
			${CarouselSlide(false)} ${CarouselSlide(false)} ${CarouselSlide(false)} ${CarouselSlide(false)}
			${CarouselSlide(false)} ${CarouselSlide(false)} ${CarouselSlide(false)} ${CarouselSlide(false)}
		</div>
	</section>`;
};

export { Carousel };
