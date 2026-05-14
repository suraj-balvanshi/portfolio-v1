import { create } from "zustand";

interface UIState {
  showProfile: boolean;
  toggleProfile: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  showProfile: false,
  toggleProfile: () => set((state) => ({ showProfile: !state.showProfile })),
}));
