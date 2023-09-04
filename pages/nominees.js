import Title from "@/components/common/Title";
import nomineesS from '@/styles/scss/content/nominees.module.scss';
import { useEffect, useState } from "react";
import { NomineesNav, NomineesContent } from '@/pages/api/Nominess'

export default function Nominees() {
  const [active, setActive] = useState('전체'); 
  const handleActive = (e) => { 
    setActive(e.target.innerText)

  }; 
  return (
    <div className="l-content">
      <div>
        <Title name="NOMINESS" />
      </div>
      <div className={nomineesS.nominees_wrap}>
        <ul className={nomineesS.nominees_ul}>
          {NomineesNav.map((item, id) => (
            <li key={id}
              className={
                `${item.title === active ? nomineesS['active'] : ''}`
              }>
              <button onClick={handleActive}>
                {item.title}
              </button>
            </li>
          ))}
        </ul>
        { active == '디지털음원부문' &&
          <div className={nomineesS.nominees_content}>
            <div className={nomineesS.nominees_content_left}>
              <img src='/images/content/nominess/digital01.jpg' alt="IVE" />
              <p>디지털 음원대상</p>
              <p>IVE</p>
              <p>LOVE DIVE</p>
            </div>
            <div className={nomineesS.nominees_content_right}>
              {
                NomineesContent.soundTrak.map((item) => (
                  <li key={item.id}>
                    <div>
                      <img src={item.img} alt={item.title} />
                      <p>{item.awards}</p>
                      <p>{item.title}</p>
                      <p>{item.subTitle}</p>
                    </div>
                  </li>
                ))
              }
            </div>
          </div>
        }
         { active == '음반부문' &&
          <div className={nomineesS.nominees_content}>
            <div className={`${nomineesS.nominees_content_left} ${nomineesS.nominees_content_left_record}`}>
              <img src='/images/content/nominess/record01.jpg' alt="IVE" />
              <p>디지털 음반대상</p>
              <p>방탄소년단</p>
              <p>Proof</p>
            </div>
            <div className={`${nomineesS.nominees_content_right} ${nomineesS.nominees_content_right_record}`}>
              {
                NomineesContent.record.map((item) => (
                  <li key={item.id}>
                    <div>
                      <img src={item.img} alt={item.title} />
                      <p>{item.awards}</p>
                      <p>{item.title}</p>
                      <p>{item.subTitle}</p>
                    </div>
                  </li>
                ))
              }
            </div>
          </div>
        }
        { active == '기타' &&
          <div className={nomineesS.nominees_content}>
            <div className={`${nomineesS.nominees_content_right} ${nomineesS.nominees_content_right_etc}`}>
              {
                NomineesContent.etc.map((item) => (
                  <li key={item.id}>
                    <div>
                      <img src={item.img} alt={item.title} />
                      <p>{item.awards}</p>
                      <p>{item.title}</p>
                    </div>
                  </li>
                ))
              }
            </div>
          </div>
        }
      </div>
    </div>
  );
}
