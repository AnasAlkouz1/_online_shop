
import react,{useState,useRef} from "react"
import { Collapse,Rate } from 'antd';
import style from "../../style/sass/_products/_index.module.scss"
import {HeartTwoTone} from "@ant-design/icons"
import {Select} from "antd"
import _events from "./_events";
import { _Delivery_Icon,_Gift_Icon,_ReturnBack_Icon,Bag_Icon,Bag_Icon_s } from "./_Icon";
import {useSelector} from "react-redux"


const _collapse=()=>{
const { Panel } = Collapse;

const onChange = (key) => {
console.log(key)
};

const text = `😄`


return(
<Collapse onChange={onChange} expandIconPosition={"end"}>
<Panel header="Material & care" key="1">
<p>{text}</p>
</Panel>
<Panel header="Details" key="2">
<p>{text}</p>
</Panel>
<Panel header="Size & fit" key="3">
<p>
Anailable in several sizes
</p>
</Panel>
</Collapse>

)






}



export default function _Page_id({data,_select_options,_type}) {
let _data=data;
const [_arrayKey,_setNewarrayKey]=useState(false);
const {_addtobag,_addtoFavorites,handleChange,_error,_removefrom_myFavorites}=_events(_type);
const {_my_favorites,_my_bag}=useSelector((state)=>{return state})
const _Favorite_check=_my_favorites.find((itam)=>itam._id==_data[0]._id) ?? null
const _Bag_check=_my_bag.find((itam)=>itam._id==_data[0]._id) ?? null

let _changeImgSrc_fromPage_id=(_src)=>{

const _newdate=_data.map((x)=>{

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


})
_data=_newdate;
_setNewarrayKey(!_arrayKey)


}



return (
<>
<div className={style._main_container_v1}>
<div className='container'>
<div className="row">

{/* {image_container} */}
<div className='col-lg-5 col-md-6 col-sm-12'>
<div  className={`${style.image_container} ${style.p_sticky}`} >
{_data[0]._has_discount==true && (<div className={style._discount}>Discount {_data[0]._discount}%</div>)}
{_Bag_check!==null && (
_data[0]._colors.find((i)=>i._active==true)._image_src==_Bag_check._imgsrc && (
<div className={style._inBag}><Bag_Icon/></div>
) 
)}
<img src={_data[0]._colors.find((i)=>i._active==true)._image_src} />
</div>



</div>
{/* {image_container} */}



{/* {text_container} */}
<div className='col-lg-7 col-md-6 col-sm-12'>
<div className={`${style._descriptions_container}`}>
<div className={style.descriptions__b}>From {_data[0]._brand}</div>
<div className={style.descriptions__n}>{_data[0]._name}</div>
<div className={style.descriptions__p}>
<div className={style.descriptions__p_v0}>{_data[0]._price} €<span> VAT included</span></div>
{_data[0]._has_discount==true && (    <div className={style.descriptions__p_v1}>Originally<span> {_data[0]._originally_price} €</span></div>)}












</div>
<div className={style.descriptions__c}>
<span>Colour:</span>
<div className={style.descriptions__c_images}>
{
_data[0]._colors.map((src)=>{
return( src._active == true ? (
_Bag_check!==null ? (
_Bag_check._imgsrc==src._image_src ? (
<div key={src._image_src} className={`${style.descriptions__c_images_ch} ${style._inBagImg}`}>
<img src={src._image_src}/>
</div>
):(
<div key={src._image_src} className={`${style.descriptions__c_images_ch} ${style.descriptions__c_images_ch_isActive}`}>
<img src={src._image_src}/>
</div>
)
):(
<div key={src._image_src} className={`${style.descriptions__c_images_ch} ${style.descriptions__c_images_ch_isActive}`}>
<img src={src._image_src}/>
</div>
)


) : (
<div key={src._image_src} className={style.descriptions__c_images_ch}  onClick={(e)=>_changeImgSrc_fromPage_id(src._image_src)} >
<img src={src._image_src}/>
{(_Bag_check!==null && _Bag_check._imgsrc == src._image_src ) && (<div  className={style._inBagImg_v}><Bag_Icon_s/></div>)  }
</div>
))


})



}
</div>
</div>
<div className={style.descriptions__si_select} >
{_error==true && (<div className={style._error} >Please Choose your size</div>) }
{_type=="Watches" ? (

<Select
placeholder="One Size"
size="large"
onChange={handleChange}
style={{
width: "100%",
}}
options={_select_options}
disabled
/>
):(
<>
{_Bag_check!==null ? (
<Select
placeholder={_Bag_check._size}
size="large"
onChange={handleChange}
style={{
width: "100%",
}}
options={_select_options}
disabled
/>
):(
<Select
placeholder="Choose your size"
size="large"
onChange={handleChange}
style={{
width: "100%",
}}
options={_select_options}
/>

) }
</>

) }

</div>
<div className={style.descriptions__btns}>
{_Bag_check!==null  ? (
<div className={`text-truncate ${style._descriptions_btn_add_goTopay} `} >This {_type} is in your Bag. Please go To checkout</div>
):(
<div className={style._descriptions_btn_add_tobag} onClick={(e)=>_addtobag(_data[0])}>Add to bag</div>
) }

{_Favorite_check!==null ?(
<div className={style._descriptions_btn_hert_icon_} onClick={(e)=>_removefrom_myFavorites(_data[0])}>
<HeartTwoTone  twoToneColor={"#d9000c"}/>
</div>
):(
<div className={style._descriptions_btn_hert_icon_} onClick={(e)=>_addtoFavorites(_data[0])}>
<HeartTwoTone  twoToneColor={"#4c596f"}/>
</div>
) }



</div>
<div className={style.descriptions__i}>
<div className={`${style.descriptions__i_c} ${style._h100} ${style._border}`}>
<div className={style.descriptions__i_t} >
<_Delivery_Icon/>
<div>1-2 Working days</div>
<div>Premium Delivery</div>
</div>

<div className={style.descriptions__i_t_v1} >
<div>3,99 €</div>
<div>Free with <span>PLUS</span></div>
</div>


</div>
<div className={`${style.descriptions__i_c} ${style._h100} ${style._border}`}>

<div className={style.descriptions__i_t} >
<_Delivery_Icon/>
<div>3-6 Working days</div>
<div>Standard Delivery</div>
</div>

<div className={style.descriptions__i_t_v1} >
<div className={style._f421mb}>Free</div>
</div>

</div>



<div className={`${style.descriptions__i_c} ${style._h50}  ${style._border}`}>
<div className={style.descriptions__g_r}>
<_Gift_Icon/>
<div>Free delivery and free returns</div>
</div>


</div>
<div className={`${style.descriptions__i_c} ${style._h50}`}>

<div className={style.descriptions__g_r}>
<_ReturnBack_Icon/>
<div>364 day return policy</div>
</div>

</div>


</div>
<div className={style.descriptions__col}>
<_collapse/>
</div>
<div className={style.descriptions__ret}>
<div>Reviews (5)</div>
<div>
<div>{_data[0]._reviews}/5</div>
<Rate disabled defaultValue={_data[0]._reviews}/>
</div>

</div>


</div>


</div>
{/* {text_container} */}



</div>
</div>
</div>
</>
)
}
