import type { RootBlockModel } from '@blocksuite/affine-model';
import { WidgetComponent, WidgetViewExtension } from '@blocksuite/std';
import { html, nothing } from 'lit';
import { state } from 'lit/decorators.js';
import { literal, unsafeStatic } from 'lit/static-html.js';

import { styles } from './styles.js';

export const CUSTOM_TOOLBAR_WIDGET = 'affine-custom-toolbar-widget';

export class CustomToolbarWidget extends WidgetComponent<RootBlockModel> {
  static override styles = styles;

  @state()
  private accessor _showHtmlPanel = false;

  private _toggleHtmlPanel() {
    this._showHtmlPanel = !this._showHtmlPanel;
  }

  private _insertHtmlJsBlock() {
    const store = this.store;
    const surfaceBlock = store.getBlocksByFlavour('affine:surface')[0];
    if (!surfaceBlock) return;
    const surfaceModel = surfaceBlock.model;

    const id = store.addBlock(
      'affine:embed-htmljs' as never,
      {
        html: '<div style="padding:20px;font-family:sans-serif;"><h2>Hello from HTML/JS Block</h2><p id="output"></p><script>document.getElementById("output").textContent = "JS executed at " + new Date().toLocaleTimeString();</script></div>',
        style: 'htmljs',
        caption: null,
        xywh: '[100,100,450,300]',
      },
      surfaceModel.id
    );

    this._showHtmlPanel = false;
    return id;
  }

  override render() {
    return html`
      <div class="custom-toolbar-container">
        <span class="custom-toolbar-label">Custom</span>
        <div class="custom-toolbar-separator"></div>
        <button
          class="custom-toolbar-btn ${this._showHtmlPanel ? 'active' : ''}"
          @click=${this._toggleHtmlPanel}
          title="Insert HTML/JS Block"
        >
          &lt;/&gt;
        </button>
        ${this._showHtmlPanel
          ? html`
              <button
                class="custom-toolbar-btn"
                @click=${this._insertHtmlJsBlock}
              >
                + HTML/JS
              </button>
            `
          : nothing}
      </div>
    `;
  }
}

export const customToolbarWidget = WidgetViewExtension(
  'affine:page',
  CUSTOM_TOOLBAR_WIDGET,
  literal`${unsafeStatic(CUSTOM_TOOLBAR_WIDGET)}`
);

declare global {
  interface HTMLElementTagNameMap {
    [CUSTOM_TOOLBAR_WIDGET]: CustomToolbarWidget;
  }
}
