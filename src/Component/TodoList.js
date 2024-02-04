import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Column } from "./Column";
import { Init } from "../๊Utils/Init";

function TodoList() {
  const [mainList, setMainList] = useState(Init);
  const [fruitList, setFruitList] = useState([]);
  const [vegList, setVegList] = useState([]);
  const [timeouts, setTimeouts] = useState({});

  const handleTimeout = (item) => {
    const timeoutId = setTimeout(() => {
      setMainList((prevMainList) => [...prevMainList, item]);
      if (item.type === "Fruit") {
        setFruitList((prevFruitList) =>
          prevFruitList.filter((fruit) => fruit.name !== item.name)
        );
      } else {
        setVegList((prevVegList) =>
          prevVegList.filter((veg) => veg.name !== item.name)
        );
      }
      setTimeouts((prevTimeouts) => {
        const newTimeouts = { ...prevTimeouts };
        delete newTimeouts[item.name];
        return newTimeouts;
      });
    }, 5000);

    setTimeouts((prevTimeouts) => ({
      ...prevTimeouts,
      [item.name]: timeoutId,
    }));
  };

  const moveItem = (item, index) => {
    setMainList((prevMainList) => prevMainList.filter((_, i) => i !== index));
    if (item.type === "Fruit") {
      setFruitList((prevFruitList) => [...prevFruitList, item]);
    } else {
      setVegList((prevVegList) => [...prevVegList, item]);
    }
    handleTimeout(item);
  };

  const removeItemFromCategory = (item, categorySetter) => {
    clearTimeout(timeouts[item.name]);
    categorySetter((prevList) =>
      prevList.filter((currentItem) => currentItem.name !== item.name)
    );
    setMainList((prevMainList) => [...prevMainList, item]);
    setTimeouts((prevTimeouts) => {
      const newTimeouts = { ...prevTimeouts };
      delete newTimeouts[item.name];
      return newTimeouts;
    });
  };

  const reMoveFruit = (item) => {
    removeItemFromCategory(item, setFruitList);
  };

  const reMoveVegetable = (item) => {
    removeItemFromCategory(item, setVegList);
  };

  return (
    <Container>
      <Column
        key={1}
        headName={"Item"}
        ListData={mainList}
        onClickList={moveItem}
      />
      <Column
        key={2}
        headName={"Fruit"}
        ListData={fruitList}
        onClickList={reMoveFruit}
      />
      <Column
        key={3}
        headName={"Vegetable"}
        ListData={vegList}
        onClickList={reMoveVegetable}
      />
    </Container>
  );
}

export default TodoList;

const arrageList = (item) => {
  let arr = [item];
  return arr;
};
