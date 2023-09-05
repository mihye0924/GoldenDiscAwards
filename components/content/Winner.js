import winner from '@/styles/scss/content/winner.module.scss'
import Button from '@/components/common/Button' 
export default function Winner() {
  return (
    <div className='l-content'>
      <div className={winner.winner_wrap}>
        <Button name="WINNERS"/>
        <div className={winner.winner_box}>
          <div className={`${winner.winner_box_img}`}>
            <div className={winner.winner_box_t}>
                <p>골든디스크어워즈</p>
                <p>디지털 음원 대상</p>
                <p>IVE - LOVE DIVE</p>
            </div>
                <img src={`/images/content/winner_ive_2.jpg`} alt="아이브_2" />
                <img src={`/images/content/winner_ive.png`} alt="아이브" />
          </div> 
        </div>
        <div className={winner.winner_box}>
           <div className={`${winner.winner_box_img}`}>
                <img src={`/images/content/winner_bts.png`} alt="방탄소년단" />
                <img src={`/images/content/winner_bts_2.jpg`} alt="방탄소년단" />
            <div className={winner.winner_box_t}>
                <p>골든디스크어워즈</p>
                <p>음반 대상</p>
                <p>방탄소년단 - Proof</p>
            </div>
            </div> 
        </div>
      </div>
    </div>
  )
}