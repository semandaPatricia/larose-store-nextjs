"use client"
import Image from "next/image";
import Slider from "@/components/Slider";
import CategoryList from "@/components/CategoryList";
import { useWixClient } from "@/hooks/useWixClient";
import { wixClientServer } from "@/libs/wixClientServer";
import { Suspense, useContext, useEffect } from "react";
export default function Home() {
  //TEST (FETCHING ON THE CLIENT COMPONENT)
  const wixClient = useWixClient();
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await wixClient.products.queryProducts().find();
        console.log(res);
      } catch (error) {
        console.error('Error fetching products:', error);
        // Handle the error here (e.g., display an error message to the user)
      }
    };

    getProducts();
  }, []); // Empty array for initial fetch, adjust if needed

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
