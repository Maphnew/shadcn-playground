import { AppCard } from "./app-card"
import { cn } from "@/lib/utils"

export function AppContent() {
    const cardData = {
        title: "TITLE",
        desc: "Description",
        content: "Content",
        footer: "Footer",
    }
    
    return (
        <div className={cn(
            "relative flex-1 h-full p-2"
        )}>
            {Array.from({length:19}, (v,i)=>{
                return {
                    ...cardData,
                    id: i+1
                }
            }).map(data => {
                return (
                    <AppCard key={data.id} title={data.title} desc={data.desc} content={data.content} footer={data.footer}/>
                )
            })}
            <AppCard className="border-dashed border-2" />
        </div>
    )
}