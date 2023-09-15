 import pagination from '@/styles/scss/common/pagination.module.scss' 
import Context from '@/context/context';
import { useContext } from 'react';

export default function Pagination({ limit, totalPage, onClick, currentButton }) { 
  const { prefix } = useContext(Context);
  const total = Math.ceil(totalPage / limit) // 총 페이지 갯수, (리스트 / 10)
  const totalButton = [] // 버튼 뿌리기
  for (let i = 1; i <= total; i++){
    totalButton[i] = i
  }  
  return (
    <div className={pagination.pagination_wrap}>
      <button className={pagination.pagination_left}>
        <img src={`${prefix}/images/common/left_btn.png`} alt="왼쪽" />
      </button>
      { 
        totalButton.map((item, id) => (   
          <button
          key={id}
          onClick={onClick}
          className={item === currentButton ?
            pagination['pagination_active'] : ''}
            >{item}</button>
            ))
          }
        <button className={pagination.pagination_right}>
          <img src={`${prefix}/images/common/right_btn.png`} alt="오른쪽" />
        </button>
    </div>
  )
}