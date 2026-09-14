import { useEffect, useState } from "react";
import type { Technology } from "../types/technology";

interface UseTechnologiesResult {
  technologies: Technology[];
  isLoading: boolean;
  error: string | null;
}

export function useTechnologies(): UseTechnologiesResult {
  const [technologies, setRTechnologies] = useState<Technology[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const loadTechnologies = async () => {
      try {
        const response = await fetch("/data/technologies.json", {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Failed to load technologies (${response.status})`);
        }

        const data: Technology[] = await response.json();

        setRTechnologies(data);
      } catch (err) {
        if (err instanceof DOMException && err.name === "AbortError") {
          return;
        }

        setError(
          err instanceof Error ? err.message : "Failed to load technologies.",
        );
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    loadTechnologies();

    return () => {
      controller.abort();
    };
  }, []);

  return { technologies, isLoading, error };
}

/* new AbortController() creates a JavaScript object that lets you cancel or stop asynchronous tasks, network requests, and event listeners.

What It Does & How It Works

  1. The Controller: Calling const controller = new AbortController() creates your main controller object.
  
  2. The Signal: The controller gives you a property called controller.signal, which acts as a communication token you hand off to tasks.
  
  3. The Abort Call: Calling controller.abort() flips the signal to "aborted," telling everything listening to that signal to stop right away.

new AbortController() creates a controller that lets you cancel an ongoing operation, such as a fetch() request.

const controller = new AbortController();

controller.signal
controller.abort();

AbortController = remote control for cancelling a task
AbortController
      │
      ├── signal ──→ fetch()
      │
      └── abort() ──→ CANCEL fetch()



    1. new AbortController() → creates the controller
    
    2. controller.signal → tells fetch which 
    
    3.controller to listen to
    controller.abort() → cancels the operation

It's especially useful in React when a component unmounts while a fetch request is still running.
*/
