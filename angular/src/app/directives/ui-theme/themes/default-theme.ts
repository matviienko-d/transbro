import { UiTheme } from '@models/ui-preferences';

export const DEFAULT_THEME: UiTheme = {
  // Fonts
  font_size_12: '.75rem',
  font_size_15: '.9375rem',
  font_size_18: '1.125rem',
  font_size_20: '1.25rem',
  font_size_25: '1.5625rem',
  font_family_bitter_regular: '"Bitter-Regular", Helvetica, Arial, serif',
  font_family_bitter_bold: '"Bitter-Bold", Helvetica, Arial, serif',
  font_family_raleway_regular: '"Raleway-Regular", Helvetica, Arial, sans-serif',
  font_family_raleway_bold: '"Raleway-Bold", Helvetica, Arial, sans-serif',
  // Colors
  logo_text_color: '#9E9E9E',
  h3_text_color: '#9E9E9E',
  dropdown_text_color: '#000',
  header_bg_color: '#FAFAFA',
  language_dropdown_bg_color: '#FAFAFA',
  language_active_item_bg_color: 'linear-gradient(to right, #c6ffdd, #fbd786, #f7797d);',
  language_picker_active_bg_color: 'rgba(199, 199, 199, .35)',
  primary_stroke_color: 'rgba(158, 158, 158, .25)',
  remove_language_icon_color: '#BDBDBD',
  // TODO: Doesn't work, need to be fixed
  // remove_language_icon_active_color: 'rgb(255, 255, 255,)',
  dropdown_language_picker_shadow_color: 'rgba(100, 100, 111, 0.2)',
  dropdown_toggle_inset_shadow_color: 'rgba(0, 0, 0, .05)'
};
