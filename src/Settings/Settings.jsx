import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

import "./settings.css"

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
    sessionStorage.setItem('nat', JSON.stringify(newNat))
    setUsers([]);
    alert("Submited with success");
  }

  return (
    <>
      <div className="header">
        <Link to="/"><IoIosArrowBack size={50} /></Link>
        <h1 className="title">Settings</h1>
      </div>
      <div className="container">
        <h2>Select nationality</h2>
        <div>
          {checkedArray &&
            options.map((option, index) => {
              return (
                <div
                  key={option + "_" + index}
                  className="optionNat"
                  >
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
                  <div>{option}</div>
                </div>
              );
            })
          }
        </div>
        <Button onClick={submitNat}>Submit</Button>
      </div>
    </>
  );
}

export default Settings;