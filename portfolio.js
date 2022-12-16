const buttons = []
const tabs = []

function get(s){
    return document.querySelector(s);
}

function navbutton(button) {
    console.log(button)
    buttons.push(button.parentElement)
    tabs.push(get("."+button.getAttribute("name")))

    button.addEventListener("click",() => {
        for (let v of buttons.concat(tabs)) {
            v.setAttribute("aria-selected",'false')
        }

        button.parentElement.setAttribute("aria-selected",'true')
        get("."+button.getAttribute("name")).setAttribute("aria-selected",'true')
    })
}

for (let v of [get('button[name="Payment"]'),get('button[name="Contact"]'), get('button[name="Availability"]')]) {
    navbutton(v)
}

get("#menu").addEventListener('click', () => {
    get("#menu").setAttribute("shown",'false')
    get("#headnav").setAttribute("shown","true")
})

get('#close').addEventListener('click', () => {
    get("#menu").setAttribute("shown",'true')
    get("#headnav").setAttribute("shown","false")
})

console.log(screen.width)
