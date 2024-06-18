import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createEditCabin } from "../../services/apiCabins";

export function useEditCabin() {
	const queryClient = useQueryClient();
	const { mutate: editCabin, isLoading: isEditing } = useMutation({
		mutationFn: createEditCabin,
		onSuccess: () => {
			toast.success("Cabin edited");
			queryClient.invalidateQueries({
				queryKey: ["cabins"],
			});
		},
		onError: () => {
			toast.error("Failed to edit cabin");
		},
	});
	return {
		editCabin,
		isEditing,
	};
}
