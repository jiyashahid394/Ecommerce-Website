import { Button as UIButton } from "@/components/ui/button";
import Link from "next/link";
function Button() {
    return (
        <Link href={"/allProducts"}><UIButton
        variant="outline"
        className="font-bold ml-3 text-center text-white bg-black hover:shadow-md hover:bg-slate-200 hover:text-black">
        Start Shopping
      </UIButton>
      </Link>
    );
}

export default Button;