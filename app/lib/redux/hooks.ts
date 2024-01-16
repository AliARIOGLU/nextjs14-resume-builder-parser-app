import { useEffect } from "react";
import { store, useAppDispatch } from "./store";
import {
  loadStateFromLocalStorage,
  saveStateToLocalStorage,
} from "./local-storage";
import { deepMerge } from "../deep-merge";
import { initialResumeState, setResume } from "./resumeSlice";
import { Resume } from "./types";
import { Settings, initialSettings, setSettings } from "./settingsSlice";

export const useSaveStateToLocalStorageOnChange = () => {
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      saveStateToLocalStorage(store.getState());
    });

    return unsubscribe;
  }, []);
};

export const useSetInitialStore = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const state = loadStateFromLocalStorage();
    if (!state) return;
    if (state.resume) {
      const mergedResumeState = deepMerge(
        initialResumeState,
        state.resume
      ) as Resume;
      dispatch(setResume(mergedResumeState));
    }
    if (state.settings) {
      const mergedSettingsState = deepMerge(
        initialSettings,
        state.settings
      ) as Settings;
      dispatch(setSettings(mergedSettingsState));
    }
  }, [dispatch]);
};
