/**
 * @constant defaultStyles
 * @type {string}
 * @description The default styles for the video player.
 */

import selectors from './selectors.js';
import {
	playIcon,
	pauseIcon,
	previousIcon,
	nextIcon,
	loadingIcon
} from './icons.js';

export default `
#$video_id$ .${selectors.CONTROLS_PLAY_BUTTON}:before {
	background-image: url("data:image/svg+xml;base64,${btoa(playIcon)}");
}

#$video_id$ .${selectors.CONTROLS_PAUSE_BUTTON}:before {
	background-image: url("data:image/svg+xml;base64,${btoa(pauseIcon)}");
}

#$video_id$ .${selectors.CONTROLS_NEXT_BUTTON}:before {
	background-image: url("data:image/svg+xml;base64,${btoa(nextIcon)}");
}

#$video_id$ .${selectors.CONTROLS_PREVIOUS_BUTTON}:before {
	background-image: url("data:image/svg+xml;base64,${btoa(previousIcon)}");
}

#$video_id$ .${selectors.LOADING_SCREEN_CLASS}:before {
	background-image: url("data:image/svg+xml;base64,${btoa(loadingIcon)}");
}

#$video_id$ .${selectors.CONTROLS_VOLUME_SLIDER}::-webkit-slider-runnable-track {
	width: 100%;
	height: 4px;
	cursor: pointer;
	background: rgba(255, 255, 255, .4);
}

#$video_id$ .${selectors.CONTROLS_VOLUME_SLIDER}::-webkit-slider-thumb {
	width: 11px;
	height: 11px;
	border: none;
	border-radius: 50%;
	background: #ffffff;
	transform: translateY(-3px);
	-webkit-transform: translateY(-3px);
}
`;
