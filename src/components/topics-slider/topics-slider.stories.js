import html from "../../../.storybook/helpers/html";
import { TopicCard } from "./topic-card.stories.js";
import carousel, { flickityDefaults } from "../carousel/carousel.js";
import { useEffect } from "@storybook/client-api";
import { object, withKnobs } from "@storybook/addon-knobs";

export default { title: "Components/Topics Slider", decorators: [withKnobs] };

const TopicsSlider = () => {
	useEffect(()=> {
		carousel(object("Flickity Settings", flickityDefaults));
	});
	return html`
	<section class="topics-slider">
		<div class="topics-slider__header">
			<h3>Heading</h3>
		</div>
		<div class="topics-slider-list js-carousel carousel">
			${TopicCard()} ${TopicCard()} ${TopicCard()} ${TopicCard()}
			${TopicCard()} ${TopicCard()}
		</div>
	</section>`;
};

export { TopicsSlider };
