import { create } from "zustand";
import { devtools } from "zustand/middleware";

type CounterStore = {
  count: number;
  history: number[];
  hisrotyIndex: number;
  increment: () => void;
  decrement: () => void;
  timeTravel: (index: number) => void;
};

const useCounterStore = create<CounterStore>()(
  devtools((set) => ({
    count: 0,
    history: [0],
    hisrotyIndex: 0,
    increment: () =>
      set((state) => {
        const newCount = state.count + 1;
        return {
          count: newCount,
          history: [...state.history.slice(), newCount],
          hisrotyIndex: state.hisrotyIndex + 1,
        };
      }),
    decrement: () =>
      set((state) => {
        const newCount = state.count - 1;
        return {
          count: newCount,
          history: [...state.history.slice(), newCount],
          hisrotyIndex: state.hisrotyIndex + 1,
        };
      }),
    timeTravel: (index: number) =>
      set((state) => ({ count: state.history[index] })),
  })),
);

export default useCounterStore;
