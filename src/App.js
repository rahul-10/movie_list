import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { movieList } from './movies_list'

const movieDetail = (obj, index) => {
  // if(index >= 4){
  //   return null;
  // }
  return (
    <div style = {{ margin: 10 }} key = { index} >
      <h3>{index+1}. {obj.title}</h3>
      {/* <div style = {{ alignItems: 'center' }} ><p style = {{  }} >Genre:</p><p> {obj.genre}</p></div> */}
      <p>Genre: {obj.genre}</p>
      <p>Year: {obj.year}</p>
      <p>Info: {obj.info}</p>
      <img src={obj.cover} style = {{ height: 150, width: 150 }} alt="logo" />  
      {/* cover */}
      <ul>
        <li style = {{ marginTop: 10 }} >
          <a
            className="App-link"
            href={obj.videoThree}
            target="_blank"
            rel="noopener noreferrer" >
            Download Link  1 ()
          </a>
        </li>
        <li style = {{ marginTop: 10 }} >
          <a
            className="App-link"
            href={obj.videoTwo}
            target="_blank"
            rel="noopener noreferrer" >
            Download Link  2
          </a>
        </li>
        <li style = {{ marginTop: 10 }} >
          <a
            className="App-link"
            href={obj.videoOne}
            target="_blank"
            rel="noopener noreferrer" >
            Download Link  3
          </a>
        </li>
      </ul>
      <h3 style = {{ textAlign: 'center' }} >*********************************************</h3>
      {/* <List component="nav" className={classes.root} aria-label="mailbox folders">
      <ListItem button>
        <ListItemText primary="Inbox" />
      </ListItem>
      </List> */}
    </div>
  )
}

const iterateList = () => {
  console.log(movieList);
  return movieList.records.map((obj, index) => {
    return movieDetail(obj, index);
  })
  
}

function App() {
  return (
    <div >
      <header >
        {iterateList()}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
