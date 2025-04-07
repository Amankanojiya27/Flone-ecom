import React from "react";
import { RxCross2 } from "react-icons/rx";

function Card() {
  const navbar = [
    {
      name: "Home",
      to: "/",
      child: [
        {
          name: "Home 2",
          to: "/",
        },
      ],
    },
    {
      name: "Shop",
      to: "/",
      child: [
        {
          name: "Shop 2",
          to: "/",
        },
      ],
    },
    {
      name: "Collection",
      to: "/",
      child: [
        {
          name: "Collection",
          to: "/",
        },
      ],
    },
    {
      name: "Page",
      to: "/",
      child: [
        {
          name: "About Us",
          to: "/",
        },
        {
          name: "FAQ",
          to: "/",
        },
        {
          name: "Blog",
          to: "/",
        },
        {
          name: "Cart",
          to: "/",
        },
        {
          name: "404 Page",
          to: "/",
        },
      ],
    },
    {
      name: "Contact Us",
      to: "/",
      child: [
        {
          name: "Contact Us",
          to: "/",
        },
      ],
    },
  ];
  return (
    <div className="bg-gradient-to-r h-svh">
      <div className="flex bg-amber-300 h-svh ">
        <div className="icon-div h-16 w-20 bg-white flex items-center justify-center">
          <RxCross2 className="w-12 h-12" />
        </div>
        <div className="menu-div min-w-80 bg-blue-600 ">
          <div>
            <input
              type="text"
              placeholder=" search here"
              className="bg-blue-200 w-full h-16 "
            />
          </div>
        </div>
      </div>
    </div>
    // <div className="w-full bg-black relative h-svh">
    //   <div className="absolute right-0 top-0 min-w-[30%] h-full bg-amber-600">
    //     <div className=" h-s10 w-10 bg-sky-500">
    //       <RxCross1 />
    //     </div>
    //     <div>

    //       <input
    //         placeholder=" Search "
    //         name=""
    //         id=""
    //         className="h-10 w-full bg-gray-500 border-none p-1"
    //       ></input>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Card;
