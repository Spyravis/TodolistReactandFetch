import React, { useState, useEffect } from "react";

//create your first component
const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [toDoList, setToDoList] = useState([]);
useEffect(()=> {
	getToDoList();
}, [])
const getToDoList = async() => {
	const response = await fetch("http://assets.breatheco.de/apis/fake/todos/user/spyravis");
	const data = await response.json();
	console.log(data);
};

  return (
    <div className="container">
      <h1>To Do List </h1>
      <ul>
        <li>
        <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyDown={(e) => {
              if (e.key === "Enter" && e.target.value.trim()!= "") {
                setToDoList(toDoList.concat([inputValue]));
              }
            }}
            placeholder="What do you need to do?"
          ></input>
        </li>
        {toDoList.map((item, index) => (
          <li>
            {item}{" "}
            <i
              class="fas fa-trash-alt"
              onClick={() =>
                setToDoList(
                  toDoList.filter((t, currentIndex) => index != currentIndex)
                )
              }
            ></i>
          </li>
        ))}
      </ul>
      <div>{toDoList.length} Tasks</div>
    </div>
  );
};

export default Home;
