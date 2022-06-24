import React, { useEffect } from "react";
import '../App.css';
import { Button, Stack, TextField } from "@mui/material";
import { useFuzzy } from "react-use-fuzzy";

interface SearchProps {
  setResultList: (value: any) => void;
  data: any[];
  searchKeys: string[];
}

export const Search: React.FC<SearchProps> = ({ data, searchKeys, setResultList }) => {
  const { result, keyword, search } = useFuzzy<any>(data, {
      keys: [...searchKeys],
    });

    useEffect(() => {
        setResultList(result);
    }, [data])
  return (
    <div>
      <Stack width={"400px"} direction="row" spacing={0}>
        <TextField
          id="search"
          value={keyword}
          onChange={(e) => {
            search(e.target.value)
            setResultList(result)
          }}
          color="primary"
          label="Search..."
          fullWidth
          variant="outlined"
        />
        <Button onClick={() => setResultList(result)} variant="outlined">🔍</Button>
      </Stack>
      <small className="result-text">{result.length} Results </small>
      {/* {result.length > 0 && (
        <div className="results">
          <h2>Search Results</h2>
          {result.map((r, id) => (
            <object key={id}>{r.name}</object>
          ))}
        </div>
      )} */}
    </div>
  );
};
