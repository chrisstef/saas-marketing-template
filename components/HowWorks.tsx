import { Icons } from "./Icons";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface FeatureProps {
    icon: JSX.Element;
    title: string;
    description: string;
}

const features: FeatureProps[] = [
    {
        icon: (
            <Icons.accessibility className="dark:text-orange-500 text-blue-500 w-7 h-7" />
        ),
        title: "Accesibility",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
    },
    {
        icon: (
            <Icons.people className="dark:text-orange-500 text-blue-500 w-7 h-7" />
        ),
        title: "Community",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
    },
    {
        icon: (
            <Icons.scale className="dark:text-orange-500 text-blue-500 w-7 h-7" />
        ),
        title: "Scalability",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
    },
    {
        icon: (
            <Icons.gamification className="dark:text-orange-500 text-blue-500 w-7 h-7" />
        ),
        title: "Gamification",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
    },
];

const HowWorks = () => {
    return (
        <section
            id="howItWorks"
            className="container text-center py-24 sm:py-32"
        >
            <h2 className="text-3xl md:text-4xl font-bold ">
                How It{" "}
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                    Works{" "}
                </span>
                Step-by-Step Guide
            </h2>
            <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Veritatis dolor pariatur sit!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map(({ icon, title, description }: FeatureProps) => (
                    <Card key={title} className="bg-muted/50">
                        <CardHeader>
                            <CardTitle className="grid gap-4 place-items-center">
                                {icon}
                                {title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>{description}</CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default HowWorks;
