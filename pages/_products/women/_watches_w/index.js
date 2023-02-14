

import axios from "axios"
import _Index from "../../../../components/_products/_index"



const _textArray= ["Women","Watches","Watches for Women"]

export default function _watches_w({data}) {
return (
<>
<_Index data={data} _textArray={_textArray}  _Routelink="women/_watches_w" />
</>
)
}


export async function getStaticProps(){
const _data=await axios.get("http://localhost:3000/api/_products/_women/_watches")
return {
props:{
data:_data.data,
}
}

}