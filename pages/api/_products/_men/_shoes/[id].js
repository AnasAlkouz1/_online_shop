

import {_data} from "./index"


export default function _getShoes_by_Id(req, res) {
return res.status(200).json(
_data.filter((x)=>x._id==req.query.id)
)
}
