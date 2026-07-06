import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface UiState {
  /** Открыто ли мобильное меню. */
  navOpen: boolean;
  /** Индекс открытого фото в лайтбоксе галереи, либо null. */
  lightboxIndex: number | null;
}

const initialState: UiState = {
  navOpen: false,
  lightboxIndex: null,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleNav(state, action: PayloadAction<boolean | undefined>) {
      state.navOpen = action.payload ?? !state.navOpen;
    },
    closeNav(state) {
      state.navOpen = false;
    },
    openLightbox(state, action: PayloadAction<number>) {
      state.lightboxIndex = action.payload;
    },
    closeLightbox(state) {
      state.lightboxIndex = null;
    },
    stepLightbox(state, action: PayloadAction<{ dir: 1 | -1; total: number }>) {
      if (state.lightboxIndex === null) return;
      const { dir, total } = action.payload;
      state.lightboxIndex = (state.lightboxIndex + dir + total) % total;
    },
  },
});

export const { toggleNav, closeNav, openLightbox, closeLightbox, stepLightbox } =
  uiSlice.actions;
export const uiReducer = uiSlice.reducer;
