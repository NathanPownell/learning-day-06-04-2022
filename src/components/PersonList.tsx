import { Person, PersonItem } from "../interfaces/People";
import {Stack} from '@mui/material';

interface PersonListProps {
  people: Person[];
}

export const PersonList: React.FC<PersonListProps> = ({ people }) => {
  return (
    <Stack spacing={2}>
      {people.map((i) => (
          <PersonItem key={i.login.username} person={i} />
      ))}
    </Stack>
  );
};
