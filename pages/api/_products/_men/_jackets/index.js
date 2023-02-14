





export const _data=[
{
_id:100000001,
_brand:"Superdry",
_name:"Winter jacket",
_originally_price:"134.89",
_discount:0,
_has_discount:false, 
get _price(){
return  (Number(this._originally_price) - ( Number(this._originally_price)  * this._discount / 100)).toFixed(2).replace(".",",")
},
_reviews:5,
_state_color:false,
_colors:[
{_active:true,_image_src:"/_app_data/_men/_j/5b2178e38a2a413799936f3fd25e15df_v0_v0.webp"},
{_active:false,_image_src:"/_app_data/_men/_j/1bcf0ce835ae47679ad45be00b72ebe4_v0_v1.webp"},
{_active:false,_image_src:"/_app_data/_men/_j/c5ac69330d2a4b49bc2512bc96d6e6c3_v0_v2.webp"},
],
},
{
_id:100000002,
_brand:"Threadbare",
_name:"ARNWOOD - Winter jacket",
_originally_price:"94.00",
_discount:20,
_has_discount:true, 
get _price(){
return  (Number(this._originally_price) - ( Number(this._originally_price)  * this._discount / 100)).toFixed(2).replace(".",",")
},

_reviews:2,
_state_color:false,
_colors:[
{_active:true,_image_src:"/_app_data/_men/_j/ab356cc731824249bd82776959f445d5_v1_v0.webp"},
{_active:false,_image_src:"/_app_data/_men/_j/32340a59ba364654b19dcc528fed1bf7_v1_v1.webp"},
],
},
{
_id:100000003,
_brand:"Threadbare",
_name:"JACKTON - Winter jacket",
_originally_price:"74.80",
_discount:45,
_has_discount:true, 
get _price(){
return  (Number(this._originally_price) - ( Number(this._originally_price)  * this._discount / 100)).toFixed(2).replace(".",",")
},
_reviews:4,
_state_color:false,
_colors:[
{_active:true,_image_src:"/_app_data/_men/_j/4f1d48ed82da496cb17648651fca5caa_v2_v0.webp"},
{_active:false,_image_src:"/_app_data/_men/_j/befc4ac5b3124654b9c77baac30b6622_v2_v1.webp"},
],
},


{
_id:100000004,
_brand:"CASAMODA",
_name:"Winter jacket",
_originally_price:"159.89",
_discount:25,
_has_discount:true, 
get _price(){
return  (Number(this._originally_price) - ( Number(this._originally_price)  * this._discount / 100)).toFixed(2).replace(".",",")
},
_reviews:5,
_state_color:false,
_colors:[
{_active:true,_image_src:"/_app_data/_men/_j/f4c24e43d050488a8bba4af779306802_v3_v0.webp"},
{_active:false,_image_src:"/_app_data/_men/_j/58d9c52089334858acf69022be525d0c_v3_v1.webp"},
{_active:false,_image_src:"/_app_data/_men/_j/9d0a9b751ebf4e58969a58da3040713a_v3_v2.webp"},
],
},
{
_id:100000005,
_brand:"Superdry",
_name:"COLLEGE VARSITY-Bomber Jacket",
_originally_price:"120.00",
_discount:30,
_has_discount:true, 
get _price(){
return  (Number(this._originally_price) - ( Number(this._originally_price)  * this._discount / 100)).toFixed(2).replace(".",",")
},

_reviews:2,
_state_color:false,
_colors:[
{_active:true,_image_src:"/_app_data/_men/_j/af0d20b37a0c47a49b67aa7b9eacb738_v4_v0.webp"},
{_active:false,_image_src:"/_app_data/_men/_j/a551855ae1a24262af5c7a42d01470ff_v4_v1.webp"},
{_active:false,_image_src:"/_app_data/_men/_j/c60c148b97da4817855e473a96bde401_v4_v2.webp"},
],
},
{
_id:100000006,
_brand:"INDICODE JEANS",
_name:"ADRIAN - Winter jacket",
_originally_price:"187.50",
_discount:50,
_has_discount:true, 
get _price(){
return  (Number(this._originally_price) - ( Number(this._originally_price)  * this._discount / 100)).toFixed(2).replace(".",",")
},
_reviews:4,
_state_color:false,
_colors:[
{_active:true,_image_src:"/_app_data/_men/_j/86514e01743d4dc88b1782d45d25a177_v5_v0.webp"},
{_active:false,_image_src:"/_app_data/_men/_j/1dea03ef25b0467ca0e1d77585a5a2d4_v5_v1.webp"},
{_active:false,_image_src:"/_app_data/_men/_j/efdc15dc83404a918a8f01e29ddd1f0c_v5_v2.webp"},
],
},


]

export default function _getAllJackets(req, res) {
res.status(200).json(_data.sort((x,y)=>{
return  y._reviews - x._reviews
}))
}
