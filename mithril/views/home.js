import {navbar,items} from "../components/components.js"

const homepage = {
    view: () => [
        m(navbar),
        m("main",{"class":"p-4"},[
            m(items,{title: "Accordions",desc: "sebuah komponen untuk menampilkan informasi"})
        ])
    ]
}

export default homepage;