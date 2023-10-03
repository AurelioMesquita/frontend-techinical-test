import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Searching from "../../components/searching";
import { useDispatch } from "react-redux";
import { addInputSearch } from "../../redux/sliceInputSearch";
import { SearchData } from "../../interfaces/Search";
import { addResult, emptyResult } from "../../redux/sliceResult";

export default function Search() {
  const dispatch = useDispatch();
  const storedState = localStorage.getItem("reduxState");
  const parsedState = storedState ? JSON.parse(storedState) : null;

  const storedStateInput = localStorage.getItem("reduxInputState");
  const parsedStateInput = storedStateInput
    ? JSON.parse(storedStateInput)
    : null;

  dispatch(emptyResult());
  parsedState.map((value: SearchData) => {
    dispatch(addResult(value));
  });
  dispatch(addInputSearch(parsedStateInput));

  return (
    <>
      <Header />
      <Searching />
      <Footer />
    </>
  );
}
