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
  const songList = [
    'Sweet Child of Mine',
    'Enter Sandman',
    'Angel of the Morning'
  ];

  return (
    <>
      <h1>Song List</h1>
      <SongList items={songList} />
    </>
  );
}
export default App;
