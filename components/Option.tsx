import {ReactElement} from 'react';
import {camelCase} from 'camel-case';

const options = (decreaseBy, divideBy, minimum, maximum, defaultValue) => {
  const length = Math.floor((maximum - minimum) / decreaseBy)
  const numbers = Array(length).fill(undefined).map((iterator, index) => minimum + (index * decreaseBy) + decreaseBy)
  return numbers.map((number) => <option value={number}>{number}</option>);
}

const Option = ({labelText, decreaseBy, divideBy, minimum, maximum, defaultValue}): ReactElement => {
  const selectorId = `${camelCase(labelText)}Selector`;
  return (
    <label>
      <strong>{labelText}</strong>
      <select id={selectorId} value={defaultValue}>
      {options(decreaseBy, divideBy, minimum, maximum, defaultValue)}
      </select>
    </label>
  );
}

export default Option;
