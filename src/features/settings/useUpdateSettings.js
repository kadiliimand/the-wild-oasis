import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updateSetting } from "../../services/apiSettings";

export function useUpdateSettings() {
	const queryClient = useQueryClient();
	const { mutate: mutateUpdateSetting, isLoading: isUpdating } = useMutation({
		mutationFn: updateSetting,
		onSuccess: () => {
			toast.success("Setting updated");
			queryClient.invalidateQueries({
				queryKey: ["settings"],
			});
		},
		onError: () => {
			toast.error("Failed to update setting");
		},
	});
	return {
		updateSetting: mutateUpdateSetting,
		isUpdating,
	};
}
