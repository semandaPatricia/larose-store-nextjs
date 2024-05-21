import Image from "next/image";
import Slider from "@/components/Slider";
import CategoryList from "@/components/CategoryList";

export default function Home() {
  return (
    <div className=''>
           <Slider />
           <div className="mt-24">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">
          Categories
        </h1>
        
          <CategoryList />
        
      </div>
    </div>
  );
}
