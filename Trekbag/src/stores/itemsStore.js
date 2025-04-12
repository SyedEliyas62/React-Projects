import { create } from "zustand";
import { initialItems } from "../lib/constants";
import { persist } from "zustand/middleware";

export const useItemStore = create(
  persist((set) => ({
    items: initialItems,
    addItem: (newItemText) => {
      const newItem = {
        id: new Date().getTime(),
        name: newItemText,
        packed: false,
      };
      set((state) => ({ items: [...state.items, newItem] }));
    },
    deleteItem: (id) => {
      set((state) => {
        const newItems = state.items.filter((item) => item.id !== id);
        return { items: newItems };
      });
    },
    toggleItem: (id) => {
      set((state) => {
        const newItems = state.items.map((item) =>
          item.id === id ? { ...item, packed: !item.packed } : item
        );
        return { items: newItems };
      });
    },
    removeAllItems: () => {
      set(() => ({ items: [] }));
    },
    resetToInitial: () => {
      set(() => ({ items: initialItems }));
    },
    markAsComplete: () => {
      set((state) => {
        const newItems = state.items.map((item) => ({
          ...item,
          packed: true,
        }));
        return { items: newItems };
      });
    },
    markAsInComplete: () => {
      set((state) => {
        const newItems = state.items.map((items) => {
          return { ...items, packed: false };
        });
        return { items: newItems };
      });
    },
  })),
  {
    name: "items",
  }
);
