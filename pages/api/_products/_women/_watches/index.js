





export const _data=[
{
_id:200000021,
_brand:"Victoria Hyde",
_name:"SPARKLE STAR - Watch",
_originally_price:"199.95",
_discount:25,
_has_discount:true, 
get _price(){
return  (Number(this._originally_price) - ( Number(this._originally_price)  * this._discount / 100)).toFixed(2).replace(".",",")
},
_reviews:5,
_state_color:false,
_colors:[
{_active:true,_image_src:"/_app_data/_women/_w/64c5c1046d994c499813801c7f65d368_v0_v0.webp"},
{_active:false,_image_src:"/_app_data/_women/_w/c32ac0f1df98464892877463861403cf_v0_v1.webp"},
],
},
{
_id:200000022,
_brand:"Watchmark",
_name:"ACTIVE - Smartwatch",
_originally_price:"200.00",
_discount:10,
_has_discount:true, 
get _price(){
return  (Number(this._originally_price) - ( Number(this._originally_price)  * this._discount / 100)).toFixed(2).replace(".",",")
},
_reviews:5,
_state_color:false,
_colors:[
{_active:true,_image_src:"/_app_data/_women/_w/df3e3430d3f64bc698e5b8c0dd16ddac_v1_v0.webp"},
{_active:false,_image_src:"/_app_data/_women/_w/df3e3430d3f64bc698e5b8c0dd16ddac_v1_v1.webp"},
],
},

{
_id:200000023,
_brand:"Victoria Hyde",
_name:"Watch",
_originally_price:"59.95",
_discount:0,
_has_discount:false, 
get _price(){
return  (Number(this._originally_price) - ( Number(this._originally_price)  * this._discount / 100)).toFixed(2).replace(".",",")
},

_reviews:5,
_state_color:false,
_colors:[
{_active:true,_image_src:"/_app_data/_women/_w/1625891095df412e96ee62480451a9e7_v2_v0.webp"},
{_active:false,_image_src:"/_app_data/_women/_w/2a3acf19e398431f9efb1dd9d2a7f136_v2_v1.webp"},
],
},

{
_id:200000024,
_brand:"Even & Odd",
_name:"Watch",
_originally_price:"130.50",
_discount:50,
_has_discount:true, 
get _price(){
return  (Number(this._originally_price) - ( Number(this._originally_price)  * this._discount / 100)).toFixed(2).replace(".",",")
},
_reviews:3,
_state_color:false,
_colors:[
{_active:true,_image_src:"/_app_data/_women/_w/e7ac5b3a420f40aeb90a23b923842fb7_v3_v0.webp"},
{_active:false,_image_src:"/_app_data/_women/_w/e7ac5b3a420f40aeb90a23b923842fb7_v3_v1.webp"},
],
},
{
_id:200000025,
_brand:"Liebeskind Berlin",
_name:"Chronograph watch",
_originally_price:"399.95",
_discount:15,
_has_discount:true, 
get _price(){
return  (Number(this._originally_price) - ( Number(this._originally_price)  * this._discount / 100)).toFixed(2).replace(".",",")
},

_reviews:5,
_state_color:false,
_colors:[
{_active:true,_image_src:"/_app_data/_women/_w/8df2e483d7024b2b8d61d22b9fd60546_v4_v0.webp"},
{_active:false,_image_src:"/_app_data/_women/_w/8df2e483d7024b2b8d61d22b9fd60546_v4_v1.webp"},
{_active:false,_image_src:"/_app_data/_women/_w/8df2e483d7024b2b8d61d22b9fd60546_v4_v2.webp"},
],
},
{
_id:200000026,
_brand:"Tamaris",
_name:"Watch",
_originally_price:"430.00",
_discount:10,
_has_discount:true, 
get _price(){
return  (Number(this._originally_price) - ( Number(this._originally_price)  * this._discount / 100)).toFixed(2).replace(".",",")
},
_reviews:4,
_state_color:false,
_colors:[
{_active:true,_image_src:"/_app_data/_women/_w/932f2de0b7494ebe96b21dc8104502f6_v5_v0.webp"},
{_active:false,_image_src:"/_app_data/_women/_w/932f2de0b7494ebe96b21dc8104502f6_v5_v1.webp"},
{_active:false,_image_src:"/_app_data/_women/_w/932f2de0b7494ebe96b21dc8104502f6_v5_v2.webp"},
],
},



]

export default function _getAllwatches_w(req, res) {
res.status(200).json(_data.sort((x,y)=>{
return  y._reviews - x._reviews
}))
}
