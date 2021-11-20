import html from "../../../../.storybook/helpers/html";
import videoSlide from "./video-slide.js";
import { useEffect } from "@storybook/client-api";
export default { title: "Carousel/Carousel Slide" };

import image1 from "../../../../.storybook/assets/images/full-width-image/seurat_circus_sideshow-2160.jpg";
import image2 from "../../../../.storybook/assets/images/greek-hall/1x1/1240.jpg";
import image3 from "../../../../.storybook/assets/images/misc/150HubBannerMobile_712w.jpg";
import image4 from "../../../../.storybook/assets/images/misc/150Hub_SimpleCard2_600w.jpg";
import video from "../../../../.storybook/assets/video/stock-footage-a-nice-bee-walking-and-foraging-a-pretty-yellow-flower-and-a-little-push-by-another-bee-to-fly-away.mp4";

const data = {
	header: "Carousel Slide",
	description: "<p>Either an image or a video, whatever.</p>",
	video: video,
	images1: image1,
	images2: image2,
	images3: image3,
	images4: image4,
};

const markup = (model, video) => {
	useEffect(videoSlide);
	return html`
		<div class="carousel-slide carousel-slide--video js-carousel-slide">
			${mediaMarkUp(model, video)}
			<!--<div class="carousel-slide__subject">
				<h3 class="carousel-slide__header">${model.header}</h3>
				<div class="carousel-slide__body">
					${model.description}
				</div>
			</div>-->
		</div>
	`;
};

const mediaMarkUp = (model, video) => {
	return video
		? html`
				<div
					class="carousel-slide__media-wrapper carousel-slide__media-wrapper--video"
				>
					<video
						data-video-id="6013996756001"
						class="carousel-slide__video js-carousel-slide__video"
						muted="muted"
						tabindex="-1"
						loop
						src="${model.video}"
					/>
				</div>
		  `
		: html`
				<div class="carousel-slide__media-wrapper">
					<img
						class="lazy carousel-slide__image"
						data-srcset="${model.images1}"
						alt="just a humble alt tag"
					/>
				</div>
		  `;
};

export const CarouselSlide = (video = true) => {
	return markup(data, video);
};
