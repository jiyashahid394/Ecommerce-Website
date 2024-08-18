import Image from 'next/image';
import Button from '@/components/Page/Button'
import Sales from '@/components/Page/Sale'
import Featured from '@/components/Page/Featured';

function MainPoster() {
    return ( 
        
    <div className="flex flex-col md:flex-row flex-basis justify-between">
            <div className="flex flex-col justify-center basis-1/3 gap-1">
            <Sales/>
            <h1 className="p-4 scroll-m-20 text-4xl md:text-8xl font-extrabold tracking-tight lg:text-6xl">
            An Industrial Take on Streetwear
            </h1>
            <p className="p-4 leading-7 [&:not(:first-child)]:mt-4">
            Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
            </p>
            <Button/>
            <Featured/>
            </div>
            <div className='p-6'>
            <div className="w-auto h-auto bg-purple-100 flex items-center justify-center rounded-full">
              <Image
                src={'/header.webp'}
                alt='header'
                height={600}
                width={600}
              />
    </div>     
    </div>
        </div>
        
     );
}

export default MainPoster;