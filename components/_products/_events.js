


import react,{useState,useRef} from 'react'
import {useDispatch} from "react-redux"
import { _AddTo_MyFavorites,_RemoveFrom_MyFavorites,_AddTo_MyBag,_RemoveFrom_MyBag } from '../_redux/_actions/_actions';
import {useRouter} from "next/router"


export default function _events(_type) {
const _disPatch=useDispatch();
const [_error,_setNewError]=useState(false)
const _size=useRef("");
const _Router=useRouter();



const _addtobag=(_data)=>{
if(_size.current=="" && _type!=="Watches"){
_setNewError(true)
}else{
_AddTo_MyBag(_data,_size,_disPatch)
}
}
const _removefrom_myBag=(_data)=>{
_RemoveFrom_MyBag(_data,_disPatch)
}





const _addtoFavorites=(_data)=>{
_AddTo_MyFavorites(_data,_disPatch,_Router.pathname)
}

const _removefrom_myFavorites=(_data)=>{
_RemoveFrom_MyFavorites(_data,_disPatch)
}



let _select_handleChange=(e)=>{
_size.current=e;
_setNewError(false)
}


return{
_addtobag:_addtobag,
_addtoFavorites:_addtoFavorites,
_removefrom_myBag:_removefrom_myBag,
_removefrom_myFavorites:_removefrom_myFavorites,
_error:_error,
handleChange:_select_handleChange,

}


}
