

import axios from "axios"
import _Index from "../../../../components/_products/_index"



const _textArray= ["Men","Watches","Watches for Men"]

export default function _watches_m({data}) {
return (
<>
<_Index data={data} _textArray={_textArray}  _Routelink="men/_watches_m" />
</>
)
}


export async function getStaticProps(){
const _data=await axios.get("http://localhost:3000/api/_products/_men/_watches")
return {
props:{
data:_data.data,
}
}

}