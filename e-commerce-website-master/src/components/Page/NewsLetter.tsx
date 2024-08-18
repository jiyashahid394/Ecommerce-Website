import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

function NewsLetter() {
    return ( 
        <div className="relative my-20 py-10">
  <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-9xl opacity-5">
    Newsletter
  </h1>
  <div className="absolute inset-x-16 bottom-0 mx-auto">
    <div className="flex flex-col justify-center items-center w-full gap-6">
      <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
        Subscribe Our Newsletter
      </h3>
      <p>Get the latest information and promo offers directly</p>
      <div className="flex items-center justify-center w-full gap-4">
        <Input type="email" placeholder="Input e-mail address" />
        <Button type="submit" className=" bg-black">Get Started</Button>
      </div>
    </div>
  </div>
</div>
     
     );
}

export default NewsLetter;