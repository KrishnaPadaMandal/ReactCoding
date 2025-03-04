import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Counter from './Component/Counter';
import Toggle from './Component/Toggle';
import Todo_List from './Component/Todo_List';
import Filter from './Component/Filter'

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/counter">Counter</Link> | <Link to="/toggle">Toggle</Link>
        | <Link to="/Todo_List">Todo List</Link> | <Link to="/filter">Filter</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Welcome to React Coding</h1>} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/toggle" element={<Toggle />} />
        <Route path="/todo_list" element={<Todo_List />} />
        <Route path="/filter" element={<Filter />} />



      </Routes>
    </>
  );
}

export default App;
