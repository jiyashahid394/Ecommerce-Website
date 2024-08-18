import Link from "next/link";
import Image from "next/image";

function Cart() {
    return ( 
        <section className="bg-white dark:bg-gray-900 ">
    <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
        <div className="wf-ull lg:w-1/2">
            <p className="text-sm font-medium text-black dark:text-black">404 error</p>
            <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">This page is under development</h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400">Sorry, the page you are looking for is under development</p>

            <div className="flex items-center mt-6 gap-x-3">
                <Link href={"/"}><button className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-black rounded-lg shrink-0 sm:w-auto hover:bg-gray-600 dark:hover:bg-gray-700 dark:bg-gray-700">
                    Take me home
                </button>
                </Link>
            </div>
        </div>

        <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
            <Image className="w-full max-w-lg lg:mx-auto" src="/NotFound.svg" height={500} width={500} alt=""/>
        </div>
    </div>
</section>
     );
}

export default Cart;