

import {AppleOutlined,AndroidOutlined,InstagramOutlined,TwitterOutlined,FacebookOutlined} from "@ant-design/icons"
const __buttom_v0=()=>{
return(
<>
<div className='_div_f_r_4366422'>
<div>Imprint</div>
<div>Terms & Conditions</div>
<div>Privace Notice</div>
</div>
</>
)
}
const __buttom_v1=()=>{
return(
<>
<div className='_div_f_r_4366423'>
<div>Our Apps</div>
<div>
<button className='btn _btn_our_apps_appleStore'>
<AppleOutlined/>
<div>
<span>Download on the </span>
<span>App Store</span>
</div>
</button>
<button className='btn _btn_our_apps_GooglePlay'>
<AndroidOutlined/>
<div>
<span>Download on the</span>
<span>Google Play</span>
</div>
</button>
</div>


</div>
</>
)
}

const __buttom_v2=()=>{
return(
<>
<div className='_div_f_r_4366424'>
<div>You can also find us on</div>
<div>
<div><InstagramOutlined/></div>
<div><TwitterOutlined/></div>
<div><FacebookOutlined/></div>
</div>


</div>
</>
)
}



export default function _buttom_container() {
return (
<>
<div className='_fixed_buttom_n_c'>
<div className="container">
<div className='row mt-3'>
<div className='col-3'><__buttom_v0/></div>
<div className='col-5'><__buttom_v1/></div>
<div className='col-4'><__buttom_v2/></div>


</div>
</div>
</div>
</>
)
}
