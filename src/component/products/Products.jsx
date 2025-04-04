import Link from "next/link";
import React from "react";
import { IoMdStarOutline,IoMdEye } from "react-icons/io";
import { CiHeart } from "react-icons/ci";

const proImg = [
  {
    id: 1,
    img: "/product/1.jpg",
    img2: "/product/2.jpg",
  },
  {
    id: 2,
    img: "/product/2.jpg",
  },
  {
    id: 3,
    img: "/product/3.jpg",
  },
  {
    id: 4,
    img: "/product/4.jpg",
  },
  {
    id: 5,
    img: "/product/5.jpg",
  },
  {
    id: 6,
    img: "/product/6.jpg",
  },
  {
    id: 7,
    img: "/product/7.jpg",
  },
  {
    id: 8,
    img: "/product/8.jpg",
  },
  {
    id: 9,
    img: "/product/9.jpg",
  },
];
function Products() {
  return (
    <div className="grid max-w-7xl mx-auto grid-cols-4 w-full gap-10">
      {proImg.map((item, index) => (
        <div key={index}>
          <div className="flex flex-col text-center">



            <div  className="object-contain ">
              <img src={item.img} alt="fashion" />
              
              <div className=" flex items-center gap-1 w-full bg-purple-600  hover:z-10 ">
                <div className="p-2"><CiHeart /></div>
                <div className="w-full">Buy Now</div>
                <div className="p-2"><IoMdEye /></div>
              </div>
            
            </div>

            <div className="">
              <Link href={"#"} alt="#">
                Lorem ipsum fashion female top
              </Link>
            </div>
            <div className="product-rating flex  justify-center">
              <IoMdStarOutline className="text-yellow-400" />
              <IoMdStarOutline className="text-yellow-400" />
              <IoMdStarOutline className="text-yellow-400" />
              <IoMdStarOutline className="text-yellow-400" />
              <IoMdStarOutline className="" />
            </div>
            <div className="product-price flex flex-col ">
              <span>€26.87 </span>
              <span>€26.85 </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
