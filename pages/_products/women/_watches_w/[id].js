



import _Page_id from "../../../../components/_products/_pageId"
import axios from "axios"
import __select_options from "../../../../components/_products/_select_options"






export default function _page_id({data}) {
const {_options_select_shoes_m}=__select_options()
return (
<>
<_Page_id data={data} _select_options={_options_select_shoes_m}  _type="Watches"/>
</>

)
}


export async function getStaticPaths(){
const _data=await axios.get("http://localhost:3000/api/_products/_women/_watches")
let _paths=_data.data.map((x)=>{
return  {params:{id:String(x._id)}}
})

return {
paths:_paths,
fallback:false
}



}

export async function getStaticProps(context){
try{
const _data=await axios.get(`http://localhost:3000/api/_products/_women/_watches/${context.params.id}`)
return {
props:{
data:_data.data,
}
}
}catch(err){
console.log("err")
}

}