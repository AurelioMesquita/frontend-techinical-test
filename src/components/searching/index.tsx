import react, { useState } from "react";
import { Autocomplete } from "../autocomplete";
import google from "../../assets/google.png";

import { Button, Img, SearchContainer, SearcherInput, UrlBody } from "./styles";
import Url from "../url";
import ImageUrl from "../imageUrl";
import { SearchData } from "../../interfaces/Search";
import { useDispatch, useSelector } from "react-redux";
import { addResult, emptyResult } from "../../redux/sliceResult";
import { useSearch } from "../../redux/sliceSearch";

export default function Searching() {
  const [imageUrl, setImageUrl] = useState<SearchData[]>([]);
  const dispatch = useDispatch();
  const search = useSelector(useSearch);

  const handleClick = () => {
    setImageUrl([]);
    dispatch(emptyResult());
    search.forEach(value => {
      dispatch(addResult(value));
    });
  };

  return (
    <>
      <SearchContainer>
        <Img src={google} alt="Google" />
        <SearcherInput>
          <Autocomplete />
        </SearcherInput>
      </SearchContainer>
      <Button onClick={handleClick}> Buscar</Button>
      <UrlBody>
        <Url setImageUrl={setImageUrl} />
        <ImageUrl imageUrl={imageUrl} />
      </UrlBody>
    </>
  );
}
