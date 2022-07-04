function App() {
  return (
    <div className="App bg-black min-h-screen flex items-center justify-center">
      <h1 className="text-yellow-500 text-3xl font-semibold relative w-52 mr-52">
        {Array.from("My vite + react app".toUpperCase()).map((letter, i) => (
          <span
            key={i}
            className="absolute hover:-translate-y-4 hover:cursor-pointer transition duration-200 w-16 h-16"
            style={{ left: i * 2 + "ch" }}
          >
            {letter}
          </span>
        ))}
      </h1>
    </div>
  );
}

export default App;
