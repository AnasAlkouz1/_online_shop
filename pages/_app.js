
import react,{useEffect,useState} from "react"
import "antd/dist/reset.css"
import "bootstrap/dist/css/bootstrap-grid.css"
import "../style/sass/main.scss"
import "bootstrap/dist/css/bootstrap-grid.min.css"
import "bootstrap/dist/css/bootstrap-utilities.min.css"
import style from "../style/sass/navbar.module.scss"
import {Provider} from "react-redux"
import { _store } from "../components/_redux/_index"
import NavBar from "../components/_navBar/NavBar"
import _buttom_container from "../components/_buttom_container/_buttom_container"
import"../style/css/_animate/animate.min.css"
import _Head from "../components/_head/_head"




export default function App({ Component, pageProps }) {


return (
<>
<Provider store={_store}>
<_Head/>
<NavBar _style={style}/>
<div id='_div_v0'>
<Component {...pageProps} />
</div>
<div id='_div_v1'>
<_buttom_container/>
</div>
</Provider>
</>
)
}
