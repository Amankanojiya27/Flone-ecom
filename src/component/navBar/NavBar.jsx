"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { CiSearch, CiUser, CiHeart, CiShoppingCart } from "react-icons/ci";
import { IoChevronDown } from "react-icons/io5";

const navrbar = [
  {
    name: "Home",
    to: "/",
    child: [],
  },
  {
    name: "Shop",
    to: "/",
    child: [],
  },
  {
    name: "Collection",
    to: "/",
    child: [],
  },
  {
    name: "Page",
    to: "/",
    child: [
      {
        name1: "About Us",
        to: "/",
      },
      {
        name1: "FAQ",
        to: "/",
      },
      {
        name1: "Blog",
        to: "/",
      },
    ],
  },
  {
    name: "Contact Us",
    to: "/",
    child: [],
  },
];

function NavBar() {

  return (
    <div className="w-auto bg-white border border-gray-200 py-8 flex justify-between items-center px-20">
      <img src="/logo.png" alt="Logo" className="h-6" />

      <ul className="flex gap-8 text-gray-600 relative h-full items-center">
        {navrbar.map((item, index) => (
          <div key={index} className="flex items-center gap-0.5 hover:text-purple-600 tracking-wider">
            <Link href={item.to} className="text-">
              {item.name}
            </Link>
            <IoChevronDown className="text-[12px]"/>
          </div>
        ))}
      </ul>

      <div>
        <ul className="flex gap-6">
          <li>
            <Link href="/search">
              <CiSearch className="text-2xl" />
            </Link>
          </li>
          <li>
            <Link href="/profile">
              <CiUser className="text-2xl" />
            </Link>
          </li>
          <li>
            <Link href="/wishlist">
              <CiHeart className="text-2xl" />
            </Link>
          </li>
          <li>
            <Link href="/cart">
              <CiShoppingCart className="text-2xl" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
