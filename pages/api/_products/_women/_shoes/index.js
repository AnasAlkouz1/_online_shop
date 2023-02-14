




export const _data=[
{
_id:200000011,
_brand:"Nike Sportswear",
_name:"AIR FORCE 1 SHADOW - Trainers",
_originally_price:"129.95",
_discount:0,
_has_discount:false, 
get _price(){
return  (Number(this._originally_price) - ( Number(this._originally_price)  * this._discount / 100)).toFixed(2).replace(".",",")
},
_reviews:5,
_state_color:false,
_colors:[
{_active:true,_image_src:"/_app_data/_women/_s/dc2ef7244f9d42a7824fd128ab926dbd_v0_v0.webp"},
{_active:false,_image_src:"/_app_data/_women/_s/664db21aff874f8fa209a07e678229b3_v0_v1.webp"},
{_active:false,_image_src:"/_app_data/_women/_s/4bfdc26f3f4b4a76bb3d1fd1b9110791_v0_v2.webp"},
],
},
{
_id:200000012,
_brand:"Nike Performance",
_name:"RENEW IN SEASON TR 11 - Training shoe",
_originally_price:"139.95",
_discount:30,
_has_discount:true, 
get _price(){
return  (Number(this._originally_price) - ( Number(this._originally_price)  * this._discount / 100)).toFixed(2).replace(".",",")
},

_reviews:4,
_state_color:false,
_colors:[
{_active:true,_image_src:"/_app_data/_women/_s/3ac16e90a9b24180a1fcc8023a2e3faf_v1_v0.webp"},
{_active:false,_image_src:"/_app_data/_women/_s/3ac16e90a9b24180a1fcc8023a2e3faf_v1_v1.webp"},
{_active:false,_image_src:"/_app_data/_women/_s/3ac16e90a9b24180a1fcc8023a2e3faf_v1_v2.webp"},
],
},
{
_id:200000013,
_brand:"Jordan",
_name:"WMNS AIR 11 CMFT - Trainers",
_originally_price:"50.95",
_discount:25,
_has_discount:true, 
get _price(){
return  (Number(this._originally_price) - ( Number(this._originally_price)  * this._discount / 100)).toFixed(2).replace(".",",")
},
_reviews:4,
_state_color:false,
_colors:[
{_active:true,_image_src:"/_app_data/_women/_s/d8c50d57d2e145c58fbef30e1c6ccf7e_v2_v0.webp"},
{_active:false,_image_src:"/_app_data/_women/_s/513518958b474a2ea0026715b016ce2a_v2_v1.webp"},
{_active:false,_image_src:"/_app_data/_women/_s/3a69dddcba82470aa3a874300b17e3a6_v2_v2.webp"},
],
},

{
    _id:200000014,
    _brand:"Puma",
    _name:"MAYZE LTH WNS - Trainers",
    _originally_price:"112.95",
    _discount:15,
    _has_discount:true, 
    get _price(){
    return  (Number(this._originally_price) - ( Number(this._originally_price)  * this._discount / 100)).toFixed(2).replace(".",",")
    },
    _reviews:5,
    _state_color:false,
    _colors:[
    {_active:true,_image_src:"/_app_data/_women/_s/f29529c4d06847b49b079c5708a4df23_v3_v0.webp"},
    {_active:false,_image_src:"/_app_data/_women/_s/f29529c4d06847b49b079c5708a4df23_v3_v1.webp"},
    {_active:false,_image_src:"/_app_data/_women/_s/f29529c4d06847b49b079c5708a4df23_v3_v2.webp"},
    ],
},
{
_id:200000015,
_brand:"Nike Sportswear",
_name:"AIR MAX 270 - Trainers",
_originally_price:"75.00",
_discount:0,
_has_discount:false, 
get _price(){
return  (Number(this._originally_price) - ( Number(this._originally_price)  * this._discount / 100)).toFixed(2).replace(".",",")
},

_reviews:3,
_state_color:false,
_colors:[
{_active:true,_image_src:"/_app_data/_women/_s/6452d1a23134428e8f89cff7d87957f1_v4_v0.webp"},
{_active:false,_image_src:"/_app_data/_women/_s/6452d1a23134428e8f89cff7d87957f1_v4_v1.webp"},
{_active:false,_image_src:"/_app_data/_women/_s/6452d1a23134428e8f89cff7d87957f1_v4_v2.webp"},
],
},
{
_id:200000016,
_brand:"Nike Sportswear",
_name:"W AF1 SHADOW - Trainers",
_originally_price:"189.99",
_discount:30,
_has_discount:true, 
get _price(){
return  (Number(this._originally_price) - ( Number(this._originally_price)  * this._discount / 100)).toFixed(2).replace(".",",")
},
_reviews:5,
_state_color:false,
_colors:[
{_active:true,_image_src:"/_app_data/_women/_s/426bd7bcfb6e4b5cb26926e6514ac2c2_v5_v0.webp"},
{_active:false,_image_src:"/_app_data/_women/_s/426bd7bcfb6e4b5cb26926e6514ac2c2_v5_v1.webp"},
{_active:false,_image_src:"/_app_data/_women/_s/426bd7bcfb6e4b5cb26926e6514ac2c2_v5_v2.webp"},
],
},



]

export default function _getAllshoes_w(req, res) {
res.status(200).json(_data.sort((x,y)=>{
return  y._reviews - x._reviews
}))
}
