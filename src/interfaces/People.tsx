import { Avatar, Card, Stack } from "@mui/material";

interface Name {
  title: string;
  first: string;
  last: string;
}

interface Timezone {
  offset: string;
  description: string;
}

interface Street {
  number: number;
  name: string;
}

interface Location {
  street: Street;
  city: string;
  state: string;
  country: string;
  postcode: number;
  timezone: Timezone;
}

interface Picture {
  large: "string";
  medium: "string";
  thumbnail: "string";
}

interface Id {
  name: string;
  value: string;
}

interface Login {
  uuid: string;
  username: string;
}

export interface Person {
  id: Id;
  gender: string;
  name: Name;
  location: Location;
  phone: string;
  picture: Picture;
  login: Login;
}

interface PersonItemProps {
  person: Person;
}

export const PersonItem: React.FC<PersonItemProps> = ({ person }) => {
  return (
    <Card key={person.login.username} className="person-item">
        <Avatar alt={person.name.first + ' ' + person.name.last} src={person.picture.thumbnail} />
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      <Stack spacing={1} >
        <span>
          {person.location.street.number} {person.location.street.name}
        </span>
        <span>
          {person.location.city}, {person.location.state}{" "}
          {person.location.postcode}
        </span>
      </Stack>
    </Card>
  );
};
