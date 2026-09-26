export const productSlider = () => {
	const desktopCount = document.querySelector(
		".offers__pagination-count--desktop",
	);
	const mobileCount = document.querySelector(
		".offers__pagination-count--mobile",
	);

	let desktopPage = 1;
	let mobilePage = 1;

	const updateCount = () => {
		if (desktopCount) {
			desktopCount.textContent = `${desktopPage} из 3`;
		}

		if (mobileCount) {
			mobileCount.textContent = `${mobilePage} из 4`;
		}
	};

	const nextCount = () => {
		desktopPage = desktopPage === 3 ? 1 : desktopPage + 1;
		mobilePage = mobilePage === 4 ? 1 : mobilePage + 1;
		updateCount();
	};

	const prevCount = () => {
		desktopPage = desktopPage === 1 ? 3 : desktopPage - 1;
		mobilePage = mobilePage === 1 ? 4 : mobilePage - 1;
		updateCount();
	};

	const swiper = new Swiper(".offers__slider", {
		slidesPerView: "auto",
		centeredSlides: false,
		loop: true,
		spaceBetween: 20,
		breakpoints: {
			0: {
				spaceBetween: 10,
			},
			635: {
				spaceBetween: 20,
			},
		},
		mousewheel: {
			forceToAxis: true,
		},
		navigation: {
			prevEl: ".offers__pagination-button--prev",
			nextEl: ".offers__pagination-button--next",
		},
	});

	swiper.on("slideNextTransitionStart", nextCount);
	swiper.on("slidePrevTransitionStart", prevCount);

	updateCount();
};
