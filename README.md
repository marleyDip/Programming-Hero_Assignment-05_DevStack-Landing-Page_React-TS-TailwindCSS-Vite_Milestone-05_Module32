# 🧩 Dev Stack

**Dev Stack** is a browsable catalogue of frontend, backend, database, styling,
DevOps, and tooling technologies. Visitors can look through each option side
by side, then collect the ones they'd actually reach for on their next
project into a personal "Your Stack" list — with duplicate protection, one-
click removal, and toast feedback along the way.

## 🛠 Built With

- **React 19** — component-based UI
- **TypeScript** — static typing across components, hooks, and data
- **Tailwind CSS v4 + DaisyUI** — utility-first styling and themeable UI primitives
- **React-Toastify** — toast notifications for add / duplicate / remove / remove-all
- **Vite** — dev server and production build tooling

## ✨ Features

### 1. 🔍 Explore Technologies

Browse different development technologies with useful information such as:

- Technology name
- Category
- Description
- Difficulty level
- Rating
- Technology badge

### 2. 📦 Build Your Personal Stack

Add your favorite technologies to the **Your Stack** section. You can also:

- Prevent duplicate technologies
- Remove individual technologies
- Clear the entire stack
- View the total number of selected technologies

### 3. 📱 Responsive and Interactive Design

Enjoy a clean and responsive interface across desktop, tablet, and mobile devices, with interactive buttons, loading states, error handling, and toast notifications.

## 📁 Project Structure

```
src/
  components/     # Navbar, Hero, TechnologyCard, TechnologyGrid,
                   # StackSidebar, StackItem, Footer, Loader, StackGraphic
  hooks/
    useTechnologies.ts   # fetches /technologies.json, tracks loading/error
    useStack.ts          # add / remove / clear + toast notifications
  types/
    technology.ts        # shared Technology / Category / Difficulty types
  App.tsx
  main.tsx
public/
  technologies.json       # the 15-item technology catalogue
```

## 🚀 Getting Started

```bash
npm install
npm run dev       # start the dev server
npm run build     # type-check and build for production
npm run preview   # preview the production build
```

---

## 📝 React Questions and Answers

### 1. What is JSX, and why is it used in React?

JSX stands for JavaScript XML. It allows us to write HTML-like syntax or code inside JavaScript/TypeScript.

React uses JSX to describe the structure of the user interface in a readable way. It makes components easier to read and write.

``` tsx
function Welcome() {
  return <h1>Welcome to DevStack</h1>;
}
```

### 2. What is the difference between props and state?

| **Props** | **State** |
|---|---|
| Props are data passed from a parent component to a child component. | State is data managed inside a component or custom hook. |
| Props are read-only. | State can be updated. |
| Props help make components reusable. | State helps make the UI interactive and dynamic. |

``` tsx
<TechnologyCard technology={technology} />
```

In this project,

- [x] A `Technology` object passed into `TechnologyCard` is a prop; the `stack` array living in `useStack` is state, because it changes as the user adds and removes items.

### 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook allows a functional component to store and update data. When the state changes, React re-renders the component.

In our project, we used it in useStack() custom hook to manage the selected technologies:

``` tsx
const [stack, setStack] = useState<Technology[]>(() => loadStack());
```

- `stack` is a state variable that stores selected technologies (current state value).
- The `loadStack` function is a initial state value. The initial value was only used when the state was initialized.
- When component mounts, function calls and it's return value is the initial state value and show only first time when open in browser.
- `setStack` is a state updater function to updates the stack.
- The UI updates whenever the stack changes.

- [x] We also used state in the navbar to control whether the mobile menu is open or closed.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook runs side-effect code after a component renders. It is commonly used for data fetching, subscriptions, and interacting with external systems.

In this project, it was used inside `useTechnologies` to fetch data from the local JSON file after the component mounted.

``` tsx
useEffect(() => {
  fetch("/data/technologies.json")
    .then((response) => response.json())
    .then((data) => setTechnologies(data));
}, []);
```

- [x] We needed it because fetching JSON data is an operation outside the normal rendering process.
- [x] The empty dependency array means the effect runs after the initial render.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` prop to identify individual list items. It helps React understand which items were added, removed, or updated.

``` tsx
{technologies.map((technology) => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />
))}
```

- [x] when a technology is removed from the stack, and the list re-renders.
- [x] Here, `technology.id` is used as the key for both the technology grid and the stack list, since it uniquely and stably identifies each item..
- [x] A stable and unique key helps React update the list efficiently and correctly.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different UI elements based on a condition. 

In this project, an empty-stack message is displayed when no
technology has been selected:

``` tsx
{stack.length === 0 ? (
  <p>Your stack is empty. Add technologies to get started.</p>
) : (
  <StackItemList stack={stack} />
)}
```

- [x] If stack.length === 0, React displays the empty message. Otherwise, it displays the selected technologies.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child through props:

``` tsx
<TechnologyGrid
  technologies={technologies}
  isInStack={isInStack}
  onAdd={addToStack}
/>
```

- [x] Here, Technology.tsx passes data and functions to TechnologyGrid.

A child can communicate with its parent by calling a function (usually with some data as an argument) received through props.

``` tsx
function TechnologyCard({ technology, onAdd }) {
  return (
    <button onClick={() => onAdd(technology)}>
      Add to Stack
    </button>
  );
}
```

- [x] The child does not directly change the parent's state.
- [x] Instead, it calls the parent's function, and the parent updates the shared state.

In this project,

- `Technology.tsx` manages the shared stack logic and
passes data and handler functions to `TechnologyGrid` and
`StackSidebar`.
- `TechnologyGrid` displays the technologies.
- `TechnologyCard` calls onAdd() when the user clicks the button.
- `StackSidebar` receives the stack and displays selected technologies.

## Project Purpose

This project practices React concepts such as JSX, components, props,
state, hooks, conditional rendering, list rendering, data fetching, and lifting state up.