import winner from '@/styles/scss/content/winner.module.scss'
import Button from '@/components/common/Button'

const winnerList = [
  {
    id: 1,
    img: '/images/content/winner_ive',
    alt: '아이브',
    title: '디지털 음원 대상',
    singer: 'IVE',
    record: 'LOVE DIVE'
  },
  {
    id: 2,
    img: '/images/content/winner_bts',
    alt: '방탄소년단',
    title: '음반 대상',
    singer: '방탄소년단',
    record: 'Proof'
  },
]

export default function Winner() {
  return (
    <div className={winner.winner_wrap}>
      <Button name="WINNERS"/>
      <div className={winner.winner_box}>
        {winnerList.map((item) => (  
        <div key={item.id}>
          <div className={`${winner.winner_box_img}`}>
              <img src={`${item.img}.png`} alt={item.alt} />
          </div> 
          <div className={winner.winner_box_t}>
              <p>{item.title}</p>
              <p>{item.singer}</p>
              <p>{item.record}</p>
          </div>
        </div>  
        ))}
      </div>
    </div>
  )
}