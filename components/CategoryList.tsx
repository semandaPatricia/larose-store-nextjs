
import Image from "next/image";
import Link from "next/link";

const cats = [
    {
      id:1,
      img:"https://images.unsplash.com/photo-1708443683198-a2b77a54c36e?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Product 1",
      
    },
    {
      id:2,
      img:"https://images.unsplash.com/photo-1706550633886-94bae20ac974?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Product 2" ,
      
    },
    {
      id:3,
      img:"https://images.unsplash.com/photo-1706550632841-50c6e4a4dc99?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Product 3",
      
    },
    {
      id:4,
      img:"https://images.unsplash.com/photo-1708443683300-fb5e64c59f93?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Product 4",
      
    },
    {
      id:5,
      img:"https://images.unsplash.com/photo-1708443683295-5b9b4a125687?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Product 5",
   
    },
    {
      id:6,
      img:"https://images.unsplash.com/photo-1706550632858-6216ce4e61a7?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Product 6",
     
    },
    {
      id:7,
      img:"https://images.unsplash.com/photo-1706550633068-9601a2fc6e14?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Product 7",
      
    }]

    const CategoryList = async () => {
        return (
          <div className="px-4 overflow-x-scroll scrollbar-hide">
            <div className="flex gap-4 md:gap-8">
              {cats.map((item) => (
                <Link key={item.id} href="#"> {/* Added key prop */}
                  <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4with xl:w-1/6">
                    <div className="relative bg-slate-100 w-full h-96">
                      <Image
                        src={item.img}
                        alt=""
                        fill
                        sizes="20vw"
                        className="object-cover"
                      />
                    </div>
                    <h2 className="mt-8 font-light text-xl tracking-wide">
                      {item.title}
                    </h2>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        );
      };

export default CategoryList;