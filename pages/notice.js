import Title from "@/components/common/Title";
import notice from '@/styles/scss/content/notice.module.scss'
import { noticeList } from "./api/Notice";
import Pagination from "@/components/common/Pagination";
import Link from "next/link";

export default function NoticePage() {
  const limit = 10;
  const page = 1;

  return(
    <div className="l-content"> 
      <div className={notice.notice_wrap}>
        <Title name="NOTICE" />
        <p>골든디스크어워즈의 새로운 소식을 전해드립니다.</p>
      </div>
      <table className={notice.notice_table}>
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
            noticeList.map((item) => (
              item.id <= limit &&
              <tr key={item.id}>
                <td>{item.id}</td>
                <td><Link href={item.link}>{item.title}</Link></td>
                <td>{item.date}</td>
              </tr> 
            ))
          }
        </tbody>
      </table>
      <Pagination limit={limit} page={page} totalPage={noticeList.length} />
    </div>
  )
}