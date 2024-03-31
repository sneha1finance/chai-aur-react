const mainContainer = document.querySelector('#root')
const reactElement = {
    type:'a',
    props:{
        href : "https://google.com",
        target:"_blank",

    },
    children:"Click me to visit google"
}


// function customRender(reactElement,container){
//     const domElememt = document.createElement(reactElement.type)
//     domElememt.innerHTML = reactElement.children
//     domElememt.setAttribute('href',reactElement.props.href)
//     domElememt.setAttribute('target',reactElement.props.target)
//     container.appendChild(domElememt)
// }

// we do by for loop

function customRender(reactElement,container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if(prop === 'children') continue
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)
}

customRender(reactElement , mainContainer)