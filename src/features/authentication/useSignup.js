import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { signup as signupApi } from "../../services/apiAuth";

export function useSignup() {
	const { mutate: signup, isLoading } = useMutation({
		mutationFn: signupApi,
		onSuccess: () => {
			toast.success("User created successfully. Please login to continue.");
		},
	});

	return { signup, isLoading };
}
