import { UiTheme } from '@models/ui-preferences';
import { DEFAULT_THEME } from '@directives/ui-theme/themes/default-theme';

export const DARK_THEME: UiTheme = {
  ...DEFAULT_THEME,
  // Colors
  header_bg_color: '#424242',
  language_dropdown_bg_color: '#424242',
  remove_language_icon_color: '#BDBDBD',
  dropdown_text_color: '#fff',
  primary_stroke_color: 'rgba(158, 158, 158, .5)',
  dropdown_toggle_inset_shadow_color: 'rgba(238, 238, 238, .05)',
};
