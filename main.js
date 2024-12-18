import homepage from "./mithril/views/home.js";
import accordions from "./mithril/views/accordions.js";

const root = document.body;

m.route(root, "/", {
	"/": homepage,
	"/accordions": accordions,
});