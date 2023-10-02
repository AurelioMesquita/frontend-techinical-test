import React, { useState } from "react";
import {
  Button,
  ButtonContainer,
  Img,
  ImgContainer,
  StyledLink,
} from "./styles";
import googleimage from "../../assets/google.png";
import { Autocomplete } from "../autocomplete";
import Exceptions from "../exceptions";
import { useSelector } from "react-redux";
import { useSearch } from "../../redux/sliceSearch";
import { useInputSearch } from "../../redux/sliceInputSearch";

export function Body() {
  const searching = useSelector(useSearch);
  const inputSearching = useSelector(useInputSearch);

  const [notFoundItem, setNotFoundItem] = useState(false);
  const [notExists, setNotExists] = useState(false);

  const handleClick = () => {
    if (inputSearching.length > 0 && searching.length === 0) {
      setNotExists(true);
      setNotFoundItem(true);
    } else if (searching.length === 0) {
      setNotFoundItem(true);
    } else if (inputSearching.length > 0 && searching.length > 0) {
      setNotFoundItem(false);
      setNotExists(false);
      localStorage.setItem("reduxState", JSON.stringify(searching));
      localStorage.setItem("reduxInputState", JSON.stringify(inputSearching));
      window.location.href = "/search";
    }
  };

  return (
    <>
      <ImgContainer>
        <Img src={googleimage} alt="google" />
      </ImgContainer>

      <Autocomplete />

      <ButtonContainer>
        <Button onClick={() => handleClick()}>Buscar</Button>
      </ButtonContainer>

      <Exceptions notExists={notExists} notFoundItem={notFoundItem} />
    </>
  );
}
