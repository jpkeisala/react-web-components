// filepath: /Users/jp/code/learn/react-web-components/src/main.tsx
import ReactDOM from 'react-dom/client';
import NextOnTodo from './components/NextOnTodo';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import PersonaCard from './components/profile-builder/persona-card';

import { injectStyles } from './lib/injectStyles';


class PersonaCardElement extends HTMLElement {
  connectedCallback() {
      const shadow = this.attachShadow({ mode: 'open' });
      injectStyles(shadow);
      const container = document.createElement('div');
      shadow.appendChild(container);
   
      ReactDOM.createRoot(container).render(<PersonaCard  />);
  }
}


class NextOnTodoElement extends HTMLElement {
  connectedCallback() {
      const shadow = this.attachShadow({ mode: 'open' });
      injectStyles(shadow);
      const container = document.createElement('div');
      shadow.appendChild(container);
      const data = this.getAttribute('data') || '';
      ReactDOM.createRoot(container).render(<NextOnTodo data={data} />);
  }
}

class TodoListElement extends HTMLElement {
  connectedCallback() {
      const shadow = this.attachShadow({ mode: 'open' });
      injectStyles(shadow);
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
      const shadow = this.attachShadow({ mode: 'open' });
      injectStyles(shadow);
      const container = document.createElement('div');
      shadow.appendChild(container);
      const id = this.getAttribute('id') || '1';
      ReactDOM.createRoot(container).render(<TodoItem id={parseInt(id, 10)} />);
  }
}

customElements.define('persona-card', PersonaCardElement);
customElements.define('next-on-todo', NextOnTodoElement);
customElements.define('todo-list', TodoListElement);
customElements.define('todo-item', TodoItemElement);
