import React from "react";
import { ImgContainer, UrlComponent, UrlTitle, UrlDescription } from "./styles";
export default function ImageUrl({ imageUrl }: any) {
  return (
    <>
      <div>
        <ImgContainer src={imageUrl.image} />
        <UrlComponent>{imageUrl.url}</UrlComponent>
        <UrlTitle>{imageUrl.title}</UrlTitle>
        <UrlDescription>{imageUrl.description}</UrlDescription>
      </div>
    </>
  );
}
