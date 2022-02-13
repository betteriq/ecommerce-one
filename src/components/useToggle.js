import { useState } from "react";

export default function useToggle(defaultvalue) {
  const [value, setValue] = useState(defaultvalue);
  function toggleValue(value) {
    setValue((currentvalue) =>
      typeof value === "boolean" ? value : !currentvalue
    );
  }
  console.log("value is :", value, "toggleValue is :", toggleValue);
  return [value, toggleValue];
}
