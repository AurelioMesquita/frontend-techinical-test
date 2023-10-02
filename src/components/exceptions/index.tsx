import React from "react";
import {
  NotExists,
  NotExistsContainer,
  NotFound,
  NotFoundContainer,
} from "./styles";
import { useSelector } from "react-redux";
import { useInputSearch } from "../../redux/sliceInputSearch";

export default function Exceptions({ notExists, notFoundItem }: any) {
  const inputSearching = useSelector(useInputSearch);
  return (
    <>
      {notExists && (
        <NotExistsContainer>
          <NotExists>
            No results found for :
            <span style={{ fontWeight: "bold" }}> "{inputSearching[0]}".</span>
          </NotExists>
        </NotExistsContainer>
      )}
      {notFoundItem && (
        <NotFoundContainer>
          <NotFound>
            Try looking for :
            <span style={{ fontWeight: "bold" }}>
              {" "}
              insect,fish,crocodilia,cow,rabbit,cat,snake,dog,bird.
            </span>
          </NotFound>
        </NotFoundContainer>
      )}
    </>
  );
}
