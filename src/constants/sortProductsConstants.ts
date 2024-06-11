import { SelectOption } from "../types/sortProductsOptions";

export const sortProductsOptions: SelectOption[] = [
  { label: "Alphabetical Order", value: "name" },
  { label: "Recently Added (Newest First)", value: "date_desc" },
  { label: "Recently Added (Oldest First)", value: "date_asc" },
];
