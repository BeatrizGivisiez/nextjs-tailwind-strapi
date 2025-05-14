import type { Schema, Struct } from '@strapi/strapi';

export interface UiComponentsAccordion extends Struct.ComponentSchema {
  collectionName: 'components_ui_components_accordions';
  info: {
    displayName: 'Accordion';
    icon: 'bulletList';
  };
  attributes: {
    Content: Schema.Attribute.RichText & Schema.Attribute.Required;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiComponentsTextFile extends Struct.ComponentSchema {
  collectionName: 'components_ui_components_text_files';
  info: {
    displayName: 'Text File';
    icon: 'attachment';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    file: Schema.Attribute.Media<'files'>;
  };
}

export interface UiComponentsTextImage extends Struct.ComponentSchema {
  collectionName: 'components_ui_components_text_images';
  info: {
    displayName: 'Text Image';
    icon: 'picture';
  };
  attributes: {
    content: Schema.Attribute.Text;
    media: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'ui-components.accordion': UiComponentsAccordion;
      'ui-components.text-file': UiComponentsTextFile;
      'ui-components.text-image': UiComponentsTextImage;
    }
  }
}
