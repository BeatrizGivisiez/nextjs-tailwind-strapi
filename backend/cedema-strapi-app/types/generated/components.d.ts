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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'ui-components.accordion': UiComponentsAccordion;
    }
  }
}
