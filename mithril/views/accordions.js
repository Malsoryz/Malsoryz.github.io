import { navbar, items } from "../components/components.js";

const accordions = {
	view: () => [
		m(navbar),
		m("main", { class: "p-4" }, [
			m("h1", { class: "text-xl" }, "Kamu sedang Berada di halaman lain"),
		]),
	],
};

export default accordions;