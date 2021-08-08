import React, { useState } from 'react';
import CardList from '../components/CardList';
import AddRobot from '../components/AddRobot';
import SearchBox from '../components/SearchBox';
import { robotsData } from '../robots';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchField } from '../actions';

function App() {
  const dispatch = useDispatch();
  const { searchField } = useSelector((state) => state);
  const [inputBox, setInputBox] = useState({});
  const robots = robotsData;
  const [newBot, setNewBot] = useState('');
  const [mode, setMode] = useState('');
  const [title, setTitle] = useState('RoboFriends');
  const [theme, setTheme] = useState('f-subheadline lh-title');

  const onAddChange = (event) => {
    setNewBot(event.target.value);
    setInputBox(event);
  };

  const onSearchChange = (event) => {
    dispatch(setSearchField(event.target.value));
  };

  const modeChange = () => {
    if (title === 'RoboFriends') {
      setMode('set_set2/');
      setTitle('AlienFriends');
      setTheme('f-subheadline lh-title yellow');
    } else {
      setMode('');
      setTitle('RoboFriends');
      setTheme('f-subheadline lh-title light-green');
    }
  };

  const addRobot = () => {
    if (newBot !== '') {
      robots.unshift({
        name: newBot,
        email: newBot.replace(/\s/g, '').toLowerCase() + '@robot.com',
      });
      setNewBot('');
      inputBox.target.value = '';
    }
  };

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  if (!robots.length) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className="tc">
        <h1 className={theme}>{title}</h1>
        <div
          className="mb3"
          style={{ display: 'flex', justifyContent: 'space-evenly' }}
        >
          <AddRobot mode={mode} addChange={onAddChange} addBot={addRobot} />
          <SearchBox
            mode={mode}
            searchChange={onSearchChange}
            modeChange={modeChange}
          />
        </div>

        <CardList mode={mode} robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
