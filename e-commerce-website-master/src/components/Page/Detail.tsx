import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button"

function Detail() {
    return (
        <>
        <div className="flex justify-end pt-14 mt-11">
        <h1 className="w-1/2 scroll-m-20 text-3xl font-bold tracking-tight lg:text-5xl">
        Unique and Authentic Vintage Designer Jewellery
    </h1>
    </div>
        <div className="relative flex flex-basis bg-slate-50 py-6 my-8">
            <div className="flex basis-1/2 relative">
            <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-9xl opacity-5">
              Different From Others
            </h1>
            <div className="absolute">
            <div className="flex flex-basis justify-center items-center gap-4 p-4">
            <div className="gap-4 basis-1/2">
            <p className="font-bold">Different from others</p>    
            <p>
                Using Good Quality Materials
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            </div>
            <div className="basis-3/2">
            <p className="font-bold"> 100% Handmade Products</p>   
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            </div>
        </div>
        <div className="flex justify-center items-center gap-4 p-4 basis-3/2">
            <div>
            <p className="font-bold"> Modern Fashion Design</p>   
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            </div>
            <div className="basis-3/2">
            <p className="font-bold">Discount for Bulk Orders</p>    
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            </div>
        </div>
        </div>
            </div>
            <div className="basis-3/2 relative">
             <div className="flex justify-around gap-5">
        <div>
          <Image src={"/product7.png"} alt="image" height={400} width={400}/>
        </div>
          <div className="basis-1/2 my-4">
             <p className="w-40 font-serif mb-9">This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
          <Link href={"/allProducts"}><Button className="bg-black text-white">All Products</Button></Link>
        </div>
        </div>
        </div>
        </div>
        </>
    );
}

export default Detail;


