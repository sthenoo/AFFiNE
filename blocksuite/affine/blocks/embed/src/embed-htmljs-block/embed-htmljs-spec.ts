import { EmbedHtmlJsBlockSchema } from '@blocksuite/affine-model';
import { BlockViewExtension } from '@blocksuite/std';
import type { ExtensionType } from '@blocksuite/store';
import { literal } from 'lit/static-html.js';

import { EmbedEdgelessHtmlJsBlockInteraction } from './embed-edgeless-htmljs-block.js';

const flavour = EmbedHtmlJsBlockSchema.model.flavour;

export const EmbedHtmlJsViewExtensions: ExtensionType[] = [
  BlockViewExtension(flavour, model => {
    return model.parent?.flavour === 'affine:surface'
      ? literal`affine-embed-edgeless-htmljs-block`
      : literal`affine-embed-htmljs-block`;
  }),
  EmbedEdgelessHtmlJsBlockInteraction,
];
