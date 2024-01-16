import { RootState } from "./store";

const LOCAL_STORAGE_KEY = "resume-builder-parser-state";

export const saveStateToLocalStorage = (state: RootState) => {
  try {
    const stringfiedState = JSON.stringify(state);
    localStorage.setItem(LOCAL_STORAGE_KEY, stringfiedState);
  } catch (error) {}
};

export const loadStateFromLocalStorage = () => {
  try {
    const stringfiedState = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!stringfiedState) return undefined;
    return JSON.parse(stringfiedState);
  } catch (error) {
    return undefined;
  }
};

export const getHasUsedAppBefore = () => Boolean(loadStateFromLocalStorage());
