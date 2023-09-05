import footer from '@/styles/scss/layout/footer.module.scss' 
import Link from 'next/link'
import { FNavList } from '@/pages/api/FNav'

export default function Footer() {
    return(
        <div className="l-footer"> 
            <div className={footer.footer_sns_wrap}>
                <ul className={footer.footer_sns}>
                    <li>
                        <Link href="https://www.instagram.com/golden_disc/" target="_blank">
                            <img src="/images/content/instagram.png" alt="인스타그램"/>
                        </Link>
                    </li> 
                    <li>
                        <Link href="https://www.facebook.com/gdajtbcplus/" target="_blank">
                            <img src="/images/content/facebook.png" alt="페이스북"/>
                        </Link>
                    </li> 
                    <li>
                        <Link href="https://twitter.com/GoldenDisc_en" target="_blank">
                            <img src="/images/content/twitter.png" alt="트위터"/>
                        </Link>
                    </li> 
                </ul>
            </div>
            <div className={footer.footer_wrap}> 
                <h1>
                    <a href="#">
                        GOLDENDISCAWARDS 
                        <span>골든디스크어워즈 2023.01.07</span>
                    </a>
                </h1>
                <div className={ footer.footer_nav }>
                    <ul className={ footer.footer_nav_ul }>
                        {FNavList.map((item) => ( 
                            <li key={item.id}> 
                                <span>{item.title} </span> 
                            <ul className={ footer.footer_nav_ul_sub }>
                                {item.subtitle.map((item2) => (
                                <li  key={item2.id}>
                                    <Link href={ item2.link }>
                                        <span>{item2.label}</span>
                                    </Link>
                                </li>
                                ))}
                            </ul>
                            </li> 
                        ))}
                    </ul>
                </div>
            </div> 
        </div>
    )
}