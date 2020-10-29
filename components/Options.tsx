import {ReactElement} from 'react';
import {camelCase} from 'camel-case';

const values = (labelText, increaseBy, divideBy, minimum, maximum, defaultValue) => {
  const numberOfValues = Math.floor((maximum - minimum) / increaseBy);
  const valuesDummyArray = Array(numberOfValues).fill(0);
  const values = valuesDummyArray.map((iterator, index) => (minimum + increaseBy + (index * increaseBy)) / divideBy).reverse();
  return values;
}

export const SelectOptionNumber = ({labelText, increaseBy, divideBy, minimum, maximum, defaultValue}): ReactElement =>
  <label>
    <strong>{labelText}</strong>
    <select id={`${camelCase(labelText)}Selector`} value={defaultValue}>
    {
      values(
        labelText,
        increaseBy,
        divideBy,
        minimum,
        maximum,
        defaultValue
      ).map(
        (value) => <option value={value}>{value}</option>
      )
    }
    </select>
  </label>;

export const SelectOptionBoolean = ({labelText, defaultValue}): ReactElement =>
  <label>
    <strong>{labelText}</strong>
    <select id={`${camelCase(labelText)}Selector`} value={defaultValue}>
      <option value="true">true</option>
      <option value="false">false</option>
    </select>
  </label>;

export const InputOptionText = ({labelText, defaultValue}): ReactElement =>
  <label>
    <strong>{labelText}</strong>
    <input type="text" id={`${camelCase(labelText)}Input`} value={defaultValue} />
  </label>;
