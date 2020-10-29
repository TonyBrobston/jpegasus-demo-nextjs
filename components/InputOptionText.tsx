import {ReactElement} from 'react';
import {camelCase} from 'camel-case';

const InputOptionText = ({labelText, defaultValue}): ReactElement => {
  const selectorId = `${camelCase(labelText)}Input`;
  return (
    <label>
      <strong>{labelText}</strong>
      <input type="text" id={selectorId} value={defaultValue} />
    </label>
  );
}

export default InputOptionText;
