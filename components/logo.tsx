import Image from "next/image";
import Link from "next/link";
import React from "react";


const Logo = () => {
  return (
    <Link href="/">
      <div className="items-center hover:opacity-75 transition gap-x-2 hidden md:flex">
        <Image
          src="/favicon.ico"
          alt="logo"
          width={30}
          height={30}
          className="-translate-y-0.5"
        />

      </div>
    </Link>
  );
};

export default Logo;