import React from 'react';

const FieldsLayout = (props) => {
  const { label, name, errors } = props;

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
      {props.children}
      <p className="text-red-500">{errors && errors[name]?.message}</p>
    </div>
  );
};

export default FieldsLayout;
