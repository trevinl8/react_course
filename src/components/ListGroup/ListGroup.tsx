import { useState } from "react";
import styles from "./ListGroup.module.css";

interface Props {
  cities: string[];
  heading: string;
  onSelectCity: (cities: string) => void;
}

function ListGroup({ cities, heading, onSelectCity }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {cities.length === 0 && <p>No items found</p>}
      <ul className={[styles.listGroup, styles.container].join(" ")}>
        {cities.map((cities, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={cities}
            onClick={() => {
              setSelectedIndex(index);
              onSelectCity(cities);
            }}
          >
            {cities}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
