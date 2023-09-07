import Title from "@/components/common/Title";
import notice from '@/styles/scss/content/notice.module.scss'
import { noticeList } from "./api/Notice";
import Pagination from "@/components/common/Pagination";
import Link from "next/link";
import { useState } from "react";

export default function NoticePage() {
  const [currentButton, setCurrentButton] = useState(1) 
  const [limit, setLimit] = useState(10)  
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(10) 

  const handlePageChange = (e) => { 
    console.log(e.target.innerText)
    setCurrentButton(Number(e.target.innerText))  
    setLimit(limit + 10) 
    setMin(min + 10)
    setMax(max + 10)
  }
  
  return(
    <div className="l-content"> 
      <Title name="NOTICE" />
      <div className={notice.notice_wrap}>
        <p>골든디스크어워즈의 새로운 소식을 전해드립니다.</p> 
        <table className={`table ${notice.notice_table}`}>
          <colgroup>
            <col width="10%" /> 
            <col width="70%" /> 
            <col width="20%" />
          </colgroup>
          <tbody>
            <tr>
              <th>NO</th>
              <th>제목</th>
              <th>날짜</th>
            </tr>
            { 
              noticeList.map((item, index) => (
                index < limit && (min <= limit && limit <= max ) &&
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td><Link href={item.link}>{item.title}</Link></td>
                  <td>{item.date}</td>
                </tr> 
              ))
            }
          </tbody>
        </table>
        <Pagination
          limit={limit}
          currentButton={currentButton}
          totalPage={noticeList.length}
          onClick={handlePageChange}
        />
      </div>
    </div>
  )
}