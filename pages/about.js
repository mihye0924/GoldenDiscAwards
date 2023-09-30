import Title from "@/components/common/Title";
import about from "@/styles/scss/content/about.module.scss";   
import GoogleMapReact from 'google-map-react';

export default function AboutPage() {     
  const API_KEY = 'AIzaSyBppLV6d0uhIXxRrbmWylMUsbKRZBVyuDw'

  const defaultProps = {
    center: {
      lat: 13.755935,
      lng: 100.621239
    },
    zoom: 13
  };
  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  return (
    <div>
      <div className="l-content">
        <Title name="ABOUT AWARDS" />
      </div>
      <div className={about.about_img}>
        <img src={`/images/content/about/about.png`} alt='about' /> 
      </div>
      <div className="l-content">
        <div className={about.about_text}>
          <p className={about.about_text_1}>
            공정하고 객관적인 최고 권위의<br />
            대중음악시상식 골든디스크어워즈
          </p>
          <span className={about.about_text_2}>
            골든디스크어워즈는 한 해 동안 대중에게 큰 사랑을 받은 대한민국 대중음악을 선정, 결산하는 무대입니다. <br />
            1986년 제1회 개최 이래 공정성과 객관성, 권위를 인정받아 &apos;가수들이 가장 받고 싶어하는 상&apos;으로 자리매김 했습니다.<br />
            한 해 동안 발매된 음반 판매량과 디지털음원 이용량에 가장 중요한 비중을 두고<br />
            업계 전문가의 공정한 평가로 수상자를 결정함으로써 그 어떤 시상식보다 아티스트와 대중으로부터 큰 신뢰와 권위를 얻고 있는 시상식으로 평가받고 있습니다.
          </span>
        </div>
        <div className={`${about.about_intro} ${about.about_intro_pc}`}>
          <p>제36회 골든디스크어워즈</p>
          <table className={about.about_table_1}>
            <colgroup>
              <col width="10%" />
              <col width="8%" />
              <col width="82%" />
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
                  <div style={{  width: '100%', height: '580px' }}>
                    <GoogleMapReact
                      bootstrapURLKeys={{ key: API_KEY }}
                      defaultCenter={defaultProps.center}
                      defaultZoom={defaultProps.zoom}
                    >
                      <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                      />
                    </GoogleMapReact> 
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <table className={about.about_table_2}>
            <colgroup>
              <col width="15%" />
              <col width="8%" />
              <col width="82%" />
            </colgroup>
            <tbody>
              <tr>
                <td rowSpan="3" className={about.about_table_t}>SPONSOR</td>
                <td>방송</td>
                <td>
                  <div>
                    <img src={`/images/content/jtbc.png`} alt="jtbc" />
                    <img src={`/images/content/jtbc2.png`} alt="jtbc2" />
                    <img src={`/images/content/jtbc4.png`} alt="jtbc4" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>중계</td>
                <td>
                  <div>
                    <img src={`/images/content/tiktok_3.png`} alt="tiktok" />
                    <img src={`/images/content/tbc_channel.png`} alt="tbc_channel" />
                    <img src={`/images/content/paravi.png`} alt="paravi" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>협찬</td>
                <td>
                  <div>
                    <img src={`/images/content/tiktok_3.png`} alt="tiktok" />
                    <img src={`/images/content/baoji.png`} alt="baoji" />
                    <img src={`/images/content/hyundai.png`} alt="hyundai" />
                    <img src={`/images/content/ace.png`} alt="ace" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={`${about.about_intro} ${about.about_intro_mo}`}>
          <p>제36회 골든디스크어워즈</p>
          <ul className={about.about_intro_ul_1}>
            <li>INFORMATION</li>
            <li>
              <span>일시</span>
              <span>2023년 1월 7일 (토) 오후 8시 (KST 8:00 PM)</span>
            </li> 
            <li>
              <span>장소</span>
              <span>태국 방콕 라자망갈라 스타디움 2F</span>
            </li>  
            <li>
              <div style={{ width: '100%', height: '580px' }}>
                <GoogleMapReact
                  bootstrapURLKeys={{ key: API_KEY }}
                  defaultCenter={defaultProps.center}
                  defaultZoom={defaultProps.zoom}
                >
                  <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                  />
                </GoogleMapReact> 
              </div> 
            </li>  
          </ul> 
          <ul className={about.about_intro_ul_2}> 
            <li>SPONSOR</li>
            <li>
              <span>방송</span>
              <div>
                <img src={`/images/content/jtbc.png`} alt="jtbc" />
                <img src={`/images/content/jtbc2.png`} alt="jtbc2" />
                <img src={`/images/content/jtbc4.png`} alt="jtbc4" />
              </div>
            </li> 
            <li>
              <span>중계</span>
              <div>
                <img src={`/images/content/tiktok_3.png`} alt="tiktok" />
                <img src={`/images/content/tbc_channel.png`} alt="tbc_channel" />
                <img src={`/images/content/paravi.png`} alt="paravi" />
              </div>
            </li> 
            <li>
              <span>협찬</span>
              <div>
                <img src={`/images/content/tiktok_3.png`} alt="tiktok" />
                <img src={`/images/content/baoji.png`} alt="baoji" />
                <img src={`/images/content/hyundai.png`} alt="hyundai" />
                <img src={`/images/content/ace.png`} alt="ace" />
              </div>
            </li> 
          </ul>
        </div>
      </div>
    </div>
  );
}

 