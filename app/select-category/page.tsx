import RequestForCategory from "@/components/Saller/RequestForCategory";
import { Separator } from "@/components/ui/separator";

const Page = () => {
  return (
    <div className="container mx-auto px-4 min-h-screen flex items-center justify-center w-full">
      <div className="w-screen">
        <h1 className="text-xl md:text-2xl font-semibold text-center">
          Select Category
        </h1>
        <Separator className="my-4 w-full" />
        <div>
          <RequestForCategory />
        </div>
      </div>
    </div>
  );
};

export default Page;
