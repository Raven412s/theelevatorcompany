import HeroGallery from '@/components/animated/HeroGallery'
import { BackgroundBeams } from '@/components/ui/background-beams'
import { ArrowDown } from 'lucide-react'

type Props = {}

const page = (props: Props) => {
  return (
<div className="flex flex-col gap-5">
<div className='flex w-full px-20'>
        <div className="w-2/5 flex flex-col gap-3 items-center justify-center">
            <h1 className='text-5xl text-left font-bold' >We Present to you <br />Our Gallery</h1>
            <p className='text-lg text-right text-muted-foreground flex items-center justify-end gap-3 font-semibold w-4/5'>scroll down on the images       <ArrowDown/>  </p>
        </div>
        <div className="w-3/5">
        <HeroGallery/>
        </div>
        <BackgroundBeams className='bg-slate-950'/>
    </div>
    <section className="h-screen ">
        </section>
</div>
  )
}

export default page
