import { LOAD_ELEMENTS } from "../types";
import { DATA } from "../../data";


export const loadElements = () => {
  return {
    type: LOAD_ELEMENTS,
    payload: DATA
  };
};