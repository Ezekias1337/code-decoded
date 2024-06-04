// Interfaces and Types
import { Field, DropdownField } from "../constants/formTypes";

/* 
    ? These "is type of field x" functions would be basically useless in vanillaJS,
    ? These are simply used to please the compiler for accessing attributes of types that aren't present
    ? in all of the types, without them the compiler will complain
*/

const isDropdownField = (field: Field): field is DropdownField =>
  (field as DropdownField).dropdownOptions !== undefined;

export default isDropdownField;