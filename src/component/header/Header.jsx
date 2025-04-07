"use client";
import Link from "next/link";
import React, { useState } from "react";
import { CiSearch, CiUser, CiHeart, CiShoppingCart } from "react-icons/ci";
import { IoChevronDown } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import leftNav from "./LeftNav"

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

function Header() {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className="bg-white border-b border-gray-200 w-full">
      <div className=" absolute w-full max-w-[1920px] mx-auto  flex justify-between items-center px-5  lg:px-16 pt-4 max-lg:pb-4">
        <Link href="/" className="min-w-24">
          <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
        </Link>

        <div className=" hidden lg:block">
          <ul className="flex gap-8 text-gray-600 h-full items-center ">
            {navbar.map((item, index) => (
              <li
                key={index}
                className="relative group"
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="flex items-center gap-1 hover:text-purple-600 tracking-wider">
                  {/* Main Link */}
                  <Link href={item.to} className="py-4 block">
                    {item.name}
                  </Link>
                  {item.child.length > 0 && (
                    <IoChevronDown className="text-xs" />
                  )}
                </div>
                {/* Child Link When Hover */}
                {hoveredItem === index && item.child.length > 0 && (
                  <div className="absolute top-full left-0 bg-white border border-gray-200 shadow-lg rounded-md z-10 min-w-[180px]">
                    {item.child.map((childItem, childIndex) => (
                      <Link
                        key={childIndex}
                        href={childItem.to}
                        className="block px-4 py-2 text-gray-600 hover:bg-gray-50 whitespace-nowrap hover:text-purple-600"
                      >
                        {childItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-6">
          <Link
            href="/search"
            className="hover:text-purple-600 hidden lg:block"
          >
            <CiSearch className="text-3xl" />
          </Link>
          <Link
            href="/profile"
            className="hover:text-purple-600 hidden lg:block"
          >
            <CiUser className="text-3xl" />
          </Link>
          <Link href="/wishlist" className="hover:text-purple-600">
            <CiHeart className="text-3xl" />
          </Link>
          <Link href="/cart" className="hover:text-purple-600">
            <CiShoppingCart className="text-3xl" />
          </Link>
          <Link href="/cart" className="hover:text-purple-600 block lg:hidden">
            <IoIosMenu href="#" className="text-3xl " />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
