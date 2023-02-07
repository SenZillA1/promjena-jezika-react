import React from 'react';

// The to-do list component
function TodoList() {
  const [todos, setTodos] = React.useState([]);
  const [language, setLanguage] = React.useState('english');
  const [inputValue, setInputValue] = React.useState('');

  function addTodo() {
    setTodos([...todos, inputValue]);
    setInputValue('');
  }

  function removeTodo(index) {
    setTodos(todos.filter((todo, i) => i !== index));
  }

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <div>
      <div>
        <label htmlFor="language">Language:</label>
        <select id="language" value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="english">English</option>
          <option value="bosnian">Bosnian</option>
        </select>
      </div>
      <form onSubmit={addTodo}>
        <label htmlFor="new-todo">
          {language === 'english' ? 'New todo:' : 'Nova stavka:'}
          <input type="text" id="new-todo" value={inputValue} onChange={handleInputChange} />
        </label>
        <button type="submit">
          {language === 'english' ? 'Add' : 'Dodaj'}
        </button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button type="button" onClick={() => removeTodo(index)}>
              {language === 'english' ? 'Remove' : 'Ukloni'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}