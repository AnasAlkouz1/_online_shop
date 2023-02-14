

import react,{useState} from 'react';
import {useSelector} from "react-redux"
import { Drawer} from 'antd';
import {CloseOutlined,DeleteTwoTone,ShoppingTwoTone} from "@ant-design/icons"
import {FaCcPaypal,FaCcVisa} from "react-icons/fa"
import events from "../_products/_events"

const Icon_Cart = ({ size = 58, strokeWidth = 1.5, color = "#4c596f" || color , ...props }) => (
<svg
width={size}
height={size}
fill="none"
stroke={color}
strokeLinecap="round"
strokeLinejoin="round"
strokeWidth={strokeWidth}
viewBox="0 0 24 24"
xmlns="http://www.w3.org/2000/svg"
{...props}
>
<path d="M5 7h13.79a2 2 0 0 1 1.99 2.199l-.6 6A2 2 0 0 1 18.19 17H8.64a2 2 0 0 1-1.962-1.608L5 7z" />
<path d="m5 7-.81-3.243A1 1 0 0 0 3.22 3H2" />
<path d="M8 21h2" />
<path d="M16 21h2" />
</svg>
);


export const _MyBag = ({_style,_length}) => {
const [open, setOpen] = useState(false);
const MyBag=useSelector((state)=>{return state._my_bag})
const {_removefrom_myBag}=events()
const _MyBag=()=>{
let _FP=0;
const _itam=MyBag.map((itams)=>{
return(
<div className={`${_style._div_itam_bag} shadow-sm`} key={itams._id}>
<div><img src={itams._imgsrc}/></div>
<div>
<div className={_style._div_itam_bag_dis_f}>{itams._brand}</div>
<div className={_style._div_itam_bag_dis_t}>{itams._name}</div>
<div className={_style._div_itam_bag_dis_p}>{itams._price} €<span> VAT included</span></div>
<div className={_style._div_itam_bag_dis_s}>Size :<span>( { itams._size =="" ? "One Size"  : itams._size } )</span></div>
<div className={_style._div_itam_bag_dis_r_f_b} onClick={(e)=>_removefrom_myBag(itams)} ><DeleteTwoTone twoToneColor={"#ff7875"}/></div>

</div>


</div>
)
});
const _invoice=MyBag.map((itams)=>{
return(

<div className={_style._div_inv_itam_bag} key={itams._id}>
<div>{itams._name}</div>
{itams._has_discount==true && (
<div>
<div>Discount  {itams._discount}%</div>
<span>Originally</span> 
<span>{itams._originally_price} €</span>
</div>
)}
<div>{itams._price} €</div>
</div>

)
});
const _FullPrice=MyBag.map((itams)=>{
return  _FP+=Number(itams._price.replace(",","."))
});
return {_itam:_itam,_invoice:_invoice,_FullPrice:_FP}
}



const showDrawer = () => {
setOpen(true);
};
const onClose = () => {
setOpen(false);
};
return (
<>
<li>
{open==false && (<div className={_style._bag_num} >{_length}</div>)}

<Icon_Cart id='_myBag' onClick={showDrawer} className={open==true ?`${_style._Icon_bag} ${_style._Icon_bagIsOpen}` : _style._Icon_bag }/>
</li>



<Drawer className={_style.drawer_open_d} 
size={"default"} 
title={<div>My Bag</div>} 
closeIcon={<CloseOutlined style={{color:"#33ccff"}}/>} 
placement="right" onClose={onClose} open={open}>
<div className={_style._div_bag_content}>
{MyBag.length  ? (
<>
{_MyBag()._itam}
<div className={_style._div_inv_bag} >
{_MyBag()._invoice}
</div>
</>
) : (
<div className={_style._div_brandIs_em}><span className={_style.span_rEpS}>0</span><ShoppingTwoTone className={_style._Icon_brandShop_l_bag} twoToneColor={'#4c596f'} /></div>
) }




<div className={_style._div_cP_bag}><span>Full Price</span> <span>{_MyBag()._FullPrice.toString().replace(".",",")} €</span></div>
<div className={_style._div_PB_bag}>
<div><FaCcPaypal/><span>Payment With Paypal</span></div>
<div><FaCcVisa/><span>Payment With Visa</span> </div>

</div>




</div>
</Drawer>
</>
);
};