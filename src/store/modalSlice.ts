import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
    isAddModalOpen: boolean;
    isEditModalOpen: boolean;
    isDeleteModalOpen: boolean;
}

const initialState: ModalState = {
    isAddModalOpen: false,
    isEditModalOpen: false,
    isDeleteModalOpen: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleAddModal(state) {
      state.isAddModalOpen = !state.isAddModalOpen;
    },
    toggleEditModal(state) {
      state.isEditModalOpen = !state.isEditModalOpen;
    },
    toggleDeleteModal(state) {
      state.isDeleteModalOpen = !state.isDeleteModalOpen;
    }
  },
});

export const modalActions = modalSlice.actions;
export const modalReducer = modalSlice.reducer;