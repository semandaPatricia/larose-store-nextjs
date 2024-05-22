import Image from "next/image";
import Slider from "@/components/Slider";
import CategoryList from "@/components/CategoryList";
import ProductList from "@/components/ProductList";
import Skeleton from "@/components/Skeleton";
import { useWixClient } from "@/hooks/useWixClient";
import { wixClientServer } from "@/libs/wixClientServer";
import { Suspense, useContext, useEffect } from "react";
export default function Home() {
  //TEST (FETCHING ON THE CLIENT COMPONENT)

  //const wixClient = useWixClient();
  //useEffect(() => {
  //const getProducts = async () => {
  //try {
  //  const res = await wixClient.products.queryProducts().find();
  //console.log(res);
  //} catch (error) {
  //  console.error('Error fetching products:', error);
  // Handle the error here (e.g., display an error message to the user)
  // }};

  // getProducts();
  //   }, []); // Empty array for initial fetch, adjust if needed

  // TEST (FETCHING ON THE SERVER COMPONENT)

  // const wixClient = await wixClientServer();

  // const res = await wixClient.products.queryProducts().find();

  // console.log(res);

  //const url = "https://manage.wix.com/dashboard/bd6175f5-2fad-493e-93ad-47e0ea890ebc/store/categories/list/category/05a05f65-17b1-4211-6bf1-62ae9eab5876"
// Split the URL and extract category ID
//const urlParts = url.split('/');
//const categoryId = urlParts[urlParts.length - 2];

  return (
    <div className="">
      <Slider />
      {/*CATEGORY */}
      <div className="mt-24">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">
          Categories
        </h1>
        <Suspense fallback={<Skeleton />}>
        <CategoryList />
        </Suspense>
      </div>
      {/*FEATURED PRODUCTS */}
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
        <Suspense fallback={<Skeleton />}>
        <ProductList
            categoryId={process.env.FEATURED_PRODUCTS_FEATURED_CATEGORY_ID!}
            limit={4}
          />
         
      </Suspense>
      </div>
{/*NEW PRODUCTS */}
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl"> NEW Products</h1>
        <Suspense fallback={<Skeleton />}>
         
        <ProductList 
            categoryId={process.env.FEATURED_PRODUCTS_NEW_CATEGORY_ID!}
            limit={4}
          />
      </Suspense>
      </div>
    </div>
  );
}
