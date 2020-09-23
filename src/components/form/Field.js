import React from 'react';

const Field = React.forwardRef((props, ref) => {
  const { label, name, items, errors, change, InputType } = props;
  const inputClass = 'appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline';

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
      {InputType == 'select' ?
        <InputType
          ref={ref}
          className={inputClass}
          name={name}
          onChange={change}
        >
          {items.map(item => (
            <option key={item} value={item}>
              { item}
            </option>
          ))}
        </InputType>
        :
        <InputType
          ref={ref}
          className={inputClass}
          name={name}
          onChange={change}
        />
      }
      <p className="text-red-500">{errors && errors[name]?.message}</p>
    </div>
  );
});

export default Field;
