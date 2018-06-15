/**
 * @constant playIcon
 * @type {string}
 * @description The SVG markup for the "play" button. Taken from
 * the "Feather" collection at https://feathericons.com/.
 */
const playIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-play"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
`;

/**
 * @constant pauseIcon
 * @type {string}
 * @description The SVG markup for the "pause" button. Taken from
 * the "Feather" collection at https://feathericons.com/.
 */
const pauseIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-pause"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
`;

/**
 * @constant previousIcon
 * @type {string}
 * @description The SVG markup for the "previous" button. Taken from
 * the "Feather" collection at https://feathericons.com/.
 */
const previousIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevrons-left"><polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline></svg>
`;

/**
 * @constant nextIcon
 * @type {string}
 * @description The SVG markup for the "next" button. Taken from
 * the "Feather" collection at https://feathericons.com/.
 */
const nextIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevrons-right"><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></svg>
`;

/**
 * @constant loadingIcon
 * @type {string}
 * @description The SVG markup for the loading icon. Taken from
 * Sam Herbet's collection here: http://samherbert.net/svg-loaders/
 */
const loadingIcon = `
<svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity=".5" cx="18" cy="18" r="18"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"/></path></g></g></svg>
`;

export {
	playIcon,
	pauseIcon,
	previousIcon,
	nextIcon,
	loadingIcon
};
