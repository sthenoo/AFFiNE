import type {
  EmbedHtmlJsModel,
  EmbedHtmlJsStyles,
} from '@blocksuite/affine-model';
import { BlockSelection } from '@blocksuite/std';
import { html } from 'lit';
import { query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { type StyleInfo, styleMap } from 'lit/directives/style-map.js';

import { EmbedBlockComponent } from '../common/embed-block-element.js';
import { HtmlJsIcon, styles } from './styles.js';

export class EmbedHtmlJsBlockComponent extends EmbedBlockComponent<EmbedHtmlJsModel> {
  static override styles = styles;

  override _cardStyle: (typeof EmbedHtmlJsStyles)[number] = 'htmljs';

  protected embedHtmlJsStyle: StyleInfo = {};

  refreshData = () => {};

  open = () => {
    this.iframeWrapper?.requestFullscreen().catch(console.error);
  };

  close = () => {
    document.exitFullscreen().catch(console.error);
  };

  private _buildSrcdoc(): string {
    const htmlContent = this.model.props.html ?? '';
    const jsContent = this.model.props.js ?? '';

    return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  body { margin: 0; font-family: sans-serif; }
</style>
</head>
<body>
${htmlContent}
${jsContent ? `<script>${jsContent}</script>` : ''}
</body>
</html>`;
  }

  private _selectBlock() {
    const selectionManager = this.host.selection;
    const blockSelection = selectionManager.create(BlockSelection, {
      blockId: this.blockId,
    });
    selectionManager.setGroup('note', [blockSelection]);
  }

  protected _handleClick(event: MouseEvent) {
    event.stopPropagation();
    this._selectBlock();
  }

  private _handleDoubleClick(event: MouseEvent) {
    event.stopPropagation();
    this.open();
  }

  override connectedCallback() {
    super.connectedCallback();
    this._cardStyle = this.model.props.style;
  }

  override renderBlock(): unknown {
    const titleText = 'HTML/JS Snippet';
    const srcdoc = this._buildSrcdoc();
    const hasContent =
      Boolean(this.model.props.html) || Boolean(this.model.props.js);

    return this.renderEmbed(() => {
      if (!hasContent) {
        return html`<div class="affine-htmljs-empty">
          Empty HTML/JS Block
        </div>`;
      }
      return html`
        <div
          class=${classMap({
            'affine-embed-htmljs-block': true,
            selected: this.selected$.value,
          })}
          style=${styleMap(this.embedHtmlJsStyle)}
          @click=${this._handleClick}
          @dblclick=${this._handleDoubleClick}
        >
          <div class="affine-embed-htmljs-content">
            <div class="affine-embed-htmljs-iframe-container">
              <div class="embed-htmljs-block-iframe-wrapper" allowfullscreen>
                <iframe
                  class="embed-htmljs-block-iframe"
                  sandbox="allow-scripts allow-same-origin"
                  scrolling="no"
                  .srcdoc=${srcdoc}
                  loading="lazy"
                ></iframe>
              </div>
              <div
                class=${classMap({
                  'affine-embed-htmljs-iframe-overlay': true,
                  hide: !this.showOverlay$.value,
                })}
              ></div>
            </div>
          </div>

          <div class="affine-embed-htmljs-title">
            <div class="affine-embed-htmljs-title-icon">${HtmlJsIcon}</div>
            <div class="affine-embed-htmljs-title-text">${titleText}</div>
          </div>
        </div>
      `;
    });
  }

  @query('.embed-htmljs-block-iframe-wrapper')
  accessor iframeWrapper!: HTMLDivElement;
}
