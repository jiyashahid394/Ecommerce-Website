import  {Products}  from "@/utils/products";
import Image from "next/image";
import Quantity from "@/components/Page/Quantity";
import AddToCart from "@/components/Page/AddToCart";

const getDetail = (id: number | string)=>{
  return Products.filter((val)=> val.id == id)
}
const variants=["XS","S","M","L","XL"];

function GetProductsDetail({ params }: { params: { id: string } }) {
  const result= getDetail(params.id)
  return(
    <div>
      {
        result.map((item=>(
          <>
          <div  className="flex flex-row items-start gap-10">
          <div>
          <Image src={item.src.src} alt="Image" height={150} width={150}/>
          </div>
          <div>
          <Image src={item.src.src} alt="Image" height={550} width={550}/>
          </div>
          <div className="flex flex-col justify-start gap-2 mt-28">
            <div className="text-2xl"> {item.name} </div>
            <div className="font-bold text-slate-400"> {item.product} </div>
            <div className='flex flex-col gap-x-4 mt-1'>
            <span className="font-semibold">Select size</span>
            <div className="flex flex-row gap-1">
                    {
                      variants.map((item, i) => (
                        <div key={i} className='flex h-10 w-10 border border-gray-100 rounded-full hover:shadow-2xl mt-2 justify-center items-center'>
                          <span className='font-semibold text-center text-gray-600'>{item}</span>
                        </div>
                      ))
                    }
            </div>
                  </div>
            <div className="flex flex-col justify-center"> 
              <span className="font-semibold">Quantity:</span>
              <div className="ml-5">   
              <Quantity/>
              </div>
            </div>
            <AddToCart/>
          </div>
          </div>
          <div className="mt-20 pl-7 md:pl-20 p-9 items-center bg-slate-50 mb-4">
            <div className="relative">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-9xl opacity-5">
              Overview
            </h1>
            <h3 className="scroll-m-20 text-2xl font-bold tracking-tight absolute inset-x-1 bottom-10 mx-auto">
              Product Information
            </h3>
            </div>
            <div className="flex flex-row gap-48 mt-16">
              <h3 className="font-bold text-gray-600 mt-5">PRODUCT DETAILS</h3>
              <p className="font-serif text-gray-700 text-lg basis-2/3">{item.productDetail}</p>
            </div>
            <div className="flex flex-row gap-52 mt-16">
              <h3 className="font-bold text-gray-600 mt-5">PRODUCT CARE</h3>
              <ul className="list-disc font-serif text-gray-700 text-lg basis-2/3">
                <li>Hand wash using cold water.</li>
                <li>Do not using bleach.</li>
                <li>Hang it to dry.</li>    
              </ul>
            </div>
            </div>
        </>
        )))
      }
    </div>
  )
  };

export default GetProductsDetail;