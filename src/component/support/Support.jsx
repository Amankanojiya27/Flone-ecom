import React from "react";

const Images = [
  {
    pic: "/support-1.png",
    boldtxt: "Free Shipping",
    txt: "Free shipping on all order",
  },
  {
    pic: "/support-2.png",
    boldtxt: "Support 24/7",
    txt: "Free shipping on all order",
  },
  {
    pic: "/support-3.png",
    boldtxt: "Money Return",
    txt: "Free shipping on all order",
  },
  {
    pic: "/support-4.png",
    boldtxt: "Order Discount",
    txt: "Free shipping on all order",
  },
];

function Support() {
  return (
    <div className="max-w-[2400] mx-auto ">
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-5 lg:px-24 py-16">
        {Images.map((item, index) => (
          <div key={index}>

            <div className="flex gap-5 items-center justify-center  w-full">
              
              <div className="h-20 w-20 flex items-center justify-center">
                <img src={item.pic} width={50} height={50} alt="pic" />
              </div>

              <div className="text-left h-full ">
                <div className="text-lg">{item.boldtxt}</div>
                <div className="text-sm text-gray-600 ">{item.txt}</div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Support;
