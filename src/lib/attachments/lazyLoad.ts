import type { Attachment } from 'svelte/attachments';
const options = {
	root: null,
	rootMargin: '0px',
	threshold: 0
};

export const lazyLoad = (srcset: string): Attachment => {
	return (element) => {
		const image = element as HTMLImageElement;

		const loaded = () => {
			image.style.opacity = '1';
		};

		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				image.srcset = srcset;

				if (image.complete) {
					loaded();
				} else {
					image.addEventListener('load', loaded);
				}
			}
		}, options);

		observer.observe(image);

		return () => {
			observer.disconnect();
			image.removeEventListener('load', loaded);
		};
	};
};
