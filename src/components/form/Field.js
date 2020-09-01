import React from 'react';

const Field = (props) => {
  const { label, name, change, InputType } = props;

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
      <InputType className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name={name} onChange={change} />
    </div>
  );
};

export default Field;
