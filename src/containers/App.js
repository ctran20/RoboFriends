import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import AddRobot from '../components/AddRobot';
import SearchBox from '../components/SearchBox';
import { robotsData } from '../robots';
import { useDispatch, useSelector } from 'react-redux';
import {
  setSearchField,
  setAddChange,
  refreshSearchField,
  resetAddChange,
} from '../redux/actions';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const [width, setWidth] = useState(window.innerWidth);
  const { searchField } = useSelector((state) => state.searchRobots);
  const { newBot, inputBox } = useSelector((state) => state.addChange);
  /* For Fetching
  const { robotz, isPending, error } = useSelector(
    (state) => state.requestRobots
  );*/

  const robots = robotsData;
  const [mode, setMode] = useState('');
  const [title, setTitle] = useState('RoboFriends');
  const styles = 'pointer lh-title grow';
  const [theme, setTheme] = useState(styles + ' light-green');

  const onAddChange = (event) => {
    dispatch(setAddChange(event));
  };

  const onSearchChange = (event) => {
    dispatch(setSearchField(event.target.value));
  };

  /* For fetching robots json from url
  const onRequestRobots = () => {
    dispatch(requestRobots());
  };

  useEffect(() => {
    onRequestRobots();
  }, []);
  */

  const modeChange = () => {
    if (title === 'RoboFriends') {
      setMode('set_set2/');
      setTitle('AlienFriends');
      setTheme(styles + ' yellow');
    } else {
      setMode('');
      setTitle('RoboFriends');
      setTheme(styles + ' light-green');
    }
  };

  const addRobot = () => {
    if (newBot.replace(/\s/g, '') !== '') {
      robots.unshift({
        name: newBot,
        email: newBot.replace(/\s/g, '').toLowerCase() + '@robot.com',
      });
      inputBox.target.value = '';
    }
    dispatch(refreshSearchField());
    dispatch(resetAddChange());
  };

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  //Adjust Screen Layout
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);

  if (!robots.length /*isPending if fetching*/) {
    return <h1>Loading...</h1>;
    //if(!error) if fetching
  } else {
    return (
      <div className="tc">
        <div className="titleFrame">
          <h1
            style={width <= 760 ? { fontSize: '3rem' } : { fontSize: '5rem' }}
            className={theme}
          >
            {title}
          </h1>
        </div>
        <div
          className="ma4 buttonLayout"
          style={width <= 780 ? { flexDirection: 'column' } : {}}
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
