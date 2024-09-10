import { writable } from 'svelte/store';

export const currentQuestion = writable({
    startValue: 5,
    targetValue: 141,
    tryMap: {
      Square: 1,
      Double: 2,
      Increment: 2,
      Decrement: 3,
    },
  });
