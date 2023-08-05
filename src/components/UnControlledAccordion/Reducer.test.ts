import { reducer, StateType, TOGGLE_COLLAPSED } from "./Reducer";


test("Collapsed should be true", () => {

  const state: StateType = {
    collapsed: false
  }
  const newState = reducer(state, {type: TOGGLE_COLLAPSED})

  expect(() => {reducer(state, {type: "FAKE-TYPE"})}).toThrowError()
  expect(newState.collapsed).toBe(true)
})