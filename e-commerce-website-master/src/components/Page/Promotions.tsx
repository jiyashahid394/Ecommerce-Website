import Image from "next/image";

function Promotions() {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center">
        <h4 className="p-7 text-blue-700 scroll-m-20 text-xl font-sans tracking-tight">
          Promotions
        </h4>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-bold tracking-tight first:mt-0">
          Our Promotion Events
        </h2>
      </div>
      <div className="flex flex-col md:flex-row p-3 gap-3">
        <div className="flex flex-col gap-3 ">
          <div className="bg-slate-300 flex items-center flex-grow">
            <Image
              src={'/Promotion1.webp'}
              alt="Promotion"
              height={362}
              width={282}
            />
            <div className="flex flex-col items-center p-2">
            <p className="text-black font-bold text-xl ">
            GET UP TO 60%
            </p>
            <p className="text-black font-semibold leading-7 [&:not(:first-child)]:mt-1">
            For the summer season
            </p>
            </div>
          </div>
  
          <div className="flex flex-col items-center justify-center bg-black">
            <h1 className="p-4 text-5xl text-white font-extrabold tracking-tight lg:text-6xl">
              GET 30% Off
            </h1>
            <p className="text-white leading-7 [&:not(:first-child)]:mt-1">
              USE PROMO CODE 
            </p>
            <p className="text-white p-2 mb-1 font-bold bg-gray-700 rounded-md leading-7 [&:not(:first-child)]:mt-1">
              DINEWEEKENDSALE 
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3">
          <figure className="flex flex-grow bg-purple-200">
            <Image
              src={'/Promotion2.webp'}
              alt="Promotion"
              height={362}
              width={282}
            />
          </figure>
          <figure className="flex flex-grow bg-green-100  ">
            <Image
              src={'/Promotion3.webp'}
              alt="Promotion"
              height={362}
              width={282}
            />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default Promotions;
