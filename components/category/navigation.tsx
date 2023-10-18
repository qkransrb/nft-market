"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

import { cn } from "@/lib/utils";

const Navigation = () => {
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        label: "ALL",
        href: "/all",
        active: pathname.includes("/all"),
      },
      {
        label: "METAVERSE",
        href: "/metaverse",
        active: pathname.includes("/metaverse"),
      },
      {
        label: "COLLECTION",
        href: "/collection",
        active: pathname.includes("/collection"),
      },
    ],
    [pathname]
  );

  return (
    <nav className="h-20 flex items-center justify-center bg-gray-800">
      <ul className="flex items-center gap-x-8">
        {routes.map((route) => (
          <li key={route.href}>
            <Link
              href={route.href}
              className={cn(
                "text-white py-2 px-6 rounded-full text-muted-foreground font-semibold hover:text-white transition-colors",
                route.active && "bg-gray-500 text-white"
              )}
            >
              {route.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
