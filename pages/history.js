import Title from "@/components/common/Title";
import history from '@/styles/scss/content/history.module.scss'
import { useEffect, useState } from "react"; 
import HistoryFive from "./api/history/HistoryFive";
import HistoryFour from "./api/history/HistoryFour";
import HistoryThree from "./api/history/HistoryThree";
import HistoryTwo from "./api/history/HistoryTwo";
import HistoryOne from "./api/history/HistoryOne";


export default function HistoryPage() {  
  const list = {
    0 : HistoryFive,
    1 : HistoryFour,
    2 : HistoryThree,
    3 : HistoryTwo,
    4 : HistoryOne,
  }
  const [active, setActive] = useState(list[0]); // list 값 번째 찾기
  const [classActive, setClassActive] = useState(0) // active 된 클래스 
  const [select, setSelect] = useState(false)  // select 열림, 닫힘
  const [selectName, setSelectName]= useState('34~36회(2020년대)') //
  const historyNav = [
    {
      num: 'five',
      label: '34~36회(2020년대)'
    },
    {
      num: 'four',
      label: '25~33회(2010년대)'
    },
    {
      num: 'three',
      label: '15~24회(2000년대)' 
    },
    {
      num: 'two',
      label: '5~14회(1990년대)' 
    },
    {
      num: 'one',
      label: '1~4회(1980년대)' 
    }
  ]   

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })
  // 스크롤 이벤트
  const handleScroll = () => {
    const scroll = window.scrollY; 
    if (scroll > 0) {
      setSelect(false)
    }
  }

  return(
    <div className="l-content"> 
      <div>
        <Title name="HISTORY" />
      </div>
      {/* pc 일경우 */}
      <nav className={`${history.history_wrap} ${history.history_wrap_pc}`}>
        <ul className={history.history_ul}>
            {historyNav.map((item, id) => (
              <li key={id}
                className={
                  `${id === classActive ? history['active'] : ''}`
                }>
                <button onClick={() => { setActive(list[id]); setClassActive(id) }}>
                  {item.label}
                </button>
              </li>
            ))}
        </ul> 
      </nav> 
      {/* mo 일경우 */}
      <button className={
        `${history.history_wrap_mo} ${history.history_wrap_mo_on}` 
      }
        onClick={() => {setSelect(true)}}
      >{selectName}</button>
      <ul className={`${history.history_wrap_mo} ${history.history_wrap_mo_listbox} ${select ? history['on'] : false}`} id="listbox">
        {
          historyNav.map((item, id) => (
            <li key={id}
              className={
                `${id === classActive ? history['active'] : ''}`
              }>
              <button
                onClick={(e) => {
                  setActive(list[id]);
                  setClassActive(id);
                  setSelect(false);
                  setSelectName(item.label)
                }}
                className={history.history_wrap_mo_list}
              >
                {item.label}
              </button>
            </li>
          ))
        }
      </ul>
      <div>
        <div className={history.history_content}>
          { active } 
        </div>
      </div> 
    </div>
  )
}