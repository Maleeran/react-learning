import { create } from "zustand";

interface BoundStore {
  count: number;
  text: string;
}

export const useBoundStore = create<BoundStore>(() => ({
  count: 0,
  text: "Hello",
}));

export const inc = () =>
  useBoundStore.setState((state) => ({ count: state.count + 1 }));

export const setText = (text: string) => useBoundStore.setState({ text });
