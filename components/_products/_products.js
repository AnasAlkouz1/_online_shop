


import React,{useState,useEffect} from 'react'
import Link from "next/link"
import {Rate} from "antd"
import {HeartTwoTone} from "@ant-design/icons"
import _events from './_events'
import {useSelector} from "react-redux"


export default function _products_view(style,_styledCard,data,_Routelink) {
const [_arraysort,setnewArraySort]=useState(false)
let _data=data;
const {_addtoFavorites,_removefrom_myFavorites}=_events();
const {_my_favorites}=useSelector((state)=>{return state})

const _select_options = [
{value:"_option_v0",label:"Most Popular",className:style._item},
{value:"_option_v1",label:"Lowest Price",className:style._item},
{value:"_option_v2",label:"Highest Price",className:style._item},
];




let _card=_data.map((x,index)=>{
const _Favorite_check=_my_favorites.find((itam)=>itam._id==x._id) ?? null

const _content=(
<>
<Link className={_styledCard._card_link} href={`/_products/${_Routelink}/${x._id}`} >
<div className={`${_styledCard._card } shadow-sm` }>
{/* _card_image */}
<div className={_styledCard._card_image}>
{/* _Img */}
<img onMouseEnter={(e)=>_onmouseenter(x._id)} onMouseLeave={(e)=>_onmouseleave(x._id)} className={_styledCard._image} 
src={x._colors.find((i)=>i._active==true)._image_src}/>

{/* Discount */}
{
x._has_discount==true && (
<div className={`${_styledCard._div_discount_c_i}` } >
Discount {x._discount}%    
</div>
)
}



</div>
{/* _card_image */}


{/* _card_title */}
<div className={_styledCard._card_title}>
<div className={_styledCard._card_t_b}>From {x._brand}</div>
<div className={_styledCard._card_t_n} >{x._name}</div>
<div className={_styledCard._card_t_p_pp}>
<div className={_styledCard._card_t_p} >{x._price} €<span> VAT included</span></div>
{
x._has_discount==true && (
<div className={_styledCard._card_t_p_befor_dis} >Originally<span> {x._originally_price} €</span></div>
)
}
</div>


<div className={_styledCard._card_t_d}><span>PLUS</span> Premium Delivery</div>

</div>
{/* _card_title */}



</div>
</Link>



{_Favorite_check!==null ?(
<div className={_styledCard._card_t_btn} onClick={(e)=>_removefrom_myFavorites(x)}>
<HeartTwoTone className={_styledCard._hert_icon_card} twoToneColor={"#d9000c"}/>
</div>
):(
<div className={_styledCard._card_t_btn} onClick={(e)=>_addtoFavorites(x)}>
<HeartTwoTone className={_styledCard._hert_icon_card} twoToneColor={"#4c596f"}/>
</div>
) }

{/* _ColorS */}
{x._state_color==true ?(

<div className={`${_styledCard._div_colors_c_i} ${_styledCard._is_visibility}`} onMouseEnter={(e)=>_onmouseenter(x._id)} onMouseLeave={(e)=>_onmouseleave(x._id)}>
{x._colors.map((src)=>{
return( src._active == true ? (
<div key={src._image_src}  className={`${_styledCard._div_colors_c_i_c} ${_styledCard._div_colors_c_i_c_isActive}`} >
<img className={_styledCard._div_colors_c_i_img} src={src._image_src}/>
</div>
) : (
<div key={src._image_src}  className={`${_styledCard._div_colors_c_i_c}`} onClick={(e)=>_changeImgSrc(x._id,src._image_src)} >
<img className={_styledCard._div_colors_c_i_img} src={src._image_src}/>
</div>
))


})}



</div>

) : (

<div className={`${_styledCard._div_colors_c_i}`}>
<div className={`${_styledCard._div_colors_c_i_c}`} >
</div>
</div>
)}


</>
)

if(index < 3){
return (
<div key={x._id} className='col-lg-4 col-md-6 col-sm-12 animate__animated animate__fadeInDown animate__fast ' style={{ height: "23rem"}} >
{_content}
</div>
)
}else{
return ( 
<div key={x._id} className='col-lg-4 col-md-6 col-sm-12' style={{ height: "23rem"}} >
{_content}
</div>
)
}

});


let handleChange=(e)=>{
_data=_data.sort((x,y)=>{
if(e=="_option_v0"){
return  y._reviews - x._reviews
}else if(e=="_option_v1"){
return Number(x._price.replace(",","")) - Number(y._price.replace(",",""))
}else if(e=="_option_v2"){
return Number(y._price.replace(",","")) - Number(x._price.replace(",",""))
}else{
return 1;
}

});
setnewArraySort(!_arraysort)
}

const _onmouseenter=(_id)=>{
const _newdate=_data.map((x)=>{
if(x._id===_id){
x._state_color=true;
return x;
}else{
return x;
}

})
_data=_newdate;
setnewArraySort(!_arraysort)
}
const _onmouseleave=(_id)=>{
const _newdate=_data.map((x)=>{
if(x._id===_id){
x._state_color=false;
return x;
}else{
return x;
}

})
_data=_newdate;
setnewArraySort(!_arraysort)


}
const _changeImgSrc=(_id,_src)=>{
const _newdate=_data.map((x)=>{
if(x._id===_id){
x._colors.map((i)=> {
if(i._image_src==_src){
i._active=true;
return i;
}else{
i._active=false;
return i;
}

})
return x;
}else{
return x;
}

})
_data=_newdate;
setnewArraySort(!_arraysort)

}




return {
_select_options:_select_options,
_card:_card,
handleChange:handleChange,
}



}
