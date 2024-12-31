'use client'
import { useRouter } from "next/navigation";
export type FeatureCardProps = {
    title: string,
    description: string,
    icon: React.ReactNode
    link: string
}



const FeatureCard = ({ title, description, icon, link }: FeatureCardProps) => {

    const router = useRouter();
    const onClick = () => {
        router.push(link);
    }

    return (
        <div className="flex items-center justify-center flex-col p-8 border-foreground border-[1px] rounded-lg " onClick={onClick}>
            <div className="flex items-center justify-center">
                {icon}
            </div>
            <div className="text-center">
                <h4>{title}</h4>
                <p className="text-gray">{description}</p>
            </div>
        </div>
    )

}

export default FeatureCard; 