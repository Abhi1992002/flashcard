"use client";
import { Buttons } from "@/components/Buttons";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <div className="flex gap-5 flex-wrap mt-[50px] mb-[50px]">
        <Buttons
          onClick={() => {
            router.push("/dashboard");
          }}
        >
          Dashboard
        </Buttons>
      </div>
    </div>
  );
}
