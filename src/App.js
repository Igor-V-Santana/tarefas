import ListProvider from "./components/context/List";
import Header from "./components/Header";
import Task from "./components/Task";

function App() {
  return (
    <div className="App">
      <ListProvider>
        <Header />
        <Task />
      </ListProvider>
    </div>
  );
}

export default App;
