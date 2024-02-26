"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ButtonCombo = () => {
  const path = usePathname();
  return (
    <div className="flex w-full justify-center gap-2">
      {path !== "/dashboard" && (
        <Link href="/dashboard">
          <Button size={"sm"} variant={"link"}>
            DashBoard 📊
          </Button>
        </Link>
      )}
      {path !== "/issues" && (
        <Link href="/issues">
          <Button size={"sm"} variant={"link"}>
            Issues 📜
          </Button>
        </Link>
      )}

      {path !== "/createissue" && (
        <Link href="/createissue">
          <Button size={"sm"} variant={"link"}>
            Create Issue 📝
          </Button>
        </Link>
      )}
    </div>
  );
};

export default ButtonCombo;
