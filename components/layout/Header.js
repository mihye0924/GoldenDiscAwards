import header from '@/styles/scss/layout/header.module.scss' 
import { gnbList } from '@/pages/api/Nav'
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
    const [active, setActive] = useState('')
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll); //clean up
        };
      }, []);
    
    // 스크롤 이벤트
    const handleScroll = () => {
        const scroll = window.scrollY; 
        if (scroll > 80) {
            setActive('active')
        } else {
            setActive('')
        }
      }; 
    return (
        <div className="l-header">
            <div id='scroll' className={`${header.header_wrap} ${header[active]}`}>
                <div className={header.header_inner}>
                    <div className={header.header_left}>
                        <div className={header.header_logo}> 
                            <Link href="/">GOLDENDISCAWARDS</Link>
                        </div>
                        <div>
                            <ul className={header.header_gnb}>
                                {gnbList.map((item) => (
                                    <li key={item.id}>
                                        <Link href={item.link}>
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className={header.header_right}>
                        <div className={header.header_lang}>
                            <button>KO</button>
                            <button>EN</button>
                        </div>
                        <div className={header.header_menu}>
                            <span />
                        </div>
                        {/* <img src="/images/common/hammenu_btn.png" /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}