import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Navbar() {
  const router = useRouter();

  const currentPage = router.pathname;

  return (
    <>
      <Link href="/blog">Blog</Link>
      <Link href="/education">Education</Link>
    </>
  );
}
