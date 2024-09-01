import { loadingReducer } from "./loading.reducers"
import { LoadingState } from "./LoadingState"
import { show } from "./loading.actions";
import { createAction } from "@ngrx/store";

describe('Loading store', () => {

  it('show', () => {
    const initialState: LoadingState = {show: false};
    const newState = loadingReducer(initialState, show());

    expect(newState).toEqual({show: true});
  })

  it('hide', () => {
    const initialState: LoadingState = {show: true};
    const newState = loadingReducer(initialState, hide());

    expect(newState).toEqual({show: false});
  })

  it('should keep state if action is unknown', () => {
    const initialState: LoadingState = {show: true};
    const action = createAction("UNKNOWN")
    const newState = loadingReducer(initialState, action());

    expect(newState).toEqual({show: true});
  })
})

// declaration to 'hide'
function hide(): any {
  throw new Error("Function not implemented.");
}

