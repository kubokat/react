import React from 'react';
import FieldsLayout from './FieldsLayout';

const Select = React.forwardRef((props, ref) => {
  const { label, name, items, errors, change } = props;
  const inputClass = 'appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline';

  return (
    <FieldsLayout errors={errors} label={label} name={name}>
      <select
        ref={ref}
        className={inputClass}
        name={name}
        onChange={change}
      >
        {items.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </FieldsLayout>
  );
});

export default Select;
