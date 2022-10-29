import { useState, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const Settings = ({ setNat, nat, options, setUsers }) => {

  const [checkedArray, setCheckedArray] = useState(null);

  useEffect(() => {
    function mapArray() {
      return [...Array(options.length)].map((_, index) => {
        return nat.includes(options[index]);
      })
    }
    setCheckedArray(mapArray());
  }, [options, nat])

  function submitNat() {

    let newNat = [];

    for (let i in checkedArray) {
      if (checkedArray[i]) {
        newNat.push(options[i]);
      }
    }
    setNat(newNat);
    setUsers([]);
    alert("Submited with success");
  }

  return (
    <>
      <div style={{ margin: "20px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignContent: "center" }}>
        <Link to="/"><IoIosArrowBack size={50} /></Link>
        <h1 style={{ marginLeft: "20px" }}>Settings</h1>
      </div>
      <div style={{ marginLeft: "100px" }}>
        <h2>Select nationality</h2>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
          {checkedArray &&
            options.map((option, index) => {
              return (
                <div
                  key={option + "_" + index}>
                  <input
                    type="checkbox"
                    value={option}
                    name={option}
                    checked={checkedArray[index]}
                    onChange={() => {
                      let newArray = [...checkedArray];
                      newArray[index] = !checkedArray[index]
                      setCheckedArray(newArray);
                    }} />
                  {option}
                </div>
              );
            })
          }
        </div>
        <button onClick={submitNat}>Submit</button>
      </div>
    </>
  );
}

export default Settings;