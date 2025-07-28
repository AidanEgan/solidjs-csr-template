import { type NavigateOptions, useNavigate } from "@solidjs/router"
import { type AllRoutes } from "@/routes/routeconfig";

// Wraps useNavigate utility, gives some type hints
export const useRouter = () => {
    const navigate = useNavigate();
    return (to: AllRoutes, options?: Partial<NavigateOptions>) => {
        navigate(to, options);
    }
}