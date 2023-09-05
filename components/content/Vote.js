import vote from '@/styles/scss/content/vote.module.scss'
import Button from '@/components/common/Button'

export default function Vote({ show, align }) {
  return (
    <div className={`${vote.vote_wrap} ${vote[`vote_${align}`]}`}>
      {
        !show &&
        <Button name="VOTE" more="false" align="center" />
      }
      <div className={vote.vote_title}>
        12월 20일(화) 오전 11시(KST)부터
        <p className={vote.vote_img}>
          <img src="/images/content/tiktok.png" />
          골든디스크 인기상 투표가 시작됩니다.
        </p>
      </div>
      <div className={vote.vote_sub_title_1}>
        총 10일간 오로지 틱톡에서만 진행되는 단독 글로벌 공식 투표에 참여하고 골든디스크어워즈 보러 가자!<br/>
        지금 바로 올해의 공식 골든디스크어워즈 인기상 투표에 참여하세요!
      </div>
      <div className={vote.vote_sub_title_2}>
        지금 바로 올해의 공식 골든디스크어워즈 인기상 투표에 참여하세요! <br/>
        추첨을 통해 골든디스크어워즈 방콕 현장 티켓(1인 2매)과 행운의 10명(1인 2매)에게는 항공권, 숙박권, 현장 티켓 모두 풀 패키지로 드립니다.
      </div>
      <div className={vote.vote_border}></div>
      <table className={vote.vote_table}>
        <tbody>
          <tr>
            <td>투표기간</td>
            <td>2023.12.20일 11:00 ~ 2023.12.29일 16:00  KST </td>
          </tr>
          <tr>
            <td>투표방법</td>
            <td>
              <ul>
                <li>틱톡(TikTok) 앱에서 ‘골든디스크’  또는 영문 ‘Goldendisc’ 검색</li>
                <li>아래 QR 코드를 스캔하여 틱톡앱에서 투표를 진행해주세요.</li>
                <li>틱톡(TikTok) 앱에서 ‘골든디스크’  또는 영문 ‘Goldendisc’ 검색</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>QR코드</td>
            <td>
              <img src="/images/content/tiktok_qr.png" alt='틱톡QR' />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}