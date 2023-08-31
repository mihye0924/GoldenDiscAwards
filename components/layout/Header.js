import header from '@/styles/scss/layout/header.module.scss'
import GNB from '@/components/layout/Gnb'
import Nav from '@/components/layout/Nav'
export default function Header() {
    return (
        <div className="l-header">
            <div className={header.header_wrap}>
                <div className={header.header_left}>
                    <div className={header.header_logo}> 
                        GOLDENDISCAWARDS
                    </div>
                    <GNB />
                </div>
                <div className={header.header_right}>
                    <div className={header.header_lang}>
                        <button>KO</button>
                        <button>EN</button>
                    </div>
                    <Nav />
                </div>
            </div>
        </div>
    )
}