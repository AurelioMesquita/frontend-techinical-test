import React from "react";
import { DataItens, Img, Results } from "./styles";
import magnifyingGlass from "../../assets/magnifying-glass.png";
import { useDispatch } from "react-redux";
import { addInputSearch } from "../../redux/sliceInputSearch";
import { SearchData } from "../../interfaces/Search";

interface DataResultsProps {
  data: SearchData;
  setFilterSearch: React.Dispatch<React.SetStateAction<SearchData[]>>;
  setInputSeachId: React.Dispatch<React.SetStateAction<string>>;
}

export function DataResults({
  data,
  setFilterSearch,
  setInputSeachId,
}: DataResultsProps) {
  const dispatch = useDispatch();

  const handleAutoComplete = (value: any) => {
    dispatch(addInputSearch(value.title));
    setInputSeachId(value.id);
    setFilterSearch([]);
  };

  return (
    <>
      <DataItens key={data.id} onClick={() => handleAutoComplete(data)}>
        <Img src={magnifyingGlass} alt="magnifying-glass" />
        <Results>{data.title}</Results>
      </DataItens>
    </>
  );
}
