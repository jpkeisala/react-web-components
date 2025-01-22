# Web Components with React and Vite

This project demonstrates how to create and integrate **Web Components** using **React**, **TypeScript**, and **Vite**. The goal is to build reusable, encapsulated components that can be embedded into any web application, including legacy systems like ASP.NET MVC.

## Features

- **React Components as Web Components**: Easily reusable in any HTML page.
- **Encapsulation**: Using Shadow DOM to prevent style conflicts.
- **API Integration**: Fetching data from JSONPlaceholder.
- **Efficient Bundling**: Vite for fast development and production builds.
- **TypeScript Support**: Ensuring type safety and better developer experience.
- **ShadCN for Style Scoping**: Demonstrating style encapsulation within web components.

## Components

### 1. `TodoList`
Lists todos by fetching data from `https://jsonplaceholder.typicode.com/todos/` and displaying them in a styled list.

**Usage:**
```html
<todo-list></todo-list>
```

### 2. `TodoItem`
Displays details of a specific todo item by fetching data from `https://jsonplaceholder.typicode.com/todos/{id}`.

**Usage:**
```html
<todo-item id="2"></todo-item>
```

## Installation

To set up the project locally:

```bash
# Clone the repository
git clone https://github.com/jpkeisala/web-components-react-vite.git

# Navigate to the project folder
cd web-components-react-vite

# Install dependencies
npm install
```

## Development

Run the development server to test the components locally:

```bash
npm run dev
```

Open `http://localhost:5173` to see the components in action.

## Building for Production

To generate the production build, run:

```bash
npm run build
```

The output files will be in the `dist/` directory and can be used in any web environment.

## Usage in External Applications

To use the built components in an external application, include the generated script in your HTML:

```html
<script src="path-to/next-on-todo.umd.js" defer></script>

<todo-list></todo-list>
<todo-item id="2"></todo-item>
```

## Project Structure

```
web-components-react-vite/
├── public/               # Static assets
├── src/                  # Source files
│   ├── components/       # React components
│   │   ├── TodoList.tsx  # Todo list component
│   │   ├── TodoItem.tsx  # Single todo component
│   ├── main.tsx          # Web Component definitions
│   ├── styles/           # CSS Modules
├── dist/                 # Build output
├── vite.config.ts        # Vite configuration
├── package.json          # Project dependencies
└── tsconfig.json         # TypeScript configuration
```

## Technologies Used

- React
- TypeScript
- Vite
- Web Components (Custom Elements, Shadow DOM)
- ShadCN for scoped styles

## License

This project is licensed under the MIT License.

## Author

JP - [Your GitHub Profile](https://github.com/jpkeisala)

---

Feel free to contribute and improve this project!
