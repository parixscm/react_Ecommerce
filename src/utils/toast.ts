import toast from "react-hot-toast";

export const notify = (content: string): void => {
  toast.success(content, {
    duration: 2500,
    position: "bottom-center",
  });
};
