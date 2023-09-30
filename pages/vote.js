import Title from "@/components/common/Title";
import Vote from '@/components/content/Vote';
import vote from '@/styles/scss/content/vote.module.scss'
import Context from '@/context/context';
import { useContext } from 'react'; 

export default function VotePage() {
  const { prefix } = useContext(Context);
  return (
    <div> 
      <div className={vote.vote2_img}> 
        <img src={`${prefix}/images/content/vote/vote_img.png` } alt=""/>
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