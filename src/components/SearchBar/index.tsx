import { useContext } from "react";
import { ContextSearch } from "../../utils/context-search";

import { Container, ContentInputSearch } from "./style";

function SearchBar() {
  const { setContextSearch } = useContext(ContextSearch);

  function handleChange(event: any) {
    setContextSearch(event.target.value);
    console.log(event.target.value);
  }

  function handleSubmit(event: any) {
    event.preventDefault();
  }

  return (
    <Container>
      <form onSubmit={handleSubmit} className="from-search-bar">
        <ContentInputSearch>
          <input
            onChange={handleChange}
            name="onSearch"
            placeholder="Buscar por nome 🔎"
            type="text"
          />
          <button type="submit" className="from-search-bar-btn"></button>
        </ContentInputSearch>
      </form>
    </Container>
  );
}

export default SearchBar;
