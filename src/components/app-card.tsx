import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


export function AppCard(props) {
    return (
        <Dialog>
            <DialogTrigger>
                <Card className={props.className + " w-40 h-48"}>
                    <CardHeader>
                        <CardTitle>{props.title || '\u00a0'}</CardTitle>
                        <CardDescription>{props.desc || '\u00a0'}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>{props.content || '\u00a0'}</p>
                    </CardContent>
                    <CardFooter>
                        <p>{props.footer || '\u00a0'}</p>
                    </CardFooter>
                </Card>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
        
    )
}