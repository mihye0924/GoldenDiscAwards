import Title from "@/components/common/Title";
import gdanow from '@/styles/scss/content/gdanow.module.scss';
import { useState } from "react";
import { GdaNowNav, twentythree, twentytwo, twentyone, twenty } from '@/pages/api/GdaNow'
import Link from "next/link";


export default function GdaNow() {
  const [active, setActive] = useState('2023');
  const [value, setValue] = useState(15) 
  const limit = 6 

  const list = 
    {
      '2023': twentythree,
      '2022': twentytwo,
      '2021': twentyone,
      '2020': twenty
    }   
  const handleActive = (e) => { 
    setActive(e.target.innerText) 
    setValue(15)
  }; 
  const handleMoreBtn = () => { 
    if (value <= list[active].length) {
      setValue(value + limit)  
    } 
  } 
  return (
    <div className="l-content">
      <div>
        <Title name="GDA NOW" />
      </div>
      <nav className={gdanow.gdanow_wrap}>
        <ul className={gdanow.gdanow_ul}>
            {GdaNowNav.map((item, id) => (
              <li key={id}
                className={
                  `${item.title === active ? gdanow['active'] : ''}`
                }>
                <button onClick={handleActive}>
                  {item.title}
                </button>
              </li>
            ))}
        </ul>
        {
          <div className={gdanow.gdanow_content}>
            <ul id="content" className={gdanow.gdanow_content_ul}> 
                { 
                  list[active].map((item, index) => ( 
                  index < value &&
                  <li key={item.id}>
                    <Link href={item.link}>
                      <div>
                        <img src={item.img} alt="" /> 
                        <span>{item.time}</span>
                      </div>
                      <p>{item.title}</p> 
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
        }
        {
        value + limit <= list[active].length &&
          <button className={gdanow.gdanow_button} onClick={handleMoreBtn}>MORE
            <span>+</span>
          </button>
        }
      </nav>
    </div>
  )
}