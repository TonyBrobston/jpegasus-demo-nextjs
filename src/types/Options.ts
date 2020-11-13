export interface IOption {
  readonly labelText: string,
  readonly onChange: ({target: {value}}: {target: {value: string}}) => void
}

export interface IGenericOption extends IOption {
  readonly value: string,
}

export interface ISelectOptionNumber extends IOption {
  readonly increaseBy: number,
  readonly divideBy: number,
  readonly minimum: number,
  readonly maximum: number,
  readonly value: number,
}

