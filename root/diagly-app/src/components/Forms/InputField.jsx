import React from 'react';

const InputField = ({
  label,
  type,
  name,
  value,
  placeholder,
  onChange,
  error,
  onBlur,
}) => {
  return (
    <div className="relative mb-5">
      <label
        htmlFor={name}
        className="absolute -top-2.5 left-3 bg-gray-01 px-1 text-gray-12 text-sm font-poppins transition-all"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        className="w-full border border-gray-06 rounded-md px-3 py-3 text-gray-11 text-base bg-gray-01 focus:outline-none focus:ring-1 focus:ring-yellow-09 focus:border-yellow-09 transition-all"
      />
      {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
