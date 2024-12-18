let navbar = {
	view: () =>
		m("nav", { class: "bg-gray-100 py-3 px-4 flex justify-center items-center border shadow-md" }, [
			m("div", { class: "navbar-logo text-xl font-semibold" }, "ETERNITY"),
			m("div", { class: "w-full" })
		]),
};

let items = {
	view: (vnode) =>
		m("a", { href: "#!/accordions" }, [
			m("div", { class: "p-4 border rounded-md shadow-md bg-gray-100" }, [
				m("h1", { class: "text-xl font-medium" }, vnode.attrs.title),
				m("span", { class: "text-sm" }, vnode.attrs.desc),
			]),
		]),
};

export { navbar, items };