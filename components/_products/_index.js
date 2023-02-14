

import _products from "./_products"
import {Select} from "antd"
import {RightOutlined,QuestionCircleTwoTone} from "@ant-design/icons"
import _styledCard from "../../style/css/_card.module.css"
import style from "../../style/sass/_products/_index.module.scss"




export default function _Index({data,_textArray,_Routelink}) {
let {
_card,
_select_options,
handleChange,
}=_products(style,_styledCard,data,_Routelink)



return (
<>
<div className={style._main_container}>
<div className={style._page_title}>
<div>{_textArray[0]}</div>
<RightOutlined/>
<div>{_textArray[1]}</div>
</div>
<div className={style._page_title_v1}>
<div>{_textArray[2]}</div>
</div>
<div className={style._select_and_i_n_s}>
<div className='container-fluid'>
<div id="_select" className='row'>
<div className='col-lg-5 col-sm-12'>
<Select
defaultValue="_option_v0"
placeholder="Sort by"
size="large"
onChange={handleChange}
style={{
width: "100%",
}}
options={_select_options}
/>
</div>


</div>
<div id="_items_number_s" className='row mt-4'>
<div className='col-12'>
<div className={style._items_number_s} ><div>{data.length} Items </div><div><QuestionCircleTwoTone twoToneColor={'#4c596f'}/></div></div>
</div>
</div>

</div>


</div>
<div className={style._card_container}>
<div className='container'><div className='row'>{_card}</div></div>
</div>



</div>
</>
)
}
