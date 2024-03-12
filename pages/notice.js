import Title from "@/components/common/Title";
import notice from '@/styles/scss/content/notice.module.scss'
import { noticeList } from "./api/Notice"; 
import Link from "next/link";
import React, { useState } from "react"; 
import Pagination from "react-js-pagination";  

export default function NoticePage() { 
  const [page, setPage] = useState(0); 
  const [limit, setLimit] = useState(10)
  const [activePage, setActivePage] = useState(1); 

  const handlePageChange = (activePage) => {
    setActivePage(activePage)
    setPage(activePage * 10 - 10)
    setLimit(activePage * 10)
  }  

  return(
    <div className="l-content"> 
      <Title name="NOTICE" />
      <div className={notice.notice_wrap}>
        <p>골든디스크어워즈의 새로운 소식을 전해드립니다.</p> 
        <table className={`table ${notice.notice_table}`}>
          <colgroup>
            <col width="10%" /> 
            <col width="80%" /> 
            <col width="10%" />
          </colgroup>
          <tbody>
            <tr>
              <th>NO</th>
              <th>제목</th>
              <th>날짜</th>
            </tr>
            { 
              noticeList.slice(page, limit).map((item,id) => (  
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td><Link href={`notice/${item.id}`}>{item.title}</Link></td>
                  <td>{item.date}</td>
                </tr> 
              ))
            }
          </tbody>
        </table> 
        <Pagination 
          activePage={activePage} // 현재 페이지
          itemsCountPerPage={10} // 한 페이지랑 보여줄 아이템 갯수
          totalItemsCount={noticeList.length} // 총 아이템 갯수
          pageRangeDisplayed={5} // paginator의 페이지 범위
          prevPageText={"‹"} // "이전"을 나타낼 텍스트
          nextPageText={"›"} // "다음"을 나타낼 텍스트
          onChange={handlePageChange} // 페이지 변경을 핸들링하는 함수 
        />
      </div>
    </div>
  )
}