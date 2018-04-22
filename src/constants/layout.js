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
	height: 30px;
	background-color: rgba(0, 0, 0, .7);
}
`;
