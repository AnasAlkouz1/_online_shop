

let _My_Favorites=[];
let _localStorage_name="__my_favorites"

export const __My_Favorites_reducer=(state=_My_Favorites,action)=>{
switch(action.type){
case "__my_favorites_localStorage":{
let __my_favorites=JSON.parse(localStorage.getItem(_localStorage_name) || "[]" )
return [...__my_favorites]
};
case "_add_toFavorites":{
const _router=action._pagelocation;
const _checkIndex=_router.split("/").indexOf("[id]");
const _url=_checkIndex== -1 ? `${_router}/${action.payload._id}` : `${_router.split("/").slice(0,_checkIndex).join(",").replaceAll(",","/")}/${action.payload._id}`
let _newData={
_id:action.payload._id,
_brand:action.payload._brand,
_name:action.payload._name,
_imgsrc:action.payload._colors.find((x)=>x._active==true)._image_src,
_originally_price:action.payload._originally_price,
_price:action.payload._price,
_has_discount:action.payload._has_discount,
_discount:action.payload._discount,
_url:_url
}
localStorage.setItem(_localStorage_name,JSON.stringify([...state,_newData]))
return [...state,_newData]
};
case "_removeFrom_Favorites":{
let _newState=state.filter((x)=>x._id!==action.payload._id)
localStorage.setItem(_localStorage_name,JSON.stringify([..._newState]))
return [..._newState]
};
default:return state; 

}


}