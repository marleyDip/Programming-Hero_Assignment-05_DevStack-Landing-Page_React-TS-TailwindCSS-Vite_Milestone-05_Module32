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

1. **A single-source gradient theme.** The orange → pink → violet brand
   gradient is defined once, as a CSS custom property
   (`--gradient-brand` in `src/index.css`), and reused for the brand
   name, hero heading highlight, and every primary button — so the whole
   app can be re-themed by editing one value.
2. **A real add-to-stack workflow, not just a toggle.** Adding a
   technology disables its card button (`✓ Added to Stack`), updates a
   live count in the sidebar, and blocks duplicate adds with a warning
   toast — while removal works either one item at a time or all at once.
3. **Fully responsive layout with no hardcoded data.** The technology
   catalogue loads from a local JSON file at runtime (via `fetch` inside
   a `useEffect`), and the grid reflows from 3 columns on desktop to 2 on
   tablet to 1 on mobile, with a dedicated hamburger navbar layout below
   the `md` breakpoint.

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

## 📝 React Questions

**What is JSX, and why is it used in React?**
JSX is a syntax extension that lets you write HTML-like markup directly
inside JavaScript/TypeScript files. Under the hood it compiles down to
plain `React.createElement(...)` calls. It's used because it lets you
describe what a piece of UI should look like right next to the logic
that drives it, instead of juggling separate template files — which
makes components easier to read and reason about.

**What is the difference between props and state?**
Props are data passed *into* a component from its parent — a component
can't change its own props, only read them. State is data a component
owns and manages *itself*, and can update over time (usually via
`useState`). In this project, a `Technology` object passed into
`TechnologyCard` is a prop; the `stack` array living in `useStack` is
state, because it changes as the user adds and removes items.

**What does the `useState` hook do, and where did you use it in this project?**
`useState` gives a component a piece of memory that persists between
re-renders, plus a setter function that triggers a re-render when the
value changes. It's used in `useStack.ts` to hold the `stack` array (the
technologies the user has selected), in `useTechnologies.ts` to hold the
fetched catalogue plus loading/error flags, and in `Navbar.tsx` to track
whether the mobile menu is open.

**What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` runs a side effect after a component renders — things like
data fetching, subscriptions, or manually touching the DOM, which don't
belong in the render logic itself. Fetching `technologies.json` is a side
effect (it talks to the network), so it's wrapped in `useEffect` inside
`useTechnologies.ts` with an empty dependency array, meaning it runs once
when the app first mounts, sets `isLoading` to `false` once the data (or
an error) comes back, and cleans up an `isMounted` flag so it doesn't try
to update state if the component unmounts mid-fetch.

**Why does every item in a `.map()` list need a unique `key` prop?**
React uses the `key` to match each rendered element to the same
underlying item across re-renders, so it can update, reorder, or remove
the right DOM node instead of re-creating the whole list from scratch.
Without stable keys, React can mix up which item is which — for example
when a technology is removed from the stack, and the list re-renders. In
this project, `technology.id` is used as the key for both the technology
grid and the stack list, since it uniquely and stably identifies each
item.

**What is conditional rendering? Show one place you used it (example: the empty stack message).**
Conditional rendering means showing different UI depending on some piece
of state, using normal JavaScript conditionals (ternaries, `&&`, early
returns) inside JSX. `StackSidebar.tsx` does this for the empty state:

```tsx
{count === 0 ? (
  <p>Nothing here yet. Add a technology from the list to start building your stack.</p>
) : (
  <ul>{/* ...stack items... */}</ul>
)}
```

`App.tsx` does the same thing for the catalogue itself, choosing between
a loading spinner, an error message, or the technology grid depending on
the current fetch state.

**How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
A parent passes data down by writing it as a JSX attribute, which the
child receives as a prop — e.g. `App.tsx` passes `technology` and
`isAdded` into `TechnologyCard`. To send something back *up*, the parent
passes a callback function down as a prop, and the child calls that
function (usually with some data as an argument) when something
happens. In this project, `App.tsx` passes `addToStack` down into
`TechnologyGrid` and then into `TechnologyCard` as the `onAdd` prop; when
its button is clicked, the card calls `onAdd(technology)`, which runs
the parent's state update.
