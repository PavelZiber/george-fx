import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    foreground: string;
    error: string;
    borderRadius: string;
    font: {
      small: string,
      middle: string,
    }
    space: {
      small: string,
      middle: string
      big: string
    }
  }
}

export const lightTheme: DefaultTheme = {
	background: "white",
	foreground: "black",
  error: "red",
  borderRadius: "4px",
  font: {
    small: '14px',
    middle: '18px',
  },
  space: {
    small: '4px',
    middle: '8px',
    big: '16px'
  }
};
