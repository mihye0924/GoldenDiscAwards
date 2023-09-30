import main from '@/styles/scss/content/main.module.scss'
import Context from '@/context/context';
import { useContext } from 'react';

export default function Main() {
  const { prefix } = useContext(Context);
  return ( 
  <section className={main.main_bg }> 
    <div className={`l-content ${main.main_wrap}` }>
      <div className={main.main_title_t}>
          <p>GOLDEN DISC AWARDS</p>
          <p>2023.01.07</p>
      </div>
      <div className={main.main_img_wrap_1}>
        <div className={main.main_img_wrap_2}>
            <img src={`${prefix}/images/content/main.png` } alt=""  />
        </div>
        </div>
      <div className={main.main_title_b}>
        Golden Disc Awards, the most fair and prestigious awards ceremony,<br/>
        widely presented annually to recognize the outstanding achievements of K-POP industry
      </div> 
    </div>
  </section>
  )
}