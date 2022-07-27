import { useState } from 'react';
import styles from './app.module.scss';


const ListItem = ({ song }) => {
  return <li> {song} </li>
};

const SongList = ({ items }) => {
  return (
    <ul>{items.map((el, i) => <ListItem song={el} key={i} />)}</ul>
  )
};

const App = () => {
  const [list, setList] = useState([
    'Sweet Child of Mine',
    'Enter Sandman',
    'Angel of the Morning'
  ]);

  const [song, setSong] = useState('');

  const removeSong = (song) => {
    const newList = list.filter(el => el !== song);
    setList(newList);
  };

  const addSong = (song) => {
    setList([song, ...list]);
  };

  return (
    <>
      <h1>Song List</h1>
      <input type="text" onKeyUp={(e) => setSong(e.target.value)}/>
      <button onClick={() => removeSong(list[0])}>remove song</button>
      <button onClick={() => addSong(song)}>add song</button>
      <SongList items={list} />
    </>
  );
}
export default App;
