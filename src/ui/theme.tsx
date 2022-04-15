import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    foreground: string;
  }
}

export const lightTheme: DefaultTheme = {
	background: "white",
	foreground: "black",
};
