import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Card, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useFuzzy } from "react-use-fuzzy";
import { Search } from "./components/Search";
import CAKE_JSONDATA from "./CakeData.json";
import PEOPLE_JSONDATA from "./PersonData.json";
// import CAKE_JSONDATA from "./CakeData.json";
import { Cake, CakeItem } from "./interfaces/Cake";
import { Person, PersonItem } from "./interfaces/People";
import { CakeList } from "./components/CakeList";
import { PersonList } from "./components/PersonList";

// const JSONDATA = [
//   {'name' : 'kevin'},
//   {'name' : 'albert'},
//   {'name' : 'alice'},
//   {'name' : 'kelvin'}
// ]

function App() {
  const OBJECT_OPTIONS = [
    {
      id: "cake",
      data: CAKE_JSONDATA,
      label: "Cake 🎂",
      searchKeys: ["name", "type", "batters.batter.type", "topping.type"],
    },
    {
      id: "people",
      data: PEOPLE_JSONDATA,
      label: "People 🧍",
      searchKeys: [
        "name.first",
        "name.last",
        "name.title",
        "location.street.number",
        "location.street.name",
        "location.city",
        "location.country",
        "location.postcode"
      ],
    },
    // { id: "animals", label: "Animals 🐶" },
  ];

  const [cakeResultList, setCakeResultList] = useState<Cake[]>([]);
  const [peopleResultList, setPeopleResultList] = useState<Person[]>([]);

  const [currentOption, setCurrentOption] = useState(OBJECT_OPTIONS[0]);

  return (
    <div className="App">
      <div className="App-header">
        <h1>Fuzzy Search</h1>
        <Search
          setResultList={ currentOption.id === OBJECT_OPTIONS[0].id ? setCakeResultList : setPeopleResultList}
          data={currentOption.data}
          searchKeys={currentOption.searchKeys}
        />
      </div>
      <div className="options-list">
        <h3>Search Object:</h3>
        <Stack width={"400px"} direction="row" spacing={2}>
          {OBJECT_OPTIONS.map((o) => (
            <Card
              key={o.id}
              onClick={() => setCurrentOption(o)}
              className={`option ${currentOption.id === o.id ? "active" : ""}`}
            >
              {o.label}
            </Card>
          ))}
        </Stack>
      </div>
      <div className="results">
        {cakeResultList.length > 0 &&
          (currentOption.id === OBJECT_OPTIONS[0].id ? (
            <>
              <CakeList cakes={cakeResultList} />
            </>
          ) : (
            <>
              <PersonList people={peopleResultList} />
            </>
          ))}
      </div>
    </div>
  );
}

export default App;
