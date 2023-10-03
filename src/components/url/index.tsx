import React from "react";
import { useSelector } from "react-redux";
import { UrlAdress, UrlComponent, UrlDescription, UrlTitle } from "./styles";
import { useResult } from "../../redux/sliceResult";
export default function Url({ setImageUrl }: any) {
  const searching = useSelector(useResult);

  const handleClick = (value: any) => {
    setImageUrl([value]);
  };
  return (
    <>
      <div>
        {searching.length > 0 &&
          searching.map(value => (
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
