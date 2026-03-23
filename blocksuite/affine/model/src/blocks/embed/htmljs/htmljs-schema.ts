import { BlockSchemaExtension } from '@blocksuite/store';

import { createEmbedBlockSchema } from '../../../utils/index.js';
import {
  type EmbedHtmlJsBlockProps,
  EmbedHtmlJsModel,
  EmbedHtmlJsStyles,
} from './htmljs-model.js';

const defaultEmbedHtmlJsProps: EmbedHtmlJsBlockProps = {
  style: EmbedHtmlJsStyles[0],
  caption: null,
  html: undefined,
  js: undefined,
};

export const EmbedHtmlJsBlockSchema = createEmbedBlockSchema({
  name: 'htmljs',
  version: 1,
  toModel: () => new EmbedHtmlJsModel(),
  props: (): EmbedHtmlJsBlockProps => defaultEmbedHtmlJsProps,
});

export const EmbedHtmlJsBlockSchemaExtension =
  BlockSchemaExtension(EmbedHtmlJsBlockSchema);
