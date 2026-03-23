import { BlockModel } from '@blocksuite/store';

import type { EmbedCardStyle } from '../../../utils/index.js';
import { defineEmbedModel } from '../../../utils/index.js';

export const EmbedHtmlJsStyles = ['htmljs'] as const satisfies EmbedCardStyle[];

export type EmbedHtmlJsBlockProps = {
  style: (typeof EmbedHtmlJsStyles)[number];
  caption: string | null;
  html?: string;
  js?: string;
};

export class EmbedHtmlJsModel extends defineEmbedModel<EmbedHtmlJsBlockProps>(
  BlockModel
) {}
