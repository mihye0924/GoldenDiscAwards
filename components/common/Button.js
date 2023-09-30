import button from '@/styles/scss/common/button.module.scss' 
import Context from '@/context/context';
import { useContext } from 'react';
 

export default function Button({ name, more, align }) {  
  const { prefix } = useContext(Context);
  return (
    <div className={ button.button_wrap }>
      <div className="flex space-between">
        <div className={`${button[align]} ${button.button_title_wrap}`}>
          <h2 className={ button.button_title }>{name}</h2>
          {!more && <span>GOLDEN DISC AWARDS</span>}
        </div>
        {!more && 
          <button>
            더보기
            <p>
              <img src={ `${prefix}/images/common/right_btn.png` } alt=''/>
            </p>
          </button>
        }
      </div>
    </div>
  )
}