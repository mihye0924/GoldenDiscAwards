import Main from '@/components/content/Main'
import Winner from '@/components/content/Winner'
import Video from '@/components/content/Video'
import Vote from '@/components/content/Vote'
import Maquee from '@/components/content/Maquee'

export default function Home() {  
  return ( 
    <div>  
      <Main/>
      <Winner />
      <Video />
      <Vote /> 
      <Maquee />
    </div> 
  )
}