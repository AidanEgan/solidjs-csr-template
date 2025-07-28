import { Button } from "@/components/ui/button"
import { createSignal } from "solid-js"

export const ButtonClicker = () => {
    const [click, setClick] = createSignal(0)

    return(
        <div class="flex place-content-between border-2 border-secondary-foreground/80 rounded-md bg-secondary/60 px-5 py-2">
            <h1 class="self-center"> Button clicks: {click()} </h1>
            <Button onClick={()=>setClick((prev)=>prev+1)}> Click Me! </Button>
        </div>
    )
}