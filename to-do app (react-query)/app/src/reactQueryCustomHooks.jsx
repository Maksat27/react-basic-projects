import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import customFetch from "./utils";
import { toast } from "react-toastify";

export const useFetchTasks = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["tasks"],
    //  using async/await in order not to write data.data.taskList but data.taskList
    queryFn: async () => {
      const { data } = await customFetch.get("/");
      return data;
    },
    // queryFn: () => customFetch.get("/"),
  });

  return { isLoading, isError, data, error };
};

export const useCreateTask = () => {
  const queryClient = useQueryClient();

  const { mutate: createTask, isLoading } = useMutation({
    mutationFn: (taskTitle) => customFetch.post("/", { title: taskTitle }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("Item Added");
      // State management of setNewItemName("") is handled in the Form.jsx
    },
    onError: (error) => {
      toast.error(error.response.data.msg);
    },
  });

  return { createTask, isLoading };
};

export const useEditTask = () => {
  const queryClient = useQueryClient();

  const { mutate: editTask } = useMutation({
    mutationFn: ({ taskId, isDone }) =>
      customFetch.patch(`/${taskId}`, { isDone }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("task updated");
    },
  });

  return { editTask };
};

export const useDeleteTask = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteTask, isLoading } = useMutation({
    mutationFn: (taskId) => customFetch.delete(`${taskId}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("task removed");
    },
  });

  return { deleteTask, isLoading };
};
