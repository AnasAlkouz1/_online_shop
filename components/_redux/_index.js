
import react,{useEffect} from "react"
import {combineReducers,createStore,applyMiddleware} from 'redux'
import reduxThunk from "redux-thunk"
import { __My_Bag_reducer } from './_reducers/_my_bag'
import { __My_Favorites_reducer } from "./_reducers/_my_favorites"


const _allstore=combineReducers({
_my_bag:__My_Bag_reducer,
_my_favorites:__My_Favorites_reducer,
})

// const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const enhancer=( 
(typeof window !== 'undefined' && window.devToolsExtension ) ? window.devToolsExtension() : f => f
); 

export let  _store=createStore(_allstore,enhancer(applyMiddleware(reduxThunk)))






