import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Searching from "../../components/searching";
import { useDispatch } from "react-redux";
import { addInputSearch } from "../../redux/sliceInputSearch";
import { addSearch, empty } from "../../redux/sliceSearch";
import { SearchData } from "../../interfaces/Search";

export default function Search() {
  const dispatch = useDispatch();
  const storedState = localStorage.getItem("reduxState");
  const parsedState = storedState ? JSON.parse(storedState) : null;

  const storedStateInput = localStorage.getItem("reduxInputState");
  const parsedStateInput = storedStateInput
    ? JSON.parse(storedStateInput)
    : null;

  dispatch(empty());
  parsedState.map((value: SearchData) => {
    dispatch(addSearch(value));
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
