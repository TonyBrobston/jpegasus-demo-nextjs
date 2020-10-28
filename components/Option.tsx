import {ReactElement} from 'react';
import {camelCase} from 'camel-case';

const Option = ({labelText, value}): ReactElement => {
  const selectorId = `${camelCase(labelText)}Selector`;
  return (
    <label>
      <strong>{labelText}</strong>
      <select id={selectorId} value={value}>
        <option value="10000">10000</option>
        <option value="9900">9900</option>
        <option value="9800">9800</option>
        <option value="9700">9700</option>
        <option value="9600">9600</option>
        <option value="9500">9500</option>
        <option value="9400">9400</option>
        <option value="9300">9300</option>
        <option value="9200">9200</option>
        <option value="9100">9100</option>
        <option value="9000">9000</option>
        <option value="8900">8900</option>
        <option value="8800">8800</option>
        <option value="8700">8700</option>
        <option value="8600">8600</option>
        <option value="8500">8500</option>
        <option value="8400">8400</option>
        <option value="8300">8300</option>
        <option value="8200">8200</option>
        <option value="8100">8100</option>
        <option value="8000">8000</option>
        <option value="7900">7900</option>
        <option value="7800">7800</option>
        <option value="7700">7700</option>
        <option value="7600">7600</option>
        <option value="7500">7500</option>
        <option value="7400">7400</option>
        <option value="7300">7300</option>
        <option value="7200">7200</option>
        <option value="7100">7100</option>
        <option value="7000">7000</option>
        <option value="6900">6900</option>
        <option value="6800">6800</option>
        <option value="6700">6700</option>
        <option value="6600">6600</option>
        <option value="6500">6500</option>
        <option value="6400">6400</option>
        <option value="6300">6300</option>
        <option value="6200">6200</option>
        <option value="6100">6100</option>
        <option value="6000">6000</option>
        <option value="5900">5900</option>
        <option value="5800">5800</option>
        <option value="5700">5700</option>
        <option value="5600">5600</option>
        <option value="5500">5500</option>
        <option value="5400">5400</option>
        <option value="5300">5300</option>
        <option value="5200">5200</option>
        <option value="5100">5100</option>
        <option value="5000">5000</option>
        <option value="4900">4900</option>
        <option value="4800">4800</option>
        <option value="4700">4700</option>
        <option value="4600">4600</option>
        <option value="4500">4500</option>
        <option value="4400">4400</option>
        <option value="4300">4300</option>
        <option value="4200">4200</option>
        <option value="4100">4100</option>
        <option value="4000">4000</option>
        <option value="3900">3900</option>
        <option value="3800">3800</option>
        <option value="3700">3700</option>
        <option value="3600">3600</option>
        <option value="3500">3500</option>
        <option value="3400">3400</option>
        <option value="3300">3300</option>
        <option value="3200">3200</option>
        <option value="3100">3100</option>
        <option value="3000">3000</option>
        <option value="2900">2900</option>
        <option value="2800">2800</option>
        <option value="2700">2700</option>
        <option value="2600">2600</option>
        <option value="2500">2500</option>
        <option value="2400">2400</option>
        <option value="2300">2300</option>
        <option value="2200">2200</option>
        <option value="2100">2100</option>
        <option value="2000">2000</option>
        <option value="1900">1900</option>
        <option value="1800">1800</option>
        <option value="1700">1700</option>
        <option value="1600">1600</option>
        <option value="1500">1500</option>
        <option value="1400">1400</option>
        <option value="1300">1300</option>
        <option value="1200">1200</option>
        <option value="1100">1100</option>
        <option value="1000">1000</option>
        <option value="900">900</option>
        <option value="800">800</option>
        <option value="700">700</option>
        <option value="600">600</option>
        <option value="500">500</option>
        <option value="400">400</option>
        <option value="300">300</option>
        <option value="200">200</option>
        <option value="100">100</option>
      </select>
    </label>
  );
}

export default Option;
