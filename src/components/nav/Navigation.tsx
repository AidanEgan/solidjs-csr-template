import { useRouter } from "@/hooks/useRouter"
import { allRoutes } from "@/routes/routeconfig"
import { For } from "solid-js";
import { Button } from "@/components/ui/button";
import { zip } from "@/libs/utils";
import { ModeToggle } from "./DarkModeToggle";

const routeNames = ['Home', 'Button'];
export const Navigation = () => {
    const navigate = useRouter();
    return(
        <div class="border-2 border-b-secondary-foreground/80 bg-secondary/60 px-5 py-2 flex place-content-between mb-3">
            <h1 class="self-center"> Solid csr starter </h1>
            <div class='flex'>
                <For each={zip(allRoutes, routeNames)}>
                    { ([route, name], index) => 
                        <Button class="m-2" onClick={() => { navigate(route) }} data-index={index()}>{name}</Button>
                    }
                </For>
                <ModeToggle class="self-center" />
            </div>
        </div>
    )
}