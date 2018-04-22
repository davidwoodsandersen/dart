/**
 * @constant layout
 * @type {string}
 * @description The CSS defaults for the video player.
 */

import selectors from './selectors.js';

export default `
#$video_id$ {
	position: relative;
	display: inline-block;
	background-color: rgb(0, 0, 0);
}

#$video_id$ .${selectors.VIDEO_CONTAINER_CLASS},
#$video_id$ .${selectors.LOADING_SCREEN_CLASS} {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

#$video_id$ .${selectors.LOADING_SCREEN_CLASS} {
	display: none;
	color: rgb(255, 255, 255);
}

#$video_id$ .${selectors.LOADING_SCREEN_CLASS} > svg {
	position: absolute;
	top: 50%;
	left: 50%;
	-webkit-transform: translateX(-50%) translateY(-50%) scale(1.5);
	transform: translateX(-50%) translateY(-50%) scale(1.5);
}

#$video_id$ .${selectors.CONTROLS_CONTAINER_CLASS} {
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 50px;
	background-image: linear-gradient(
		to top,
		rgba(0, 0, 0, 1),
		rgba(0, 0, 0, 0)
	);
}

#$video_id$ .${selectors.CONTROLS_BUTTON_CLASS} {
	position: absolute;
	bottom: 10px;
	width: 25px;
	height: 25px;
	color: rgb(255, 255, 255);
	cursor: pointer;
	-webkit-transition: transform .3s, bottom .3s;
	transition: transform .3s, bottom .3s;
}

#$video_id$ .${selectors.CONTROLS_BUTTON_CLASS}:hover {
	-webkit-transform: scale(1.2);
	transform: scale(1.2);
}

#$video_id$ .${selectors.CONTROLS_BUTTON_CLASS}:active {
	bottom: 8px;
}

#$video_id$ .${selectors.CONTROLS_PLAY_BUTTON} {
	left: 10px;
}

#$video_id$ .${selectors.CONTROLS_PAUSE_BUTTON} {
	left: 45px;
}

#$video_id$ .${selectors.CONTROLS_NEXT_BUTTON} {
	right: 10px;
}

#$video_id$ .${selectors.CONTROLS_PREVIOUS_BUTTON} {
	right: 45px;
}
`;
