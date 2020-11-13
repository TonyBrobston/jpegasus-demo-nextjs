import {ReactElement} from 'react';
import {camelCase} from 'camel-case';
import {
  ISelectOptionNumber,
  IGenericOption,
} from '../types/Options';

const values = (labelText, increaseBy, divideBy, minimum, maximum) => {
  const numberOfValues = Math.floor((maximum - minimum) / increaseBy);
  const valuesDummyArray = Array(numberOfValues).fill(0);
  const values = valuesDummyArray.map((iterator, index) => (minimum + increaseBy + (index * increaseBy)) / divideBy).reverse();
  return values;
}

export const SelectOptionNumber = ({labelText, increaseBy, divideBy, minimum, maximum, value, onChange}: ISelectOptionNumber): ReactElement =>
  <label>
    <strong>{labelText}</strong>
    <select
      id={`${camelCase(labelText)}Selector`}
      value={value}
      onChange={onChange}
    >
    {
      values(
        labelText,
        increaseBy,
        divideBy,
        minimum,
        maximum
      ).map(
        (value) => <option value={value}>{value}</option>
      )
    }
    </select>
  </label>;

export const SelectOptionBoolean = ({labelText, value, onChange}: IGenericOption): ReactElement =>
  <label>
    <strong>{labelText}</strong>
    <select
      id={`${camelCase(labelText)}Selector`}
      value={value}
      onChange={onChange}
    >
      <option value="true">true</option>
      <option value="false">false</option>
    </select>
  </label>;

export const InputOptionText = ({labelText, value, onChange}: IGenericOption): ReactElement =>
  <label>
    <strong>{labelText}</strong>
    <input
      type="text"
      id={`${camelCase(labelText)}Input`}
      value={value}
      onChange={onChange}
    />
  </label>;
