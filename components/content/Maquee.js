import { maquee } from '@/pages/api/Maquee'
import maq from '@/styles/scss/content/maquee.module.scss'
import Marquee from "react-fast-marquee";


export default function Maquee() {
  return (
    <section className="l-content">
      <Marquee speed="50">  
        <div className={maq.maq_wrap}>
          {
            maquee.map((item) => (
              <p key={item.id}>
                <img src={`${ item.img }.png`} alt={ item.alt } />
              </p>
            ))
          }
        </div>
      </Marquee>
    </section>
  )
}