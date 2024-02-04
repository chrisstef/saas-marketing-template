import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "./Icons";

const OpenSource = async () => {
    const { stargazers_count: stars } = await fetch(
        "https://api.github.com/repos/chrisstef/saas-marketing-template",
        {
            next: { revalidate: 60 },
        }
    )
        .then((res) => res.json())
        .catch((e) => console.error(e));

    return (
        <section className="container py-24 sm:py-32">
            <div className="flex flex-col items-center gap-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center">
                    Fully
                    <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                        {" "}
                        Open Source{" "}
                    </span>
                </h2>
                <Link
                    href="https://github.com/chrisstef/saas-marketing-template"
                    target="_blank"
                    className={cn(
                        buttonVariants({ variant: "outline", size: "lg" })
                    )}
                >
                    <Icons.star className="mr-2 h-4 w-4" />
                    <span>{stars} on Github</span>
                </Link>
            </div>
        </section>
    );
};

export default OpenSource;
