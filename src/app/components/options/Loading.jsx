import { Spinner } from "@material-tailwind/react";

export const Loading = () => {
  return (
        <div className="flex justify-center items-center h-full mx-auto">
            <Spinner className="h-16 w-16 text-gray-300/50" />
        </div>
    )
}
