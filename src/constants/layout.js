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

#$video_id$ .${selectors.VIDEO_CONTAINER_CLASS} {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

#$video_id$ .${selectors.CONTROLS_CONTAINER_CLASS} {
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 35px;
	background-color: rgba(0, 0, 0, .7);
}

#$video_id$ .${selectors.CONTROLS_PLAY_BUTTON} {
	position: absolute;
	bottom: 5px;
	left: 10px;
	width: 25px;
	height: 25px;
	color: rgb(255, 255, 255);
	cursor: pointer;
}

#$video_id$ .${selectors.CONTROLS_PLAY_BUTTON}:before {
	content: "\u25B6";
}

#$video_id$ .${selectors.CONTROLS_PAUSE_BUTTON} {
	position: absolute;
	bottom: 5px;
	left: 45px;
	width: 25px;
	height: 25px;
	color: rgb(255, 255, 255);
	cursor: pointer;
}

#$video_id$ .${selectors.CONTROLS_PAUSE_BUTTON}:before {
	content: "\u23F8";
}

#$video_id$ .${selectors.CONTROLS_NEXT_BUTTON} {
	position: absolute;
	bottom: 5px;
	right: 10px;
	width: 25px;
	height: 25px;
	color: rgb(255, 255, 255);
	cursor: pointer;
}

#$video_id$ .${selectors.CONTROLS_NEXT_BUTTON}:before {
	content: "\u23E9";
}

#$video_id$ .${selectors.CONTROLS_PREVIOUS_BUTTON} {
	position: absolute;
	bottom: 5px;
	right: 45px;
	width: 25px;
	height: 25px;
	color: rgb(255, 255, 255);
	cursor: pointer;
}

#$video_id$ .${selectors.CONTROLS_PREVIOUS_BUTTON}:before {
	content: "\u23EA";
}
`;
