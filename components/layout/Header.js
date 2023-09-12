import header from '@/styles/scss/layout/header.module.scss' 
import { gnbList } from '@/pages/api/Nav'
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
    const [active, setActive] = useState('')
    const [lang, setLang] = useState(true)
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
    // 메뉴이벤트
    const handlerMenu = () => {
        
    }
    return (
        <header className="l-header">
            <div id='scroll' className={`${header.header_wrap} ${active && header[active]}`}>
                <div className={header.header_inner}>
                    <div className={header.header_left}>
                        <div className={header.header_logo}> 
                            <Link href="/">GOLDENDISCAWARDS</Link>
                        </div>
                        <na>
                            <ul className={header.header_gnb}>
                                {gnbList.map((item) => (
                                    <li key={item.id}>
                                        <Link href={item.link}>
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </na>
                    </div>
                    <div className={header.header_right}>
                        <div className={header.header_lang} >
                            <button
                                className={`${lang ? header[`${'header_lang_active'}`] : ''}`}
                                onClick={() => { setLang(true) }}
                            >
                                KO
                            </button>
                            <button
                                 className={`${!lang ? header[`${'header_lang_active'}`] : ''}`}
                                onClick={() => { setLang(false) }}
                            >
                                EN
                            </button>
                        </div>
                        <button className={header.header_menu} onClick={handlerMenu}>
                            <span />
                        </button> 
                    </div>
                </div>
            </div>
        </header>
    )
}