


let _My_Bag=[];
let _localStorage_name="__my_bag"


export const __My_Bag_reducer=(state=_My_Bag,action)=>{

switch(action.type){
case "__my_bag_localStorage":{
let __my_Bag=JSON.parse(localStorage.getItem(_localStorage_name) || "[]" )
return [...__my_Bag]
};
case "_add_tobag":{
let _newData={
_id:action.payload._id,
_brand:action.payload._brand,
_name:action.payload._name,
_imgsrc:action.payload._colors.find((x)=>x._active==true)._image_src,
_originally_price:action.payload._originally_price,
_price:action.payload._price,
_has_discount:action.payload._has_discount,
_discount:action.payload._discount,
_size:action._size.current,
}
localStorage.setItem(_localStorage_name,JSON.stringify([...state,_newData]))
return [...state,_newData]
};
case "_removeFrom_bag":{
let _newState=state.filter((x)=>x._id!==action.payload._id)
localStorage.setItem(_localStorage_name,JSON.stringify([..._newState]))
return [..._newState]
};
default:return state; 

}


}
