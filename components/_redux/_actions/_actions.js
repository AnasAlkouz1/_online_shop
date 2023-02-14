

export const _set_MyFavorites_localStorage=(_disPatch)=>{
_disPatch({type:"__my_favorites_localStorage"})
}

export const _AddTo_MyFavorites=(_data,_disPatch,_pagelocation)=>{
_disPatch({type:"_add_toFavorites",payload:_data,_pagelocation:_pagelocation})
}
export const _RemoveFrom_MyFavorites=(_data,_disPatch)=>{
_disPatch({type:"_removeFrom_Favorites",payload:_data})
}


export const _set_MyBag_localStorage=(_disPatch)=>{
_disPatch({type:"__my_bag_localStorage"})
}

export const _AddTo_MyBag=(_data,_size,_disPatch)=>{
_disPatch({type:"_add_tobag",payload:_data,_size:_size})
}


export const _RemoveFrom_MyBag=(_data,_disPatch)=>{
    console.log(_data)
_disPatch({type:"_removeFrom_bag",payload:_data})
}

