import html from "../../../.storybook/helpers/html";
import { fullWidthOrientationResponsive } from "../image-container/image-container.stories.js";
import greekHallImage1x1 from "../../../.storybook/assets/images/greek-hall/1x1";
import greekHallImage16x9 from "../../../.storybook/assets/images/greek-hall/16x9";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
// import { TabControls } from "../tab-controls/tab-controls.stories";
import { useEffect } from "@storybook/client-api";
import "./exhibition-tabs/exhibition-tabs.scss";
import exhibitionTabs from "./exhibition-tabs/exhibition-tabs.js";

export default {
	title: "Exhibition Detail Page",
	decorators: [withKnobs],
};

const building = {
	name: "The Met Fifth Avenue",
	path: "/visit/the-met-fifth-avenue",
};

const entryType = {
	name: "Included",
	displayText: "Entry Included With Museum Admission",
};

const exhibition = {
	heroImage: {
		portrait: greekHallImage1x1,
		landscape: greekHallImage16x9,
	},
	title: "Sahel: Art and Empires on The Shores of the Sahara",
	tabs: [
		{ name: "Overview", id: "overview" },
		{ name: "Visiting Guide", id: "visiting-guide" },
		{ name: "Objects on View", id: "objects-on-view" },
		{ name: "Extra Tab 1", id: "extra-1" },
		{ name: "Extra Tab 2", id: "extra-2" },
	],
	status: {
		message: "Now on View at",
	},
	building: building,
	entryType: entryType,
	timing: {
		justOpened: false,
		closingSoon: true,
	},
	detailPage: {
		header: {
			cta1: {
				text: "Buy Tickets",
				link: "/tickets",
			},
			cta2: {
				text: "Plan Your Visit",
				link: "/visit",
			},
		},
	},
};

const ExhibitionStatusModule = () => {
	return html`
		<div class="edp-header__status_module">
			<div class="edp-header__location">
				${exhibition.status.message} <a href="/${exhibition.building.path}">${exhibition.building.name}</a>
			</div>
			<div class="edp-header__display-text">${exhibition.entryType.displayText}</div>
			${exhibition.timing.closingSoon &&
			html`
				<div class="exhibition-tag exhibition-tag--closing-soon edp-badge is-color">
					<span class="exhibition-tag__text">Closing soon</span>
				</div>
			`}
		</div>
	`;
};

const demoSections = () => {
	return exhibition.tabs
		.map(
			(tab) => html`
				<section
					class="exhibition-section js-exhibition-section"
					data-name="${tab.id}"
				>
					<h1>${tab.name} Section</h1>
				</section>
			`
		)
		.join("");
};

const ExhibitionDetailPage = () => {
	useEffect(exhibitionTabs);
	return html`<div>
		${fullWidthOrientationResponsive(exhibition.heroImage)}
		<header class="edp-header">
			<div class="edp-header__eyebrow">EXHIBITION</div>
			<div class="edp-header__row edp-header__row--top">
				<div>
					<h2>${exhibition.title}</h2>
				</div>
				${ExhibitionStatusModule()}
			</div>

			<div class="edp-header__row edp-header__row--bottom">
				<div class="edp-header__cta-container">
					<a
						href="${exhibition.detailPage.header.cta1.link}"
						class="button primary-button
								primary-button--x-small
								primary-button--filled
								edp-header__cta"
					>
						${exhibition.detailPage.header.cta1.text}
					</a>
					<a
						href="${exhibition.detailPage.header.cta2.link}"
						class="button tertiary-button edp-header__cta"
					>
						${exhibition.detailPage.header.cta2.text}
					</a>
				</div>
				<div class="edp-tabs__container">
					<div class="edp-tabs js-edp-tabs">
						${exhibition.tabs
							.map(
								(tab) => html`
									<a href="${tab.id}" class="js-edp-tabs__tab edp-tabs__tab"
										>${tab.name}</a
									>
								`
							)
							.join("")}
					</div>
				</div>
			</div>
		</header>

		${demoSections()}
	</div>`;
};

export { ExhibitionDetailPage };
