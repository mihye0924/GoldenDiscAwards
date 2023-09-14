import Link from "next/link";
import menu from '@/styles/scss/layout/menu.module.scss' 
import { FNavList } from '@/pages/api/FNav'

export default function Nav({ show, onClose }) { 
  return ( 
    show &&
    <div className={menu.menu_bg}> 
        <nav>
          <ul className={menu.menu_nav}>
            {FNavList.map((item) => ( 
                <li key={item.id}> 
                <span>{item.title} </span> 
                  <ul className={ menu.menu_nav_sub }>
                      {item.subtitle.map((item2) => (
                      <li key={item2.id}>
                          <a href={ item2.link }>
                              <span>{item2.label}</span>
                          </a>
                      </li>
                      ))}
                  </ul>
                </li> 
            ))}
          </ul>
        </nav> 
        <div className={menu.menu_logo} onClick={onClose}> 
            <Link href="/">GOLDENDISCAWARDS</Link>
        </div>
        <button className={menu.menu_icon} onClick={onClose}>
            <span />
        </button>        
    </div> 
  )
} 