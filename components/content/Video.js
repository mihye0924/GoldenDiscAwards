import video from '@/styles/scss/content/video.module.scss'
import Button from '@/components/common/Button'
export default function Video() {
  return (
    <div className="l-content">
      <div className={ video.video_wrap } >
        <Button name="VIDEOS" />
        <div className={video.video_box_wrap}>
          <div className={ video.video_box }>
            <img src='/images/content/video_ive.jpg' alt='아이브' />
            <p>[제37회 골든디스크] 디지털 음원 부문 대상 - IVE</p>
            <p>JTBC 230107</p>
          </div>
          <div className={ video.video_box }>
            <img src='/images/content/video_bts.jpg' alt='방탄소년단' />
            <p>[제37회 골든디스크] 음반 부문 대상 - 방탄소년단</p>
            <p>JTBC 230107</p>
          </div>
          <div className={ video.video_box }>
            <img src='/images/content/video_song_joong_gi.jpg' alt='송중기' />
            <p>[제37회 골든디스크] 음반 부문 대상 시상자 - 홍정도 & 송중기</p>
            <p>JTBC 230107 방송</p>
          </div>
        </div>
      </div>
    </div>
  )
}