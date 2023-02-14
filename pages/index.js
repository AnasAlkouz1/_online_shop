
import react,{useEffect} from "react"
import dynamic from "next/dynamic";
import style from "../style/sass/_Home/_home.module.scss"
import Link from "next/link"
import Image from "next/image"
const _Carousel=dynamic(()=>import('../components/_Home/_carousel'),{ssr:false})
export default function _index() {






return (
<>
<div className={style._home_container}>
<div className={`d-flex justify-content-around align-items-center ${style._first_div__content}`} >
<div className="animate__animated animate__bounceInLeft animate__slow">Hallo From Shop<span>.Com</span></div>
<div className="animate__animated animate__bounceInRight animate__slow">
<Image src='/person-browsing-at-a-clothing-store.png' width="450" height="400" alt='logo' />
</div>

</div>
<_Carousel/>
<div className={`${style._div_v0_links} container _div_v_v_4642v`}>
<div className='row'>
<div className='col-lg-4 col-md-6 col-sm-12'>
<Link href="/_products/men/_jackets_m">
<div className={style._div_v0_links_itam}>
<img src="/_app_data/_men/_j/af0d20b37a0c47a49b67aa7b9eacb738_v4_v0.webp"/>
<div>Jackets for Men</div>

</div>
</Link>
</div>
<div className='col-lg-4 col-md-6 col-sm-12'>
<Link href="/_products/men/_shoes_m">
<div className={style._div_v0_links_itam}>
<img src="/_app_data/_men/_s/133db90488b04b08980b20757db82912_v5_v0.webp"/>
<div>Shoes for Men</div>

</div>
</Link>
</div>
<div className='col-lg-4 col-md-6 col-sm-12'>
    <Link href="/_products/men/_watches_m">
<div className={style._div_v0_links_itam}>
<img src="/_app_data/_men/_w/b0cce240b0df43a999e465bab5b913eb_v1_v0.webp"/>
<div>Watches for Men</div>

</div>
</Link>
</div>




</div>

<div className='row'>
<div className='col-lg-4 col-md-6 col-sm-12'>
<Link href="/_products/women/_jackets_w">
<div className={style._div_v0_links_itam}>
<img src="/_app_data/_women/_j/ceafa73d42f14867b49c23d2d83df753_v3_v1.webp"/>
<div>Jackets for Women</div>

</div>
</Link>
</div>
<div className='col-lg-4 col-md-6 col-sm-12'>
    <Link href="/_products/women/_shoes_w">
<div className={style._div_v0_links_itam}>
<img src="/_app_data/_women/_s/f29529c4d06847b49b079c5708a4df23_v3_v0.webp"/>
<div>Shoes for Women</div>

</div>
</Link>
</div>
<div className='col-lg-4 col-md-6 col-sm-12'>

<Link href="/_products/women/_watches_w">
<div className={style._div_v0_links_itam}>
<img src="/_app_data/_women/_w/64c5c1046d994c499813801c7f65d368_v0_v0.webp"/>
<div>Watches for Women</div>

</div>
</Link>
</div>




</div>




</div>




</div>
</>
)

}
