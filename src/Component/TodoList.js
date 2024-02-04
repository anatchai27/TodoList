import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Column } from "./Column";
import { Init } from "../๊Utils/Init";

function TodoList() {
  const [mainList, setMainList] = useState(Init);
  const [fruitList, setFruitList] = useState([]);
  const [vegList, setVegList] = useState([]);
  const [timeouts, setTimeouts] = useState({});

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
      // TimeRemove(item);
      //TODO  If there's an existing timeout for the item, clear it
      if (timeouts[item.name]) {
        clearTimeout(timeouts[item.name]);
      }
      setFruitList(fruitList.filter((objFruit) => objFruit !== item));
      setMainList([...mainList, ...arrageList(item)]);
      // TODO the timeout ID from the timeouts object
      setTimeouts((oldTimeouts) => {
        const newTimeouts = { ...oldTimeouts };
        delete newTimeouts[item.name];
        return newTimeouts;
      });
    } catch (error) {}
  };
  const reMoveVegetable = (item, index) => {
    try {
      //TODO  If there's an existing timeout for the item, clear it
      if (timeouts[item.name]) {
        clearTimeout(timeouts[item.name]);
      }
      setVegList(vegList.filter((objVeg) => objVeg !== item));
      setMainList([...mainList, ...arrageList(item)]);
      // TODO the timeout ID from the timeouts object
      setTimeouts((oldTimeouts) => {
        const newTimeouts = { ...oldTimeouts };
        delete newTimeouts[item.name];
        return newTimeouts;
      });
    } catch (error) {}
  };

  const TimeRemove = (item) => {
    try {
      //TODO  If there's an existing timeout for the item, clear it
      if (timeouts[item.name]) {
        clearTimeout(timeouts[item.name]);
      }

      // Set a timer to move the item back to the main list
      const timeoutId = setTimeout(() => {
        setMainList((oldItems) => [...oldItems, item]);
        if (item.type === "Fruit") {
          setFruitList((oldFruitItems) =>
            oldFruitItems.filter((oldItem) => oldItem.name !== item.name)
          );
        } else {
          setVegList((oldVegetableItems) =>
            oldVegetableItems.filter((oldItem) => oldItem.name !== item.name)
          );
        }

        // TODO the timeout ID from the timeouts object
        setTimeouts((oldTimeouts) => {
          const newTimeouts = { ...oldTimeouts };
          delete newTimeouts[item.name];
          return newTimeouts;
        });
      }, 5000);

      //TODO Store the timeout ID in the timeouts object
      setTimeouts((oldTimeouts) => ({
        ...oldTimeouts,
        [item.name]: timeoutId,
      }));
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
