// !--- IMPORTS ---!
//     * NEXT-JS MODULES
import Link from "next/link";
import { useRouter } from "next/router";

//     * REACT-JS MODULES
import React from "react";

//     * STYLE-COMPONENTS

//     * COMPONENTS

//     * STATES

//     * HOOKS

//     * SERVICES (GRAPHQL, APOLLO, ...)

//     * NPM-PACKAGES

//     * UTILS

//     * REACT-ICONS

//     * ASSETS

//     * STATIC-CONFIG

// !--- COMPONENT ---!
const NavLink = ({ href, exact, children, ...props }) => {
  //     * INIT
  const router = useRouter();
  const pathname = router?.pathname;

  const isActive = exact ? pathname === href : pathname?.startsWith(href);
  if (isActive) {
    props.className += " active";
  }

  //     * STATES

  //     * HOOKS

  //     * DATA-FETCHING

  //     * HANDLERS

  //     * EVENT-LISTENERS

  // !--- RENDER ---!
  return (
    <Link href={href}>
      <a {...props}>{children}</a>
    </Link>
  );
};

export default NavLink;
