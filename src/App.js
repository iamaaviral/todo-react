import { useState } from 'react';
import './App.css'
import EachListItem from './eachListItem';
import TestComponent from './TestComponent';

function App() {

  const [userInput, setUserInput] = useState('');
  const [list, setList] = useState([]);

  function addTodo(e) {
    e.preventDefault();

    // let newList = list;
    // newList.push(userInput)
    // setList(newList)

    setList([...list, userInput])
    setUserInput("")
    // document.getElementById("item-text").value = ""
  }

  return (
    <section className="container">
      <div id="main">
        <h2 className="title">Add an item here</h2>
        <form className="form-inline">
          <input type="text" id="item-text" onChange={(e) => setUserInput(e.target.value)} value={userInput}/>
          <input type="submit" id="button" value="submit" onClick={addTodo}/>
        </form>
        <h2 className="title">List of things added</h2>
        <ol id="items">
            {list.map((eachItem,index) =>  <EachListItem item={eachItem} key={index}/> )}
        </ol>
      </div>

      <TestComponent userInput={userInput}>
      <header id="main-header">
        <div class="container">
          <h1 id="header-title" ><span>This is my ToDo application</span></h1>
          <input class="search-input" type="text" id="search-input" />
          <button id="button1">send</button>
        </div>
      </header>
      </TestComponent>
    </section>
  )
}

export default App;
