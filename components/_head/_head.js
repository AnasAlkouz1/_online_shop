
import  Head from "next/head";
import {useRouter} from "next/router";
import react,{useState,useEffect} from "react"
import { _set_MyFavorites_localStorage } from "../_redux/_actions/_actions";
import {useDispatch} from "react-redux"
 

export default function _Head() {
const [_title,setnewtitle]=useState("Shop.Com")
const {pathname}=useRouter();
const _disPatch=useDispatch();
const _PathsRouters=[
{_name:"Men' Jackets",_route:"/_products/men/_jackets_m"},
{_name:"Men' Jackets",_route:"/_products/men/_shoes_m"},
{_name:"Men' Jackets",_route:"/_products/men/_watches_m"},
{_name:"Women' Jackets",_route:"/_products/women/_jackets_w"},
{_name:"Women' Shoes",_route:"/_products/women/_shoes_w"},
{_name:"Women' Watches",_route:"/_products/women/_watches_w"},
]
useEffect(()=>{
let _newTitle=_PathsRouters.find((x)=>x._route==pathname) || {_name:"Shop.Com"}
setnewtitle(_newTitle._name)
},[pathname])


useEffect(()=>{
_disPatch({type:"__my_favorites_localStorage"})
_disPatch({type:"__my_bag_localStorage"})
},[])



return (
<>
<Head>
<title>{_title}</title>
<link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
<link rel="icon" type="image/png" href="/favicon.png"/>
</Head>   
</>
)
}
