"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

interface RegistrationGateProps {
  children: React.ReactNode;
}

export default function RegistrationGate({ children }: RegistrationGateProps) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  const { isRegistered } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    setMounted(true);
    if (!isRegistered) {
      router.replace("/register");
    }
  }, [isRegistered, router]);

  // Don't render anything until the client-side check is done
  if (!mounted) return null;

  if (!isRegistered) return null;

  return <>{children}</>;
}
