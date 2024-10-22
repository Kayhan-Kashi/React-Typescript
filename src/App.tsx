import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Like from "./components/Like/like";
import ExpandableText from "./components/ExpandableText/ExpandableText";
import ExpandableTextMosh from "./components/ExpandableText/ExpandableTextMosh";

function App() {
  const text: string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.`;
  const [alertVisible, setAlertVisibility] = useState(false);

  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  // add 1 to quantity
  const addQuantity = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };

  // update game property
  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "Kayhan" } });
  };

  // add item to array
  const addItemHandler = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "cheese"] });
  };

  const closeHandler = () => {
    setAlertVisibility(false);
  };

  return (
    <>
      <ul>
        {cart.items.map((item) => (
          <li>{item.quantity}</li>
        ))}
      </ul>
      <ul>
        {pizza.toppings.map((item) => (
          <li>{item}</li>
        ))}
      </ul>

      {alertVisible && <Alert onClose={closeHandler}>My alert</Alert>}
      <div>{game.player.name}</div>
      <Button
        color="secondary"
        onClick={() => {
          setAlertVisibility(true);
          handleClick();
          addItemHandler();
          addQuantity();
        }}
      >
        ClickMe
      </Button>
      <Like onClick={() => console.log("clicked")} />
      <ExpandableText minChar={25}>{text}</ExpandableText>
      <ExpandableTextMosh maxChars={10}>{text}</ExpandableTextMosh>
    </>
  );
}

export default App;
