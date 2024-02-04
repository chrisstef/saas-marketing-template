import Image from "next/image";

export const Logo = () => {
    return (
        <div className="hover:opacity-75 transition duration-200 items-center gap-x-2 flex">
            <Image src="/logo.svg" alt="Logo" height={30} width={30} />
            <p className="text-lg font-extrabold">SaaS Marketing</p>
        </div>
    );
};
