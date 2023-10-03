import React from "react";
import {
  Container,
  ImgContainer,
  UrlComponent,
  UrlTitle,
  UrlDescription,
} from "./styles";
export default function ImageUrl({ imageUrl }: any) {
  return (
    <>
      {imageUrl.length > 0 && (
        <Container>
          <ImgContainer src={imageUrl[0].image} />
          <UrlComponent>{imageUrl[0].url}</UrlComponent>
          <UrlTitle>{imageUrl[0].title}</UrlTitle>
          <UrlDescription>{imageUrl[0].description}</UrlDescription>
        </Container>
      )}
    </>
  );
}
