import {Tcoin} from "../components/types/types";

export const useCalculateDiff = (
  inputValue: number | null,
  leftCurrency?: Tcoin,
  rightCurrency?: Tcoin,
  accuracy = 2,
  fallbackValue: string | number = ""
): string | number => {
  const currencyDiff = leftCurrency && rightCurrency ? leftCurrency?.Value / rightCurrency?.Value : 0;
  return inputValue ? (inputValue * currencyDiff).toFixed(accuracy) : fallbackValue;
}
