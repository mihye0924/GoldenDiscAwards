import { FNavList } from '@/pages/api/FNav'
import Link from 'next/link'
import fnav from '@/styles/scss/layout/fnav.module.scss'

export default function FNav() {
  return (
    <div>
      <ul className={ fnav.fnav_wrap }>
        {FNavList.map((item) => ( 
            <li key={item.id}>
              <Link href={item.link}>
                <span>{item.title} </span>
              </Link> 
              <ul className={ fnav }>
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
  )
}