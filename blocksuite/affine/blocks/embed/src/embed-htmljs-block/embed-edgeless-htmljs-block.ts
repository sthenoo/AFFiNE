import { EmbedHtmlJsBlockSchema } from '@blocksuite/affine-model';

import { createEmbedEdgelessBlockInteraction } from '../common/embed-block-element.js';
import { toEdgelessEmbedBlock } from '../common/to-edgeless-embed-block.js';
import { EmbedHtmlJsBlockComponent } from './embed-htmljs-block.js';
import {
  EMBED_HTMLJS_MIN_HEIGHT,
  EMBED_HTMLJS_MIN_WIDTH,
} from './styles.js';

export class EmbedEdgelessHtmlJsBlockComponent extends toEdgelessEmbedBlock(
  EmbedHtmlJsBlockComponent
) {}

export const EmbedEdgelessHtmlJsBlockInteraction =
  createEmbedEdgelessBlockInteraction(EmbedHtmlJsBlockSchema.model.flavour, {
    resizeConstraint: {
      minWidth: EMBED_HTMLJS_MIN_WIDTH,
      minHeight: EMBED_HTMLJS_MIN_HEIGHT,
      lockRatio: false,
    },
  });
