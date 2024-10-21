import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Like from "./components/Like/like";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  const closeHandler = () => {
    setAlertVisibility(false);
  };

  return (
    <>
      {alertVisible && <Alert onClose={closeHandler}>My alert</Alert>}
      <Button color="secondary" onClick={() => setAlertVisibility(true)}>
        ClickMe
      </Button>
      <Like onClick={() => console.log("clicked")} />
    </>
  );
}

export default App;
