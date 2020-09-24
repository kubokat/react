import React from 'react';
import FieldsLayout from './FieldsLayout';

const Field = React.forwardRef((props, ref) => {
  const { label, name, errors, change, InputType } = props;
  const inputClass = 'appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline';

  return (
    <FieldsLayout errors={errors} label={label} name={name}>
        <InputType
          ref={ref}
          className={inputClass}
          name={name}
          onChange={change}
        />
    </FieldsLayout>
  );
});

export default Field;
