import HeaderFixed from "./header.js";
import BurgerMenu from "./burger.js";
import { productSlider } from "./product-slider.js";

try {
	const headerFixed = new HeaderFixed({
		HEADER: "header",
		HEADER_FIXED: "header--fixed",
	});

	new BurgerMenu(
		{
			BURGER: "header__menu",
			BURGER_OPEN: "header__menu--open",
			HEADER_MENU: "header__nav",
			HEADER_MENU_OPEN: "header__nav--open",
			lABEL: {
				OPEN: "Открыть меню",
				CLOSE: "Закрыть меню",
			},
			PAGE_BODY: "page__body",
			PAGE_BODY_NO_SCROLL: "page__body--no-scroll",
			MENU_LINK: "header__link",
			BREAKPOINT: 1200,
			MAIN: "main",
		},
		headerFixed,
	);

	productSlider();
} catch (error) {
	console.error(error);
}
