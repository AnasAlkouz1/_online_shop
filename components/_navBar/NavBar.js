
import react,{useState} from 'react';
import {useSelector} from "react-redux"
import {ShoppingTwoTone,DownOutlined,UpOutlined,HeartTwoTone} from "@ant-design/icons"
import { Dropdown, Space} from 'antd';
import Link from "next/link";
import {useRouter} from "next/router"
import { _MyBag } from './_MyBag';
import { _Favourites_ } from './_MyFavourites';




const _items_one= ({_link,_isActive,_li_isActive}) => {
const [open, setOpen] = useState(false);
const handleOnClick = () => {
setOpen(!open);
};
const items = [
{
label:(<Link href='/_products/men/_jackets_m'>Men' Jackets</Link>),
key: '1',
className:`${_link.pathname.split("/")[3]=="_jackets_m" && _li_isActive} `
},
{
label:(<Link href='/_products/men/_shoes_m'>Men' Shoes</Link>),
key: '2',
className:`${_link.pathname.split("/")[3]=="_shoes_m" && _li_isActive} `
},
{
label:(<Link href='/_products/men/_watches_m'>Men' Watches</Link>),
key: '3',
className:`${_link.pathname.split("/")[3]=="_watches_m" && _li_isActive} `
},
];
return (
<Dropdown overlayClassName="_ant_dropdown_menu" className={`${_link.pathname.split("/")[2]=="men" && _isActive} `}
menu={{
items,
onClick:handleOnClick,
}}
onOpenChange={handleOnClick}
trigger={["click"]}
// open={open}
>
<li onClick={(e) => e.preventDefault()}>
<Space>
Men
{open==false ? <DownOutlined /> : <UpOutlined style={{color:'deepskyblue'}} />   }
</Space>
</li>
</Dropdown>
);
}; 
const _items_two= ({_link,_isActive,_li_isActive}) => {
const [open, setOpen] = useState(false);
const handleOnClick = () => {
setOpen(!open);
};
const items = [
{
label:(<Link href='/_products/women/_jackets_w'>Women' Jackets</Link>),
key: '1',
className:`${_link.pathname.split("/")[3]=="_jackets_w" && _li_isActive} `
},
{
label:(<Link href='/_products/women/_shoes_w'>Women' Shoes</Link>),
key: '2',
className:`${_link.pathname.split("/")[3]=="_shoes_w" && _li_isActive} `
},
{
label:(<Link href='/_products/women/_watches_w'>Women' Watches</Link>),
key: '3',
className:`${_link.pathname.split("/")[3]=="_watches_w" && _li_isActive} `
},
];
return (
<Dropdown overlayClassName="_ant_dropdown_menu" className={`${_link.pathname.split("/")[2]=="women" && _isActive}`}
menu={{
items,
onClick:handleOnClick,
}}
onOpenChange={handleOnClick}
trigger={["click"]}
// open={open}
>
<li onClick={(e) => e.preventDefault()}>
<Space>
Women
{open==false ? <DownOutlined /> : <UpOutlined style={{color:'deepskyblue'}} />   }
</Space>
</li>
</Dropdown>
);
}; 

const NavBar=({_style})=>{
const _LinkRoute=useRouter();
const {_my_bag,_my_favorites}=useSelector((state)=>{return state})


return(
<>
<div className={_style.nav_container}>
<nav>
<ul className={_style._ul_v0}>
<li><ShoppingTwoTone className={_style._Icon_brandShop} twoToneColor={'#4c596f'} /></li>
<li className={`${_LinkRoute.pathname=="/" && _style._isActive}`} ><Link className={_style._alink} href='/'>Homepage</Link></li>
<_items_one _li_isActive={_style.li_isActive} _isActive={_style._isActive} _link={_LinkRoute}/>
<_items_two _li_isActive={_style.li_isActive} _isActive={_style._isActive} _link={_LinkRoute}/>
</ul>
<ul className='_ul_v1'>
<_Favourites_ _style={_style} _length={_my_favorites.length}/>
<_MyBag _style={_style} _length={_my_bag.length} />
</ul>

</nav>
</div>
</>
)
} 


export default NavBar;
