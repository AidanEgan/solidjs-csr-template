import { Button } from "@/components/ui/button";
import { useRouter } from "@/hooks/useRouter";

export const NotFound = () => {
	const navigate = useRouter();
	return (
		<div class="m-10 p-4 pt-10 border-blue-950 border-4 flex flex-col items-center min-h-[200px]">
			<h1> Oh no! That route doesn't exist! </h1>
			<Button class="mx-auto mt-5" onClick={() => navigate("/")}>
				{" "}
				Go Home{" "}
			</Button>
		</div>
	);
};
