"use client";

import Link from "next/link";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Bell, ChevronDown, Search, User, Wallet2 } from "lucide-react";

import { cn } from "@/lib/utils";
import { Form, FormControl, FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";
import useScrollTop from "@/hooks/use-scroll-top";

const formSchema = z.object({
  keyword: z.string().min(1),
});

const Navbar = () => {
  const scrolled = useScrollTop();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      keyword: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);

    //
  };

  return (
    <header
      className={cn(
        "w-full z-50 bg-transparent fixed top-0 transition-all duration-500",
        scrolled && "bg-black shadow-md"
      )}
    >
      <nav className="max-w-7xl mx-auto h-20 flex items-center justify-between gap-x-[60px]">
        <div className="h-full flex items-center gap-x-10 flex-1">
          <Logo />
          <ul className="h-full flex items-center">
            <li className="h-full flex items-center relative group">
              <Link href="/" className="flex items-center gap-x-2">
                <span className="text-white text-base font-semibold">
                  MARKETPLACE
                </span>
                <ChevronDown size={18} color="white" />
              </Link>
              <ul className="hidden group-hover:block absolute top-16 rounded-sm bg-black min-w-[160px] p-5 space-y-6 shadow-md">
                <li>
                  <Link href="/all" className="text-white font-semibold">
                    ALL
                  </Link>
                </li>
                <li>
                  <Link href="/metaverse" className="text-white font-semibold">
                    METAVERSE
                  </Link>
                </li>
                <li>
                  <Link href="/collection" className="text-white font-semibold">
                    COLLECTION
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1">
              <FormField
                control={form.control}
                name="keyword"
                render={({ field }) => (
                  <FormControl>
                    <div className="rounded-full overflow-hidden flex items-center bg-white px-4">
                      <Search />
                      <Input
                        placeholder="Search"
                        autoComplete="off"
                        className="border-0"
                        {...field}
                      />
                    </div>
                  </FormControl>
                )}
              />
            </form>
          </Form>
        </div>
        <div>
          <ul className="flex items-center gap-x-8">
            <li>
              <Button variant="primary" className="flex items-center gap-x-2">
                <Wallet2 color="white" />
                <span className="text-white font-semibold">CONNECT WALLET</span>
              </Button>
            </li>
            <li>
              <User color="white" />
            </li>
            <li>
              <Bell color="white" />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
