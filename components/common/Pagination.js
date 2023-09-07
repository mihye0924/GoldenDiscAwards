import { useEffect, useRef, useState } from "react"
import pagination from '@/styles/scss/common/pagination.module.scss'
import { noticeList } from "@/pages/api/Notice";

export default function Pagination({ limit, totalPage, onClick, currentButton }) { 
  const total = Math.ceil(totalPage / limit)
  const totalButton = []
  for (let i = 1; i <= total; i++){
    totalButton[i] = i;
  }  
  return (
    <div className={pagination.pagination_wrap}>
      { 
        totalButton.map((item, id) => (   
          <button
              key={id}
              onClick={onClick}
              className={item === currentButton ? pagination['pagination_active'] : ''}
            >{item}</button>
        ))
      }
    </div>
  )
}