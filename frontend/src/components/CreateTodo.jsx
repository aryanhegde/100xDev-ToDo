import { Button } from "./ui/button";
import { Input } from "./ui/input";

const CreateTodo = () => {
  return (
    <div className="flex items-center justify-center h-full ">
      <div className="bg-emerald-200 p-4 rounded-lg shadow-lg ">
        <div className="flex flex-col gap-2">
          <Input type="text" placeholder="Enter a new todo" />
          <Input
            type="text"
            placeholder="Enter a description"
            className="bg-green-500 placeholder:text-white"
          />
          <Button className="mt-4">ADD</Button>
        </div>
      </div>
    </div>
  );
};

export default CreateTodo;
