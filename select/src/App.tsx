import React, { useState } from "react";
import styles from "./App.module.css";
import { Select } from "./components/Select";
import { Option } from "./interfaces";

const options: Option[] = [
  {
    label: "brak",
    value: "brak",
  },
  {
    label: "brak",
    value: "brak",
  },
  {
    label: "brak",
    value: "brak",
  },
  {
    label: "brak",
    value: "brak",
  },
  {
    label: "brak",
    value: "brak",
  },
];

const App: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<Option | null>(null);
  return (
    <div className={styles["app"]}>
      <Select
        placeholder="brak"
        selected={selectedItem}
        options={options}
        onChange={(selection: Option) => setSelectedItem(selection)}
      />
    </div>
  );
};

export default App;
