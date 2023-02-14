





export const _data=[
{
_id:200000001,
_brand:"Didriksons",
_name:"LEYA WOMENS LONG - Parka",
_originally_price:"269.90",
_discount:20,
_has_discount:true, 
get _price(){
return  (Number(this._originally_price) - ( Number(this._originally_price)  * this._discount / 100)).toFixed(2).replace(".",",")
},
_reviews:3,
_state_color:false,
_colors:[
{_active:true,_image_src:"/_app_data/_women/_j/034def54974546508f05234afdb6cf3f_v0_v0.webp"},
{_active:false,_image_src:"/_app_data/_women/_j/034def54974546508f05234afdb6cf3f_v0_v1.webp"},
],
},
{
_id:200000002,
_brand:"First",
_name:"B Waistcoat",
_originally_price:"78.90",
_discount:0,
_has_discount:false, 
get _price(){
return  (Number(this._originally_price) - ( Number(this._originally_price)  * this._discount / 100)).toFixed(2).replace(".",",")
},

_reviews:5,
_state_color:false,
_colors:[
{_active:true,_image_src:"/_app_data/_women/_j/4de99bb8ed654d869fe5364bf2760bc1_v1_v0.webp"},
{_active:false,_image_src:"/_app_data/_women/_j/fca7051a314242798de89e0c2a0294e4_v1_v1.webp"},
{_active:false,_image_src:"/_app_data/_women/_j/b433915bf22a400bb3cf01e6083b0aa7_v1_v2.webp"},
],
},
{
_id:200000003,
_brand:"Rock Creek",
_name:"Winter jacket",
_originally_price:"39.80",
_discount:50,
_has_discount:true, 
get _price(){
return  (Number(this._originally_price) - ( Number(this._originally_price)  * this._discount / 100)).toFixed(2).replace(".",",")
},
_reviews:4,
_state_color:false,
_colors:[
{_active:true,_image_src:"/_app_data/_women/_j/3352d047f83245669c04baa2ec8edf9a_v2_v0.webp"},
{_active:false,_image_src:"/_app_data/_women/_j/4499400c532c43b88880c3c44587fec0_v2_v1.webp"},
{_active:false,_image_src:"/_app_data/_women/_j/23a1258470b2445294089800416a16ae_v2_v2.webp"},
],
},


{
_id:200000004,
_brand:"ONLY",
_name:"KENZIE - Summer jacket",
_originally_price:"100.89",
_discount:15,
_has_discount:true, 
get _price(){
return  (Number(this._originally_price) - ( Number(this._originally_price)  * this._discount / 100)).toFixed(2).replace(".",",")
},
_reviews:5,
_state_color:false,
_colors:[
{_active:true,_image_src:"/_app_data/_women/_j/ceafa73d42f14867b49c23d2d83df753_v3_v0.webp"},
{_active:false,_image_src:"/_app_data/_women/_j/ceafa73d42f14867b49c23d2d83df753_v3_v1.webp"},
{_active:false,_image_src:"/_app_data/_women/_j/ceafa73d42f14867b49c23d2d83df753_v3_v2.webp"},
],
},
{
_id:200000005,
_brand:"Nike Sportswear",
_name:"Winter jacket",
_originally_price:"89.00",
_discount:0,
_has_discount:false, 
get _price(){
return  (Number(this._originally_price) - ( Number(this._originally_price)  * this._discount / 100)).toFixed(2).replace(".",",")
},

_reviews:5,
_state_color:false,
_colors:[
{_active:true,_image_src:"/_app_data/_women/_j/f4db39870ccc478eba12e3d51749cbef1_v4_v0.webp"},
{_active:false,_image_src:"/_app_data/_women/_j/f4db39870ccc478eba12e3d51749cbef1_v4_v1.webp"},
{_active:false,_image_src:"/_app_data/_women/_j/f4db39870ccc478eba12e3d51749cbef1_v4_v2.webp"},
],
},
{
_id:200000006,
_brand:"Vero Moda",
_name:"LANGER - Short coat",
_originally_price:"45.50",
_discount:0,
_has_discount:false, 
get _price(){
return  (Number(this._originally_price) - ( Number(this._originally_price)  * this._discount / 100)).toFixed(2).replace(".",",")
},
_reviews:4,
_state_color:false,
_colors:[
{_active:true,_image_src:"/_app_data/_women/_j/29e274edb43c4095a47cde634363efbc_v5_v0.webp"},
{_active:false,_image_src:"/_app_data/_women/_j/29e274edb43c4095a47cde634363efbc_v5_v1.webp"},
{_active:false,_image_src:"/_app_data/_women/_j/29e274edb43c4095a47cde634363efbc_v5_v2.webp"},
],
},


]

export default function _getAllJackets_w(req, res) {
res.status(200).json(_data.sort((x,y)=>{
return  y._reviews - x._reviews
}))
}
