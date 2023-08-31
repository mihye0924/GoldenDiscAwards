import winner from '@/styles/scss/content/winner.module.scss'
import Button from '@/components/common/Button'

export default function Winner() {
  return (
    <div className={winner.winner_wrap}>
      <Button name="WINNERS"/>
      <div className={winner.winner_box}>
        <div>
          <div className={winner.winner_box_img}>
            <img src='/images/content/winner_ive.png' alt="아이브"/>
          </div> 
          <div className={winner.winner_box_t}>
            <p>디지털 음원 대상</p>
            <p>IVE</p>
            <p>LOVE DIVE</p>
          </div>
        </div> 
        <div> 
          <div className={winner.winner_box_img}>
            <img src='/images/content/winner_bts.png' alt="방탄소년단"/>
          </div>
          <div className={winner.winner_box_t}>
            <p>음반 대상</p>
            <p>방탄소년단</p>
            <p>Proof</p>
          </div>
        </div> 
      </div>
    </div>
  )
}