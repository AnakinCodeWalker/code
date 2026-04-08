import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { postTodos } from "../lib/api";

const PostTodos = () => {
  const queryClient = useQueryClient();

//   mutate will not run on its own  u need to trigger it
//  it will return a object so no map on it 
  const { mutate, data, error } = useMutation({
    mutationFn: postTodos,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      toast.success("Updated todos..");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  if (error) return <>error...</>;

  return (
    <div>
      <button
        onClick={() =>
          mutate({ title: "New Todo", completed: false })
        }
      >
        Add Todo
      </button>

      {data && <p>{data.title}</p>}
    </div>
  );
};

export default PostTodos;