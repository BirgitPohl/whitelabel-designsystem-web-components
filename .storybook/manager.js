import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming'; // Storybooks theming
import yourTheme from './yourTheme'; // TODO my personal theming || TODO map colors to it.
// TODO how to switch theming?
// TODO How to enter theming?
addons.setConfig({
  theme: themes.dark,
  enableShortcuts: false
});