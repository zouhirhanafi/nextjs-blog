import React from "react";
import Image from "next/image";

export default function Profile() {
  return (
    <Image
      src="https://frimake-cdn.azureedge.net/loisirs/2005.jpg" // Route of the image file
      height={144} // Desired size with correct aspect ratio
      width={144} // Desired size with correct aspect ratio
      alt="mh name"
    />
  );
}
