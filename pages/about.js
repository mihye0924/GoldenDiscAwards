import Title from "@/components/common/Title";
import about from "@/styles/scss/content/about.module.scss"

export default function aboutPage() {
  return (
    <div>  
      <div className="l-content">
        <Title name="ABOUT AWARDS" /> 
      </div>
      <div className={about.about_img}>
        <img src="/images/content/about/about.png" alt='about' />
      </div>
      <div className="l-content">
        <div className={about.about_text}>
          <p className={about.about_text_1}>
            공정하고 객관적인 최고 권위의<br />
            대중음악시상식 골든디스크어워즈
          </p>
          <p className={about.about_text_2}>
            골든디스크어워즈는 한 해 동안 대중에게 큰 사랑을 받은 대한민국 대중음악을 선정, 결산하는 무대입니다. <br/>
            1986년 제1회 개최 이래 공정성과 객관성, 권위를 인정받아 &apos;가수들이 가장 받고 싶어하는 상&apos;으로 자리매김 했습니다.<br/>
            한 해 동안 발매된 음반 판매량과 디지털음원 이용량에 가장 중요한 비중을 두고<br/>
            업계 전문가의 공정한 평가로 수상자를 결정함으로써 그 어떤 시상식보다 아티스트와 대중으로부터 큰 신뢰와 권위를 얻고 있는 시상식으로 평가받고 있습니다.
          </p>
        </div>
        <div className={about.about_intro}>
          <p>제36회 골든디스크어워즈</p>
          <table className={about.about_table_1}>
          <colgroup> 
            <col width="10%" /> 
            <col width="8%" /> 
            <col width="85%" /> 
          </colgroup>
            <tbody>
              <tr>
                <td rowSpan="3" className={about.about_table_t}>
                INFORMATION
                </td>
                <td>일시</td>
                <td>2023년 1월 7일 (토) 오후 8시 (KST 8:00 PM)</td>
              </tr>
              <tr>
                <td>장소</td>
                <td>태국 방콕 라자망갈라 스타디움 2F</td>
              </tr>
              <tr>
                <td colSpan="2">
                  <img src="/images/content/about/map.png" alt="" />
                </td>
              </tr>
            </tbody>
          </table>
          <table className={about.about_table_2}> 
            <colgroup> 
              <col width="15%" /> 
              <col width="8%" /> 
              <col width="80%" /> 
            </colgroup>
            <tbody>
              <tr>
                <td rowSpan="3" className={about.about_table_t}>SPONSOR</td>
                <td>방송</td>
                <td>
                  <div>
                    <img src="/images/content/jtbc.png" alt="jtbc" />
                    <img src="/images/content/jtbc2.png" alt="jtbc2" />
                    <img src="/images/content/jtbc4.png" alt="jtbc4" />
                  </div> 
                </td>
              </tr>
              <tr> 
                <td>중계</td>
                <td>
                  <div>
                    <img src="/images/content/tiktok_3.png" alt="tiktok"/>
                    <img src="/images/content/tbc_channel.png" alt="tbc_channel"/>
                    <img src="/images/content/paravi.png" alt="paravi"/>
                  </div>
                </td>
              </tr>
              <tr> 
                <td>협찬</td>
                <td>
                  <div>
                    <img src="/images/content/tiktok_3.png" alt="tiktok"/>
                    <img src="/images/content/baoji.png" alt="baoji"/>
                    <img src="/images/content/hyundai.png" alt="hyundai"/>
                    <img src="/images/content/ace.png" alt="ace"/>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <div className={about.about_division}>
          <p>Division</p>
          <div className={about.about_division_div}>
            한 해 동안 발매된 음반 판매량과 디지털음원 이용량에 가장 중요한 비중을 두고<br/>
            업계 전문가의 공정한 평가로 수상자를 결정함으로써 그 어떤 시상식보다 아티스트와 대중으로부터 큰 신뢰와 권위를 얻고 있는 시상식으로 평가받고 있습니다.
          </div>
        </div> */}
      </div>
    </div>
  )
}