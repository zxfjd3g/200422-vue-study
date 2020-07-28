import fn from './other'
import logo from './assets/img/logo.png'
import './assets/css/my.css'

const image = new Image()
image.src = logo
document.body.appendChild(image)


console.log('Hello Webpack!')
document.getElementById('root').innerHTML = '<h1>Hello333333</h1>'
fn()