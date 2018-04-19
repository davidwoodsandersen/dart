export default class Video {
	constructor(props) {
		this.id = props.id;
		this.parent = props.parent;
		this.source = props.source;

		this.element = document.createElement('video');

		if (typeof this.attributes === 'object') {
			for (var attr in props.attributes) {
				this.element.setAttribute(attr, props.attributes[attr]);
			}
		}
	}

	init() {
		try {
			this.parent.appendChild(this.element);
		}
		catch (e) {
			throw new Error(e);
		}
	}
}