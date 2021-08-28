import { theme } from "./constants";
import { createContext } from 'react';

export const ThemeContext = createContext<typeof theme>({
  ...theme
});

export default {
  ...theme,
};
