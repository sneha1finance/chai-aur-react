import React, { useId } from "react";

function Select(
  {
    options, // option gives in format of array
    label,
    className = "",
    ...props
  },
  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && <label htmlFor={id} className=""></label>}
      <select
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
      >
        {options?.map(
          (
            option // ? =>check if any values is present in options or not => () => automatically returns
          ) => (
            <option key={option} value={option}>
              {option}
            </option>
          )
        )}
      </select>
    </div>
  );
}

export default React.forwardRef(Select); // another ways of using forwardref
