import { useState } from "react";
import Searchbar from "@/components/Searchbar/Searchbar";
import CreateCardItem from "@/components/Cards/ProductCard/ProductCard";

export default function Products() {
  const [ currentText, setCurrentText] = useState("");

  return (
    <>
      <Searchbar currentText={currentText} setCurrentText={setCurrentText}/>
      <CreateCardItem filter={currentText}/>
    </>
  );
}
