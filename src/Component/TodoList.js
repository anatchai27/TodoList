import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const items = [
  // your items here
];

function TodoList() {
  const [mainList, setMainList] = useState(items);
  const [fruitList, setFruitList] = useState([]);
  const [vegList, setVegList] = useState([]);

  const moveItem = (item, index) => {
    setMainList(mainList.filter((_, i) => i !== index));

    if (item.type === "Fruit") {
      setFruitList([...fruitList, item]);
    } else {
      setVegList([...vegList, item]);
    }

    setTimeout(() => {
      setMainList([...mainList, item]);

      if (item.type === "Fruit") {
        setFruitList(fruitList.filter((_, i) => i !== fruitList.length - 1));
      } else {
        setVegList(vegList.filter((_, i) => i !== vegList.length - 1));
      }
    }, 5000);
  };

  return (
    <Container>
      <div className="column">
        <h2>Item</h2>
        <ul>
          <li>Orange</li>
          <li>Pineapple</li>
          <li>Cucumber</li>
          <li>Watermelon</li>
          <li>Carrot</li>
          <li>Apple</li>
          <li>Tomato</li>
        </ul>
      </div>
      <div className="column">
        <h2>Fruit</h2>
        <ul>
          <li>Banana</li>
          <li>Mango</li>
        </ul>
      </div>
      <div className="column">
        <h2>Vegetable</h2>
        <ul>
          <li>Mushroom</li>
        </ul>
      </div>
    </Container>
  );
}

export default TodoList;
