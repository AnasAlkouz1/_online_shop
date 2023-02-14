


import style from "../../style/sass/_products/_index.module.scss"
export default function __select_options(){

const  _options_select_clothes= [
{value:"XS",label:"XS",className:style._item},
{value:"S",label:"S",className:style._item},
{value:"M",label:"M",className:style._item},
{value:"L",label:"L",className:style._item},
];

const  _options_select_shoes_m= [
{value:"40",label:"40",className:style._item},
{value:"42",label:"42",className:style._item},
{value:"44",label:"44",className:style._item},
{value:"46",label:"46",className:style._item},
{value:"48",label:"48",className:style._item},
];

const  _options_select_shoes_w= [
{value:"35",label:"35",className:style._item},
{value:"36",label:"36",className:style._item},
{value:"37",label:"37",className:style._item},
{value:"38",label:"38",className:style._item},
{value:"39",label:"39",className:style._item},
{value:"40",label:"40",className:style._item},
{value:"41",label:"41",className:style._item},
{value:"42",label:"42",className:style._item},
];

return {
_options_select_clothes:_options_select_clothes,
_options_select_shoes_m:_options_select_shoes_m,
_options_select_shoes_w:_options_select_shoes_w,
}



}

