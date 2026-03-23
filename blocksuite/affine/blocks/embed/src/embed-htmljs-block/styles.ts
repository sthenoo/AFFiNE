import { unsafeCSSVarV2 } from '@blocksuite/affine-shared/theme';
import { css, html } from 'lit';

export const EMBED_HTMLJS_MIN_WIDTH = 370;
export const EMBED_HTMLJS_MIN_HEIGHT = 120;

export const styles = css`
  .affine-embed-htmljs-block {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    padding: 12px;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;

    border-radius: 12px;
    border: 1px solid ${unsafeCSSVarV2('layer/background/tertiary')};
    background: ${unsafeCSSVarV2('layer/background/primary')};
    user-select: none;
  }

  .affine-embed-htmljs-block.selected {
    border-color: var(--affine-primary-color);
  }

  .affine-embed-htmljs-content {
    flex-grow: 1;
    width: 100%;
  }

  .affine-embed-htmljs-iframe-container {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    overflow: hidden;
  }

  .embed-htmljs-block-iframe-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .embed-htmljs-block-iframe-wrapper > iframe {
    width: 100%;
    height: 100%;
    border: none;
  }

  .affine-embed-htmljs-iframe-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .affine-embed-htmljs-iframe-overlay.hide {
    display: none;
  }

  .affine-embed-htmljs-title {
    height: fit-content;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .affine-embed-htmljs-title-icon {
    display: flex;
    width: 20px;
    height: 20px;
    justify-content: center;
    align-items: center;
  }

  .affine-embed-htmljs-title-text {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    word-break: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    color: var(--affine-text-primary-color);
    font-family: var(--affine-font-family);
    font-size: var(--affine-font-sm);
    font-style: normal;
    font-weight: 600;
    line-height: 22px;
  }

  .affine-htmljs-empty {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: var(--affine-text-secondary-color);
    font-size: var(--affine-font-sm);
  }
`;

export const HtmlJsIcon = html`<svg
  width="20"
  height="20"
  viewBox="0 0 20 20"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M7 7L3 10L7 13M13 7L17 10L13 13M11 5L9 15"
    stroke="#77757D"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>`;
