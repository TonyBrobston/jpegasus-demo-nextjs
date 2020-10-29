import {ReactElement} from 'react';
import {camelCase} from 'camel-case';

const SelectOptionBoolean = ({labelText, defaultValue}): ReactElement => {
  const selectorId = `${camelCase(labelText)}Selector`;
  return (
    <label>
      <strong>{labelText}</strong>
      <select id={selectorId} value={defaultValue}>
        <option value="true">true</option>
        <option value="false">false</option>
      </select>
    </label>
  );
}

export default SelectOptionBoolean;
