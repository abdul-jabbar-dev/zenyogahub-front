"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const WithAuth = ({ Children }) => {
  const { replace } = useRouter();
  const { data, status } = useSession();
  console.log(data)
  if (status === "unauthenticated" || !data) {
    replace("/start");
    return null;
  }
  if (status === "loading") {
    return "Loading";
  }

  return Children;
};

export default WithAuth;
