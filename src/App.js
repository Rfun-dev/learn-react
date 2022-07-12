import Todo from './component/Todo';

function App() {
  return (
    <div>
      <h2>My Todos</h2>
      <Todo text = 'Learn React'/>
      <Todo text = 'Create React App'/>
      <Todo text = 'Build Own React App'/>
    </div>
  );
}

export default App;
