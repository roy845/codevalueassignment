export enum ButtonEnum {
  ADD_PRODUCT = "Add",
  SAVE = "Save",
  CANCEL = "Cancel",
  RESET = "Reset",
  NEXT_PAGE = "Next Page",
  BACK = "Go back",
  PREVIOUS_PAGE = "Previous Page",
}

// some people use enums and some people are not.
// fyi, developers of typescript recommend to not use enums.
// if you still want to use enums, you can implement it like this:

const BUTTON_TYPES = Object.freeze({
  ADD_PRODUCT: "Add",
  SAVE: "Save",
  CANCEL: "Cancel",
  RESET: "Reset",
  NEXT_PAGE: "Next Page",
  BACK: "Go back",
  PREVIOUS_PAGE: "Previous Page",
});

export type ButtonType = typeof BUTTON_TYPES[keyof typeof BUTTON_TYPES];