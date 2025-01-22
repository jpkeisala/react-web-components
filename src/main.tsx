import ReactDOM from 'react-dom/client';
import NextOnTodo from './components/NextOnTodo';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import './App.css'

class NextOnTodoElement extends HTMLElement {
    connectedCallback() {
        const data = this.getAttribute('data') || '';
        ReactDOM.createRoot(this).render(<NextOnTodo data={data} />);
    }
}
class TodoListElement extends HTMLElement {
  connectedCallback() {
    // Use Shadow DOM for Style Isolation
      const shadow = this.attachShadow({ mode: 'open' });
        const container = document.createElement('div');
        shadow.appendChild(container);
        ReactDOM.createRoot(container).render(<TodoList />);
  }
}

class TodoItemElement extends HTMLElement {
  static observedAttributes = ['id'];

  connectedCallback() {
      this.renderComponent();
  }

  attributeChangedCallback() {
      this.renderComponent();
  }

  renderComponent() {
      const id = this.getAttribute('id') || '1';
      ReactDOM.createRoot(this).render(<TodoItem id={parseInt(id, 10)} />);
  }
}



// Define the web component
customElements.define('next-on-todo', NextOnTodoElement);
customElements.define('todo-list', TodoListElement);
customElements.define('todo-item', TodoItemElement);