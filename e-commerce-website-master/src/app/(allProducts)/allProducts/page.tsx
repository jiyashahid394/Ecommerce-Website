import { Products } from "@/utils/products";
import Image from "next/image";
import Link from "next/link";



function AllProducts () {
    return ( 
        <div className="min-h-screen">
        <div className="flex flex-col md:flex-row items-center justify-center flex-wrap p-6 gap-7">
          {Products.map((value)=>(
          <Link href={`/allProducts/${value.id}`} key={value.id}>  
          <Image src={value.src.src} alt="photo" width={250} height={250}/>
          <p className="font-semibold">{value.name}</p>
          <p className="text-slate-500 font-semibold">{value.product}</p>
          <p className="font-bold">{value.price}</p>
        </Link>  
))} 
        </div>
        </div>
     );
}

export default AllProducts;