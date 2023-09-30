import Title from "@/components/common/Title";
import Vote from '@/components/content/Vote';
import vote from '@/styles/scss/content/vote.module.scss'

export default function VotePage() {
  return (
    <div> 
      <div className={vote.vote2_img}> 
        <img src={`/images/content/vote/vote_img.png` } alt=""/>
      </div>
      <div className="l-content"> 
        <div>
          <Title name="VOTE" />
        </div>
        <div className={vote.vote2_wrap}>
          <Vote show="false" align="left" />
        </div>
      </div>
    </div>
  )
}