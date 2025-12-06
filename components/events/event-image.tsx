"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

interface EventImageProps extends Omit<ImageProps, "onLoad" | "onError"> {
  fallbackContent?: React.ReactNode;
  containerClassName?: string;
}

export const EventImage: React.FC<EventImageProps> = ({
  fallbackContent,
  containerClassName,
  className,
  alt,
  src,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    setIsError(false);
  }, [src]);


  if (isError && fallbackContent) {
    return (
      <div className={`w-full h-full ${containerClassName || ""}`}>
        {fallbackContent}
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full overflow-hidden ${containerClassName || ""}`}>
      {isLoading && (
        <Skeleton className={`absolute inset-0 w-full h-full z-10`} />
      )}
      <Image
        src={src}
        alt={alt}
        className={`transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        } ${className || ""}`}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setIsError(true);
        }}
        unoptimized
        {...props}
      />
    </div>
  );
};
