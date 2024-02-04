import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Column } from "./Column";
import { Init } from "../๊Utils/Init";

function TodoList() {
  const [mainList, setMainList] = useState(Init);
  const [fruitList, setFruitList] = useState([]);
  const [vegList, setVegList] = useState([]);

  const moveItem = (item, index) => {
    try {
      setMainList(mainList.filter((objMain) => objMain !== item));
      if (item.type === "Fruit") {
        setFruitList([...fruitList, item]);
      } else {
        setVegList([...vegList, item]);
      }
      TimeRemove(item);
    } catch (error) {}
  };

  const reMoveFruit = (item, index) => {
    try {
      setFruitList(fruitList.filter((objFruit) => objFruit !== item));
      setMainList([...mainList, ...arrageList(item)]);
    } catch (error) {}
  };
  const reMoveVegetable = (item, index) => {
    try {
      setVegList(vegList.filter((objVeg) => objVeg !== item));
      setMainList([...mainList, ...arrageList(item)]);
    } catch (error) {}
  };

  const TimeRemove = (item) => {
    try {
      setTimeout(() => {
        console.log(item);
        console.log(mainList);
        let exists = mainList.some(
          (objItem) => JSON.stringify(objItem) === JSON.stringify(item)
        );
        if (item.type === "Fruit" && exists) {
          setFruitList(fruitList.filter((objFruit) => objFruit !== item));
          setMainList([...mainList, ...arrageList(item)]);
        } else if (item.type === "Vegetable" && exists) {
          setVegList(vegList.filter((objVeg) => objVeg !== item));
          setMainList([...mainList, ...arrageList(item)]);
        }
      }, 1000 * 5);
    } catch (error) {}
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
