import { useState, useEffect } from "react";
import AppBar from "../components/appbar";

export default function Stopwatch() {
  const [isCounting, setIsCounting] = useState(false);
  const [label, setLabel] = useState("START");
  const [d, setD] = useState(0);

  useEffect(() => {
    let intervalId;

    if (isCounting) {
      intervalId = setInterval(() => {
        if (d == 100) setD(0);
        setD((prevD) => prevD + 1);
      }, 10);
    } else {
      clearInterval(intervalId); // Cancella l'intervallo quando smetti di contare
    }

    return () => {
      clearInterval(intervalId); // Pulizia dell'intervallo quando il componente viene smontato
    };
  }, [isCounting]);

  function handleClick() {
    setIsCounting(!isCounting);
    setLabel(isCounting ? "START" : "STOP");
  }

  return (
    <>
      <div>
        {Math.floor(d / 100)} : {d}
      </div>
      <button onClick={handleClick}>{label}</button>
      <AppBar />
    </>
  );
}
