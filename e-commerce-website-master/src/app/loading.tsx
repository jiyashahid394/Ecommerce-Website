import Image from "next/image";

function loader() {
    return (
        <div className="min-h-screen flex items-center justify-center">
        <div className="rounded-md h-12 w-12 border-4 border-t-4 border-black animate-spin absolute"></div>
        </div>
     );

}

export default loader;

