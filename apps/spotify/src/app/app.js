
export function App() {
  const header = 'Spotify';
  const body = 'This is a Spotify app';
  const year = new Date().getFullYear();
  return (
    <>
      <header>
        <h1>{header}</h1>
      </header>
      <article>
        {body}
      </article>
      <footer>
        <p>Copyright &copy; {year}</p>
      </footer>
    </>
  );
}
export default App;
