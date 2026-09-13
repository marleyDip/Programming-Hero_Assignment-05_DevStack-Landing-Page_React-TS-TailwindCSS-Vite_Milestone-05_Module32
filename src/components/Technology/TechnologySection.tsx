import { useStack } from "../../hooks/useStack";
import { useTechnologies } from "../../hooks/useTechnologies";
import GradientText from "../Common/GradientText";
import Loader from "../Common/Loader";
import StackSidebar from "../Stack/StackSidebar";
import TechnologyGrid from "./TechnologyGrid";

export default function Technology() {
  const { technologies, isLoading, error } = useTechnologies();
  // console.log(technologies);

  const { stack, addToStack, removeFromStack, clearStack, isInStack } =
    useStack();
  // console.log(
  //   "Total Stack",
  //   stack,
  //   "Add to Stack",
  //   addToStack,
  //   "Remove from Stack",
  //   removeFromStack,
  //   "Stack is clear",
  //   clearStack,
  //   "In Stack",
  //   isInStack,
  // );

  return (
    <section
      id="technologies"
      className="mx-auto max-w-7xl mt-28 px-5 sm:px-6 lg:px-8 pb-32"
    >
      {/* Heading */}
      <div className="max-w-xl text-center md:text-left">
        <h2 className="font-inter text-2xl/[1.33] md:text-4xl/[1.11] font-bold md:font-extrabold tracking-[-0.6] md:tracking-[-0.9] text-[#111827] md:text-text-heading">
          Explore the{" "}
          <GradientText variant="technology">Technologies</GradientText>
        </h2>

        <p className="pt-1 md:pt-2 font-inter md:font-jakarta text-[#6b7280] md:text-text-muted text-xs/[1.33] md:text-base/normal">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Technology Card and SideBar */}
      <div className="mt-5 md:mt-10 grid grid-cols-1 gap-5 md:gap-8 md:grid-cols-[1fr_280px] md:items-start">
        {/* Technology Card */}
        <div className="order-2  md:order-1">
          {isLoading && <Loader />}
          {!isLoading && error && (
            <p
              className="rounded-xl border border-rose-400/30 bg-rose-400/10 px-5 py-4 text-sm
            text-rose-300"
            >
              Couldn't load the technology list: {error}
            </p>
          )}

          {!isLoading && !error && (
            <TechnologyGrid
              technologies={technologies}
              isInStack={isInStack}
              onAdd={addToStack}
            />
          )}
        </div>

        {/* SideBar */}
        <div className="order-1 md:order-2 md:sticky md:top-30 md:self-start">
          <StackSidebar
            stack={stack}
            onRemove={removeFromStack}
            onClear={clearStack}
          />
        </div>
      </div>
    </section>
  );
}

/* Lifting state up

-> Lifting state up means moving state from a child component to their closet common parent so that multiple components can share and manage the same data.

=> In this project, Technology.tsx acts as the common parent of TechnologyGrid and StackSidebar. The shared stack state lives in useStack(), which is called by the parent.

How it works

  1. Technology.tsx calls useStack() and gets the shared state and functions.

  2. It passes stack and handler functions to TechnologyGrid and StackSidebar through props.

  3. A card calls onAdd(technology) when the user clicks Add to Stack.

  4. The parent updates the stack, and React re-renders both child components with the latest data.

Key idea: The state is shared through the common parent, not separately created inside each child.

Simple idea

  - Technology.tsx owns the shared stack logic.

  - useStack() manages the stack state.

  - TechnologyGrid displays all technologies.

  - StackSidebar displays selected technologies.

  - Both children communicate through Technology.tsx.

  - When a card is added or removed, the shared state updates and both sections re-render.


                    App.tsx
                       │
             selectedStack state
                       │
          ┌────────────┴────────────┐
          ↓                         ↓
  TechnologySection             StackSidebar
          │                         │
          ↓                         ↓
  TechnologyCard               StackItem



                    App.tsx
                       │
          ┌────────────┴────────────┐
          │                         │
   technologies                 selectedStack
          │                         │
          ↓                         ↓
 TechnologySection           StackSidebar
          │
    ┌─────┴──────┐
    ↓            ↓
TechnologyGrid  StackSidebar
    │
    ↓
TechnologyCard


*/

/* grid-cols[1fr_280px]

=> create a CSS grid with columns.
=> fr means fraction of the available space.

=> grid-template-column: 1fr 280px;
  => Second column = exactly 280px.
  => First column = whatever space remains.  

  remaining space                fixed 280px
┌──────────────────────────────┬──────────────┐
│           1fr                │    280px     │
│                              │              │
│     TechnologyGrid           │ StackSidebar │
│                              │              │
└──────────────────────────────┴──────────────┘

For example, if the container is 1152px wide and the gap is 24px:

1152px total
- 320px sidebar
- 24px gap
────────────
= 808px TechnologyGrid

So approximately:

TechnologyGrid              Sidebar
┌──────────────────────────┬──────────────┐
│         808px            │    320px     │
└──────────────────────────┴──────────────┘

Another approach: grid-cols-12 -> controls the width of grid layout.
  => grid-cols-9 
  => grid-cols-3

Outer grid => grid-cols-12
┌──────────────────────────────────────┬──────────────┐
│        TechnologyGrid 75%            │ Sidebar 25%  │
│                                      │              │
│  Card  Card  Card                    │              │
│  Card  Card  Card                    │              │
│  Card  Card  Card                    │              │
└──────────────────────────────────────┴──────────────┘
            3 cards per row

*/
