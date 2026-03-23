import {
  CUSTOM_TOOLBAR_WIDGET,
  CustomToolbarWidget,
} from './widget.js';

export function effects() {
  customElements.define(CUSTOM_TOOLBAR_WIDGET, CustomToolbarWidget);
}
