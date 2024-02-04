import Image from "next/image";

export const Logo = () => {
    return (
        <div className="hover:opacity-75 transition duration-200 items-center gap-x-2 flex">
            <Image
                src="/logo.svg"
                alt="Logo"
                width={30}
                height={30}
                className=" w-8 h-8"
            />
            <p className="text-lg font-extrabold">SaaS Marketing</p>
        </div>
    );
};
