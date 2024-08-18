import Image from "next/image";
import Link from "next/link";
import { Products } from "@/utils/products";

function WhatWeHave() {
    const limit = 3;
const limitedProducts = Products.slice(0, limit); 

    return ( 
        <>
        <h4 className="p-7 text-blue-700 scroll-m-20 text-xl font-sans tracking-tight">
          Products
        </h4>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-bold tracking-tight first:mt-0">
        Check What We Have
      </h2>
      <div className="flex flex-wrap">
    <div className="flex flex-col md:flex-row items-center justify-center p-6 gap-3">
      {limitedProducts.map((value) => (
        <div className="transform hover:scale-110 transition-transform duration-300 ease-in-out w-full max-w-[65rem]">
        <Link href={`/allProducts/${value.id}`} key={value.id}>  
          <Image src={value.src.src} alt="photo" width={350} height={350}/>
          <p className="font-semibold">{value.name}</p>
          <p className="font-bold">{value.price}</p>
        </Link>
        </div>  
      ))} 
      
    </div>
  </div>
      </>
     );
}

export default WhatWeHave;