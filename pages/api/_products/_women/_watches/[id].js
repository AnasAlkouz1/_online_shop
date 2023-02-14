

import {_data} from "./index"


export default function _getWatches_by_Id_w(req, res) {
return res.status(200).json(
_data.filter((x)=>x._id==req.query.id)
)
}
