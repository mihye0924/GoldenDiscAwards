import Title from "@/components/common/Title";
import { noticeList } from "../api/Notice"  
import notice from '@/styles/scss/content/notice.module.scss'
import { useRouter } from "next/router";
import Link from "next/link";

export default function Notice1() { 
  const router = useRouter();
  const { query } = router;   
 
  return (
    <div className="l-content">
      <Title name="NOTICE" /> 
      <div className={notice.notice_list_wrap}>
        <p>골든디스크어워즈의 새로운 소식을 전해드립니다.</p> 
        <div className={notice.notice_list_title}>
          {
            noticeList.map((item) => {
              return ( 
                item.id === Number(query.id) &&
                <table key={item.id} className={`table ${notice.notice_list_table}`}>
                  <colgroup>
                    <col width="15%" />
                    <col width="85%" />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>제목</th>
                      <td>{item.title}</td>
                    </tr>
                    <tr>
                        <td colSpan="2" className={`${notice.notice_list_table_content}`}>{item.content}</td>
                      </tr>
                  </tbody>
                </table>
              )
            })
          }
        </div>
        <table className={`table ${notice.notice_list_table}`}>
          <colgroup>
            <col width="15%" />
            <col width="85%" />
          </colgroup>
          <tbody>
            <tr>
              <th>이전글</th>
              <td>
                {
                  Number(query.id -1) === 0 ? 
                      <span>이전 글이 없습니다.</span>
                   :
                  noticeList.map((item) => {
                    return (
                      item.id === Number(query.id) -1 &&
                        <Link key={item.id} href={`${item.id}`}>{item.title}</Link>
                      )
                    })

                }
              </td>
            </tr>
            <tr>
              <th>다음글</th>
              <td>
                
                {
                  Number(query.id - 1) === noticeList.length -1 ? 
                      <span>다음 글이 없습니다.</span>
                  : noticeList.map((item) => {
                  return (
                    item.id === Number(query.id)+1 && 
                    <Link key={item.id} href={`${item.id}`}>{ item.title }</Link>
                  )  
                }) 
                }
              </td>
            </tr>
          </tbody>
        </table>
        <button className={notice.notice_list_button} onClick={() => { router.push('/notice') }}>
          <span>목록</span>
        </button>
      </div>
    </div>
  )
}