import React, { useEffect, useState } from "react";
import data from "../../services/faker";
import { DataComponents, Img, ImgClose, Text, TextComponent } from "./styles";

import magnifyingGlass from "../../assets/magnifying-glass.png";
import { DataResults } from "../dataResults";
import close from "../../assets/close.png";

import { useDispatch, useSelector } from "react-redux";
import { addInputSearch, useInputSearch } from "../../redux/sliceInputSearch";
import { addSearch, empty, reset } from "../../redux/sliceSearch";

import { SearchData } from "../../interfaces/Search";

export function Autocomplete() {
  const dispatch = useDispatch();
  const searching = useSelector(useInputSearch);

  const [inputSearchId, setInputSeachId] = useState("");
  const [filterSearch, setFilterSearch] = useState<SearchData[]>([]);

  const handleFilter = ({ target }: any) => {
    const searchTerm = target.value.toUpperCase();

    const newFilter: SearchData[] = data.filter(
      value =>
        value.title.toUpperCase().includes(searchTerm) ||
        value.type.toUpperCase().includes(searchTerm),
    );
    setFilterSearch(newFilter);
    if (searchTerm === "") {
      setFilterSearch([]);
    }
    dispatch(empty());
    dispatch(addInputSearch(target.value));
  };

  const handleEscKeyPress = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setFilterSearch([]);
    }
  };

  const handleClose = () => {
    setFilterSearch([]);
    dispatch(addInputSearch(""));
    dispatch(reset());
  };

  useEffect(() => {
    window.addEventListener("keydown", handleEscKeyPress);
    return () => {
      window.removeEventListener("keydown", handleEscKeyPress);
    };
  }, []);

  useEffect(() => {
    if (inputSearchId !== "") {
      const getResultById = data.filter(
        value => value.id === parseInt(inputSearchId),
      );
      const newFilter: SearchData[] = data.filter(value =>
        value.type.toUpperCase().includes(getResultById[0].type.toUpperCase()),
      );

      let result = orderArray(newFilter, inputSearchId);
      result.map((value: SearchData) => {
        dispatch(addSearch(value));
      });
      dispatch(addInputSearch(getResultById[0].title));
    }
  }, [inputSearchId]);

  const orderArray = (array: any, id: string) => {
    const index = array.findIndex(
      (item: { id: number }) => item.id === parseInt(id),
    );

    if (index !== -1) {
      const objectToMove = array.splice(index, 1)[0];
      array.unshift(objectToMove);
    }
    return array;
  };

  return (
    <>
      <TextComponent>
        <Img src={magnifyingGlass} alt="magnifying-glass" />
        <Text
          value={searching}
          onChange={handleFilter}
          placeholder="Buscar..."
        />
        {searching.length > 0 && (
          <ImgClose src={close} alt="close" onClick={() => handleClose()} />
        )}
      </TextComponent>
      {filterSearch.length > 0 && (
        <DataComponents>
          {filterSearch.map(animal => (
            <DataResults
              data={animal}
              setFilterSearch={setFilterSearch}
              setInputSeachId={setInputSeachId}
            />
          ))}
        </DataComponents>
      )}
    </>
  );
}
