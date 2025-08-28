import { Image } from "@heroui/image";
import NextImage from "next/image";

export default function Page() {
  return (
    <main>
      <div className="flex">
        <div className="w-1/2 p-4">
          <p>asdasd</p>
        </div>
        <div className="w-1/2 p-4 relative ">
          <Image
            alt="Lenna image"
            as={NextImage}
            src="/Lenna.png"
            width={512}
            height={512}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </main>
  );
}
