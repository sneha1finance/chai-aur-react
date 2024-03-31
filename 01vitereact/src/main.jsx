import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return(
    <div>
      <h1>Hello , chai aur code custom</h1>
    </div>
  )
}
// const reactElement = {
//   type:'a',
//   props:{
//       href : "https://google.com",
//       target:"_blank",

//   },
//   children:"Click me to visit google"
// }
const  anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const username = "chai aur code"
const reactElement = React.createElement(
'a',
{href:'https://google.com',target:'_blank'},
'Click me to visit google',
username
)


ReactDOM.createRoot(document.getElementById('root')).render(
//  <App/>
    // <MyApp/> // starting letter should be greater
 reactElement
)
