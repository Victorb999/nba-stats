import { useState } from "react";
import Image from "next/image";

type PropsImg = {
  src: string;
  fallbackSrc: string;
  alt: string;
  width: number;
  height: number;
};

const ImageWithFallback = (props: PropsImg) => {
  const { src, fallbackSrc, alt, width, height } = props;
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      width={width}
      height={height}
      alt={alt}
      objectFit="cover"
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
    />
  );
};

export default ImageWithFallback;
