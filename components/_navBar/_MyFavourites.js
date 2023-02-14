import react,{useState} from 'react';
import { Dropdown, Space} from 'antd';
import {useSelector} from "react-redux"
import {HeartTwoTone} from "@ant-design/icons"
import Link from "next/link";

export const _Favourites_= ({_style,_length}) => {
const [open, setOpen] = useState(false);
const Myfavorites=useSelector((state)=>{return state._my_favorites})
const handleOnClick = () => {
setOpen(!open);
};
const _itams=Myfavorites.map((itam)=>{
return (
<Link href={itam._url} key={itam._url}>

<div className={_style._div_itam_favourites}>
<div><img src={itam._imgsrc}/></div>
<div className={_style._div_itam_favourites_dis}>
<div  className={_style._div_itam_favourites_dis_br}>{itam._brand}</div>
<div className={_style._div_itam_favourites_dis_na}>{itam._name}</div>
<div className={_style._div_itam_favourites_dis_pr}>{itam._price} €<span> VAT included</span></div>
{itam._has_discount ==true && (
<>
<div className={_style._div_itam_favourites_dis_orP}>Originally<span>{itam._originally_price} €</span></div>
<div className={_style._div_itam_favourites_dis_h_dis}>{itam._discount}%</div>
</>
)}


</div>

</div>

</Link>
)
})


const items = [
{
label:(
<div className={_style._div_favourites_content}>
{!Myfavorites.length ? (
<div className={_style._div_brandIs_emF}><span className={_style.span_rEpSF}>0</span><HeartTwoTone className={_style._Icon_brandShop_l_ff} twoToneColor={'#4c596f'} /></div>
):(
<>
{_itams}
</>
) }
</div>
),

},
];
return (
<Dropdown overlayClassName={_style._dropdown_f}
menu={{
items,
onClick:handleOnClick,
}}
onOpenChange={handleOnClick}
trigger={["click"]}
>
<li onClick={(e) => e.preventDefault()}>
{open==false && (<div className={_style._f_num} >{_length}</div>)}
<Space>
<div className={open==true ? `${_style._divfavorites_} ${_style._Icon_favoritesIsOpen}` : _style._divfavorites_ }  >
<HeartTwoTone twoToneColor={'#4c596f'}/>
</div>
</Space>
</li>




</Dropdown>
);
}; 