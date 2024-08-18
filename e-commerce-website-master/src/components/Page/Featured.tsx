import Image from "next/image";
function Featured() {
    return (
         <div className="flex p-4 gap-3">
              <Image
              src={'/Featured1.webp'}
              alt="Featured"
              height={120}
              width={120}
              />
              <Image
              src={'/Featured2.webp'}
              alt="Featured"
              height={120}
              width={120}
              />
              <Image
              src={'/Featured3.webp'}
              alt="Featured"
              height={120}
              width={120}
              />
              <Image
              src={'/Featured4.webp'}
              alt="Featured"
              height={120}
              width={120}
              />
        </div>
     );
}

export default Featured;