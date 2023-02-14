





export const _data=[
{
_id:100000011,
_brand:"Jordan",
_name:"AIR JORDAN 1 - Trainers",
_originally_price:"54.95",
_discount:25,
_has_discount:true, 
get _price(){
return  (Number(this._originally_price) - ( Number(this._originally_price)  * this._discount / 100)).toFixed(2).replace(".",",")
},
_reviews:2,
_state_color:false,
_colors:[
{_active:true,_image_src:"/_app_data/_men/_s/a5b5513c57ac4ad1ad019d5a8a4723d9_v0_v0.webp"},
{_active:false,_image_src:"/_app_data/_men/_s/1906c2100d874597825e440884aa2c4d_v0_v1.webp"},
],
},
{
_id:100000012,
_brand:"Nike Sportswear",
_name:"AIR MAX 270 - Trainers",
_originally_price:"150.00",
_discount:35,
_has_discount:true, 
get _price(){
return  (Number(this._originally_price) - ( Number(this._originally_price)  * this._discount / 100)).toFixed(2).replace(".",",")
},

_reviews:5,
_state_color:false,
_colors:[
{_active:true,_image_src:"/_app_data/_men/_s/b8d578124c5e4ae1a4ce5aff11c17280_v1_v0.webp"},
{_active:false,_image_src:"/_app_data/_men/_s/528d47745bb04d3c8e10c77d427f3f83_v1_v1.webp"},
{_active:false,_image_src:"/_app_data/_men/_s/da4cb27885094d25874848b96704863d_v1_v2.webp"},
],
},
{
_id:100000013,
_brand:"Nike Sportswear",
_name:"AIR HUARACHE UNISEX - Trainers",
_originally_price:"190.80",
_discount:10,
_has_discount:true, 
get _price(){
return  (Number(this._originally_price) - ( Number(this._originally_price)  * this._discount / 100)).toFixed(2).replace(".",",")
},
_reviews:4,
_state_color:false,
_colors:[
{_active:true,_image_src:"/_app_data/_men/_s/a0e7befb5cc04da68343f825aa12ae71_v2_v0.webp"},
{_active:false,_image_src:"/_app_data/_men/_s/4b7275b681404229a2dfaf1fc157e92b_v2_v1.webp"},
{_active:false,_image_src:"/_app_data/_men/_s/466f483b991541a5aa042af362cb878d_v2_v2.webp"},
],
},

{
    _id:100000014,
    _brand:"Nike Sportswear",
    _name:"AIR FORCE 1 '07 - Trainers",
    _originally_price:"129.50",
    _discount:0,
    _has_discount:false, 
    get _price(){
    return  (Number(this._originally_price) - ( Number(this._originally_price)  * this._discount / 100)).toFixed(2).replace(".",",")
    },
    _reviews:3,
    _state_color:false,
    _colors:[
    {_active:true,_image_src:"/_app_data/_men/_s/705f3c89f2454bde916a4ffb306710c0_v3_v0.webp"},
    {_active:false,_image_src:"/_app_data/_men/_s/08254329bb84490fba835dd62622b6d0_v3_v1.webp"},
    {_active:false,_image_src:"/_app_data/_men/_s/a3909902ece64ec79724da3587d78590_v3_v2.webp"},
    ],
},
{
_id:100000015,
_brand:"New Balance",
_name:"574 UNISEX - Trainers",
_originally_price:"129.00",
_discount:15,
_has_discount:true, 
get _price(){
return  (Number(this._originally_price) - ( Number(this._originally_price)  * this._discount / 100)).toFixed(2).replace(".",",")
},

_reviews:4,
_state_color:false,
_colors:[
{_active:true,_image_src:"/_app_data/_men/_s/bb74f1b7f2fd49d79e95110f435a36a6_v4_v0.webp"},
{_active:false,_image_src:"/_app_data/_men/_s/13d4953b76034ccfafea2321151dc421_v4_v1.webp"},
{_active:false,_image_src:"/_app_data/_men/_s/3100e411b9454ab5826d43367a8cfc01_v4_v2.webp"},
],
},
{
_id:100000016,
_brand:"adidas Originals",
_name:"RETROPY F2 UNISEX - Trainers",
_originally_price:"179.99",
_discount:0,
_has_discount:false, 
get _price(){
return  (Number(this._originally_price) - ( Number(this._originally_price)  * this._discount / 100)).toFixed(2).replace(".",",")
},
_reviews:5,
_state_color:false,
_colors:[
{_active:true,_image_src:"/_app_data/_men/_s/133db90488b04b08980b20757db82912_v5_v0.webp"},
{_active:false,_image_src:"/_app_data/_men/_s/ebeba805ecf449ed84434450b47def70_v5_v1.webp"},
{_active:false,_image_src:"/_app_data/_men/_s/e54ba637d7d44fccaf593da088f970cc_v5_v2.webp"},
],
},



]

export default function _getAllshoes(req, res) {
res.status(200).json(_data.sort((x,y)=>{
    return  y._reviews - x._reviews
    }))
}
