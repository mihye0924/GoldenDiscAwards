import { useEffect, useRef, useState } from "react"
import pagination from '@/styles/scss/common/pagination.module.scss'
import { noticeList } from "@/pages/api/Notice";

export default function Pagination({ limit, page, totalPage }) { 
  const [currentPage, setCurrentPage] = useState(1)
  const total = Math.ceil(totalPage / limit)
  const totalButton = []
  for (let i = 1; i <= total; i++){
    totalButton[i] = i;
  } 
  
  const handlePageChange = (e) => {
    setCurrentPage(e.target.innerText)
    console.log(e.target.innerText)
  }
  

  return (
    <div className={pagination.pagination_wrap}>
      {
        totalButton.map((item, id) => (  
          <button
              key={item}
              onClick={handlePageChange}
              className={currentPage}
            >{item}</button>
        ))
      }
    </div>
  )
}