





export const _data=[
{
_id:100000021,
_brand:"Casio",
_name:"Watch",
_originally_price:"49.95",
_discount:0,
_has_discount:false, 
get _price(){
return  (Number(this._originally_price) - ( Number(this._originally_price)  * this._discount / 100)).toFixed(2).replace(".",",")
},
_reviews:5,
_state_color:false,
_colors:[
{_active:true,_image_src:"/_app_data/_men/_w/6e3cd9f9cd5b4e2c8534b3668bd1071e_v0_v0.webp"},
{_active:false,_image_src:"/_app_data/_men/_w/15796e1aa0fc4ce784827b78bc6c21e6_v0_v1.webp"},
],
},
{
_id:100000022,
_brand:"Lacoste",
_name:"LOGO - Watch",
_originally_price:"55.95",
_discount:5,
_has_discount:true, 
get _price(){
return  (Number(this._originally_price) - ( Number(this._originally_price)  * this._discount / 100)).toFixed(2).replace(".",",")
},

_reviews:4,
_state_color:false,
_colors:[
{_active:true,_image_src:"/_app_data/_men/_w/b0cce240b0df43a999e465bab5b913eb_v1_v0.webp"},
{_active:false,_image_src:"/_app_data/_men/_w/fa0a021e7f75452f86e1b58471f16281_v1_v1.webp"},
],
},
{
_id:100000023,
_brand:"G-SHOCK",
_name:"METAL SERIES GM-2100 UNISEX - Chronograph watch",
_originally_price:"319.50",
_discount:15,
_has_discount:true, 
get _price(){
return  (Number(this._originally_price) - ( Number(this._originally_price)  * this._discount / 100)).toFixed(2).replace(".",",")
},
_reviews:5,
_state_color:false,
_colors:[
{_active:true,_image_src:"/_app_data/_men/_w/8c66665e88f14322b3d6713603b1b316_v2_v0.webp"},
{_active:false,_image_src:"/_app_data/_men/_w/95e6e656f8fd44ddb6284b6c1a2c73d2_v2_v1.webp"},
],
},

{
    _id:100000024,
    _brand:"Versus Versace",
    _name:"ESTÈVE - Chronograph watch",
    _originally_price:"314.50",
    _discount:14,
    _has_discount:true, 
    get _price(){
    return  (Number(this._originally_price) - ( Number(this._originally_price)  * this._discount / 100)).toFixed(2).replace(".",",")
    },
    _reviews:5,
    _state_color:false,
    _colors:[
    {_active:true,_image_src:"/_app_data/_men/_w/0488d475ef904f629d8b3ca4b8ab8ea1_v3_v0.webp"},
    {_active:false,_image_src:"/_app_data/_men/_w/f5ccb720de6d4945917558ab98872a5f_v3_v1.webp"},
    {_active:false,_image_src:"/_app_data/_men/_w/2cc189e98e9543bc990503ace0488b99_v3_v2.webp"},
    ],
},
{
_id:100000025,
_brand:"Versace Watches",
_name:"HELLENYIUM - Watch",
_originally_price:"919.95",
_discount:10,
_has_discount:true, 
get _price(){
return  (Number(this._originally_price) - ( Number(this._originally_price)  * this._discount / 100)).toFixed(2).replace(".",",")
},

_reviews:5,
_state_color:false,
_colors:[
{_active:true,_image_src:"/_app_data/_men/_w/84242a733a4749b5804c9b48cd3d1f29_v4_v0.webp"},
{_active:false,_image_src:"/_app_data/_men/_w/cdc654a232844766a59959ec514704e2_v4_v1.webp"},
{_active:false,_image_src:"/_app_data/_men/_w/17469d198bb94b9bb2c03b43717c605d_v4_v2.webp"},
],
},
{
_id:100000026,
_brand:"Versace Watches",
_name:"GRECA - Chronograph watch",
_originally_price:"959.99",
_discount:30,
_has_discount:true, 
get _price(){
return  (Number(this._originally_price) - ( Number(this._originally_price)  * this._discount / 100)).toFixed(2).replace(".",",")
},
_reviews:5,
_state_color:false,
_colors:[
{_active:true,_image_src:"/_app_data/_men/_w/af2bf27448c84599913c1d72a34c0895_v5_v0.webp"},
{_active:false,_image_src:"/_app_data/_men/_w/42b9308065e748b3ba56890684ac3758_v5_v1.webp"},
{_active:false,_image_src:"/_app_data/_men/_w/700a746f17b54594ac92e47dc853dc35_v5_v2.webp"},
],
},



]

export default function _getAllwatches(req, res) {
res.status(200).json(_data.sort((x,y)=>{
return  y._reviews - x._reviews
}))
}
