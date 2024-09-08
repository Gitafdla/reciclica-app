import { createReducer, on, Action } from "@ngrx/store";
import { hide, show } from "./loading.actions";
import { LoadingState } from "./LoadingState";

const initialState: LoadingState = {
  show: false
  // Loading tidak muncul ketika aplikasi pertama dijalankan
}

const reducer = createReducer(
  initialState,
  on(show, () => {
    return {show: true};
    // state harus diubah ketika aksi show dipanggil.

  }),
  on(hide, () => {
    return {show: false};
  })

);

export function loadingReducer(state: LoadingState, action: Action){
  return reducer(state, action);
}

