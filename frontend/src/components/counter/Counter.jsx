import { useState, useEffect } from "react";
import BButton from "../shared/BButton";

const Counter = ({ updateState }) => {
  const styles = {
    button: {
      padding: "10px 20px",
      margin: "0 5px",
      fontSize: "1.2em",
      borderRadius: "5px",
      border: "none",
      cursor: "pointer",
      backgroundColor: "lightblue",
      color: "white",
    },
    h2: {
      fontSize: "2em",
      color: "blue",
    },
  };

  // create state instance for the data you want to keep track of
  // const [getter, setter] = useState(defaultValue);
  const [counterValue, setCounterValue] = useState(0);

  // handle increment
  const increment = () => {
    setCounterValue(counterValue + 1);
  };
  // handle decrement
  const decrement = () => {
    if (counterValue === 0) {
      return;
    } else {
      setCounterValue(counterValue - 1);
    }
  };

  // handle reset
  const reset = () => {
    setCounterValue(0);
    };
    
    // handle logout
    const handleLogout = () => {
        updateState(false);
    }

    // side effect operation
    const callAlert = () => {
      console.log("Hello from useEffect");
    }

  // useEffect hook
  useEffect(() => {
    callAlert();
  }, [counterValue ]);

  return (
    <div>
      <h2 style={styles.h2}>Count: {counterValue}</h2>

      <div>
        <button style={styles.button} onClick={increment}>
          Increment
        </button>

        <button style={styles.button} onClick={decrement}>
          Decrement
        </button>

        <button style={styles.button} onClick={reset}>
          Reset
        </button>
      </div>

      <BButton bgColor="red" btnFunc={handleLogout}>Log out</BButton>
    </div>
  );
};

export default Counter;
