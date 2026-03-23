import { css } from 'lit';

export const styles = css`
  :host {
    position: absolute;
    top: 12px;
    right: 12px;
    z-index: 3;
    pointer-events: auto;
  }

  .custom-toolbar-container {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 4px 8px;
    border-radius: 8px;
    background: var(--affine-background-overlay-panel-color, #fff);
    box-shadow: var(--affine-shadow-2);
    border: 1px solid var(--affine-border-color);
    font-family: var(--affine-font-family);
    font-size: 12px;
    user-select: none;
  }

  .custom-toolbar-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 8px;
    border: none;
    border-radius: 4px;
    background: transparent;
    cursor: pointer;
    color: var(--affine-text-primary-color);
    font-size: 12px;
    line-height: 1;
    transition: background 0.2s;
  }

  .custom-toolbar-btn:hover {
    background: var(--affine-hover-color);
  }

  .custom-toolbar-btn.active {
    background: var(--affine-primary-color);
    color: #fff;
  }

  .custom-toolbar-separator {
    width: 1px;
    height: 16px;
    background: var(--affine-border-color);
  }

  .custom-toolbar-label {
    font-weight: 500;
    color: var(--affine-text-secondary-color);
    padding: 0 4px;
  }
`;
