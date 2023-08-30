import gnb from '@/styles/scss/layout/gnb.module.scss'
import { gnbList } from '@/pages/api/Nav'
import Link from 'next/link'

 
const Gnb = () => {
    return (
        <div className="l-gnb">
            <div>
                <ul className={gnb.gnb_gnb}>
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
    )
} 
export default Gnb