import React, { useState, useEffect } from "react";
import { UseFormInputs } from "./checkbox";
import { Pages } from "./mock";
import "./styles.css";

const App = () => {
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(Pages);
  }, [list]);

  const handleSelectAll = e => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(list.map(li => li.id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const handleClick = e => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter(item => item !== id));
    }
  };

  const handleClickDone = e => {
    console.log(isCheck);
  };

  const pages = list.map(({ id, name }) => {
    return (
      <div className="box">
        <label>{name}
        <UseFormInputs
          key={id}
          type="checkbox"
          name={name}
          id={id}
          handleClick={handleClick}
          isChecked={isCheck.includes(id)}
        />
        </label>
      </div>
    );
  });

  return (
    <div className="App">
      <div className="box">
        <label>All pages
        <UseFormInputs
          type="checkbox"
          name="selectAll"
          id="selectAll"
          handleClick={handleSelectAll}
          isChecked={isCheckAll}
        />
        </label>
      </div>
      <div className="border"></div>
      {pages}
      <div className="border mr"></div>
      <button className="btn" onClick={handleClickDone}>Done</button>
    </div>
  );
};

export default App;


