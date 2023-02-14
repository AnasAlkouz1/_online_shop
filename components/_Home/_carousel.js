

import { Carousel } from 'antd';
import {ArrowRightOutlined} from "@ant-design/icons"
import styled from "styled-components"
import style from "../../style/sass/_Home/carousel.module.scss"
import Image from "next/image"
import Link from "next/link"




const _carousel_itam=styled.div`
background-color:${(props)=>props._backgroundcolor };
color:${(props)=>props._color };
`

const Image_props_v0={
width:"600",
height:"350",
className:style.Image_v_all,
}
const _Carousel=() =>{

const __carousel_children=[

{
_Image_src:'/_carousel/5e164c4a3df84ba2b9f4ac873922f447_v1.webp',
_backgroundcolor:'#efeff0',
_color:"black",
carousel_description:["Shop the drop","Newest releases for you sneakerheads","Shop now"],
_link_Route:"/_products/women/_shoes_w"
},

{
_Image_src:'/_carousel/7cd44f04f3b345cd84eb2aaccf12347b.webp',
_backgroundcolor:'#f2a03c',
_color:"black",
carousel_description:["Shop the drop","Newest releases for you sneakerheads","Shop now"],
_link_Route:"/_products/men/_shoes_m"
},



].map((x)=>{
return (
<_carousel_itam key={Math.random().toString(36)}  _backgroundcolor={x._backgroundcolor} _color={x._color}  className={`${style._carousel_itams} ${style._v0}`}>
<div><Image src={x._Image_src} alt={x._Image_src} {...Image_props_v0}/></div>   
<div className={style._div_h_t}>
<div>{x.carousel_description[0]}</div>
<div>{x.carousel_description[1]}</div>
<Link href={x._link_Route}>
{x.carousel_description[2]}
<ArrowRightOutlined/>
</Link>
</div>
</_carousel_itam>
) 
})

return (
<Carousel dots={false} autoplay>
{__carousel_children}
</Carousel>
)
}; 
export default _Carousel;
