import { useState } from "react";
import "./ListGroup.css";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${(props) => (props.active ? "blue" : "none")};
`;

interface Props {
  cities: string[];
  heading: string;
  onSelectCity: (cities: string) => void;
}

function ListGroup({ cities, heading, onSelectCity }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <h1>{heading}</h1>
      {cities.length === 0 && <p>No items found</p>}
      <List>
        {cities.map((cities, index) => (
          <ListItem
            active={index === selectedIndex}
            key={cities}
            onClick={() => {
              setSelectedIndex(index);
              onSelectCity(cities);
            }}
          >
            {cities}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
