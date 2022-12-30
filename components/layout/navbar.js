import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Navbar() {
  const router = useRouter();

  const currentPage = router.pathname;
  console.log(currentPage);
  return (
    <nav className={`flex py-5 px-5`}>
      <Link href="/">
        <Image
          className={`rounded-full`}
          src="/images/profile.jpg"
          width={45}
          height={45}
          alt="BB"
        />{" "}
      </Link>{" "}
      <ul className={`flex`}>
        <li className={` px-5 py-3`}>
          <Link
            className={`text-black hover:no-underline ${
              currentPage.includes("blog") ? "text-orange-300" : null
            }`}
            href="/blog"
          >
            Blog
          </Link>
        </li>

        <li className={`px-5 py-3`}>
          <Link
            className={`text-black  hover:no-underline  ${
              currentPage.includes("education") ? "text-orange-300" : null
            }`}
            href="/education"
          >
            Education
          </Link>
        </li>
      </ul>
    </nav>
  );
}
