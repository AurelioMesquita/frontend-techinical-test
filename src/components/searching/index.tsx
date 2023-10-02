import react, { useState } from "react";
import { Autocomplete } from "../autocomplete";
import google from "../../assets/google.png";

import { Img, SearchContainer, UrlBody } from "./styles";
import Url from "../url";
import ImageUrl from "../imageUrl";
import { SearchData } from "../../interfaces/Search";

export default function Searching() {
  const [imageUrl, setImageUrl] = useState<SearchData[]>([]);
  return (
    <>
      <SearchContainer>
        <Img src={google} alt="Google" />
        <Autocomplete />
      </SearchContainer>
      <UrlBody>
        <Url setImageUrl={setImageUrl} />
        <ImageUrl imageUrl={imageUrl} />
      </UrlBody>
    </>
  );
}
