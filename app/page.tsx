"use client";
import { DynamicWidget, useRefreshUser } from "@dynamic-labs/sdk-react-core";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const searchParams = useSearchParams();
  const refresh = useRefreshUser();
  const token = searchParams.get("token");
  useEffect(() => {
    if (token) {
      localStorage.setItem("dynamic_authentication_token", `"${token}"`);
      refresh();
    }
  }, [token, refresh]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white text-black">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="flex flex-col items-center justify-center w-full gap-8">
          <h1 className="text-4xl font-bold text-center">
            1-click login with Dynamic using EVM Actions
          </h1>
          <DynamicWidget />
        </div>
      </div>
    </main>
  );
}
