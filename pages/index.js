import Main from '@/components/content/Main'
import Winner from '@/components/content/Winner'
import Video from '@/components/content/Video'
import Vote from '@/components/content/Vote'

export default function Home() {  

  return ( 
    <div className="l-content">  
      <Main/>
      <Winner />
      <Video />
      <Vote />
    </div> 
  )
}