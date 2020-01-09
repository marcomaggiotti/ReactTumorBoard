import React from "react";

const thead = ["ID", "TumorArea", "ImmuneArea", "StromaArea"];
const tbody = [
  {
    className: "table-success",
    data: ["BRACA03_MIB1", "20002", "12442", "3244"]
  },
  {
    className: "",
    data: ["BRACA04_MIB1", "20002", "12442", "3244"]
  },
  {
    className: "table-info",
    data: ["BRACA05_MIB1", "20002", "12442", "3244"]
  },
  {
    className: "",
    data: ["BRACA06_MIB1", "20002", "12442", "3244"]
  },
  {
    className: "table-danger",
    data: ["BRACA07_MIB1", "20002", "12442", "3244"]
  },
  { className: "", data: ["BRACA07_MIB1", "20002", "12442", "3244"] },
  {
    className: "table-warning",
    data: ["BRACA08_MIB1", "20002", "12442", "3244"]
  },
  {
    className: "table-success",
    data: ["BRACA09_MIB1", "20002", "12442", "3244"]
  },
  {
    className: "",
    data: ["BRACA010_MIB1", "20002", "12442", "3244"]
  },
  {
    className: "table-info",
    data: ["BRACA12_MIB1", "20002", "12442", "3244"]
  },
  {
    className: "",
    data: ["BRACA13_MIB1", "20002", "12442", "3244"]
  },
  {
    className: "table-danger",
    data: ["BRACA14_MIB1", "20002", "12442", "3244"]
  },
  { className: "", data: ["BRACA16_MIB1", "20002", "12442", "3244"] },
  {
    className: "table-warning",
    data: ["BRACA20_MIB1", "20002", "12442", "3244"]
  }
];


const GeneralContext = React.createContext(null)

export default GeneralContext;

export { thead, tbody };
