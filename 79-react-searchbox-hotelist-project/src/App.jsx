import { useState } from 'react'
function App() {

  const [search, setSearch] = useState("");

  return (
    <>
      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <HotelList
        search={search}
      />
    </>
  );
}

export default App;