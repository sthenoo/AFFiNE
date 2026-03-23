import {
  type ViewExtensionContext,
  ViewExtensionProvider,
} from '@blocksuite/affine-ext-loader';

import { effects } from './effects.js';
import { customToolbarWidget } from './widget.js';

export class CustomToolbarViewExtension extends ViewExtensionProvider {
  override name = 'affine-custom-toolbar-widget';

  override effect() {
    super.effect();
    effects();
  }

  override setup(context: ViewExtensionContext) {
    super.setup(context);
    if (this.isEdgeless(context.scope)) {
      context.register(customToolbarWidget);
    }
  }
}
