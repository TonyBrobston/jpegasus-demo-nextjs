import {ReactElement} from 'react';
import {camelCase} from 'camel-case';

const SelectOption = ({labelText, increaseBy, divideBy, minimum, maximum, defaultValue}): ReactElement => {
  const selectorId = `${camelCase(labelText)}Selector`;
  const numberOfValues = Math.floor((maximum - minimum) / increaseBy);
  const valuesDummyArray = Array(numberOfValues).fill(0);
  const values = valuesDummyArray.map((iterator, index) => (minimum + increaseBy + (index * increaseBy)) / divideBy).reverse();
  return (
    <label>
      <strong>{labelText}</strong>
      <select id={selectorId} value={defaultValue}>
      {
        values.map((value) => <option value={value}>{value}</option>)
      }
      </select>
    </label>
  );
}

export default SelectOption;
