import React from "react";
import { useSelector } from "react-redux";
import { useSearch } from "../../redux/sliceSearch";
import { UrlAdress, UrlComponent, UrlDescription, UrlTitle } from "./styles";
export default function Url({ setImageUrl }: any) {
  const searching = useSelector(useSearch);

  const handleClick = (value: any) => {
    setImageUrl(value);
  };
  return (
    <>
      <div>
        {searching.map(value => (
          <UrlComponent>
            <UrlAdress>{value.url}</UrlAdress>
            <UrlTitle onClick={() => handleClick(value)}>
              {value.title}
            </UrlTitle>
            <UrlDescription>{value.description}</UrlDescription>
          </UrlComponent>
        ))}
      </div>
    </>
  );
}
