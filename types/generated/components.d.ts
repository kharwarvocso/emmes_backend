import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsButton extends Struct.ComponentSchema {
  collectionName: 'components_components_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    icon_position: Schema.Attribute.Enumeration<['left', 'right']>;
    link: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface ComponentsCard extends Struct.ComponentSchema {
  collectionName: 'components_components_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    blog: Schema.Attribute.Relation<'oneToOne', 'api::blog.blog'>;
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    is_hidden: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    our_brand: Schema.Attribute.Relation<
      'oneToOne',
      'api::our-brand.our-brand'
    >;
    priority: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsFeatureCard extends Struct.ComponentSchema {
  collectionName: 'components_components_feature_cards';
  info: {
    displayName: 'feature card';
  };
  attributes: {
    bg_media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    button: Schema.Attribute.Component<'components.button', false>;
    description: Schema.Attribute.Blocks;
    ishidden: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    sub_tittle: Schema.Attribute.String;
    title: Schema.Attribute.Text;
  };
}

export interface ComponentsFooter extends Struct.ComponentSchema {
  collectionName: 'components_components_footers';
  info: {
    displayName: 'footer';
  };
  attributes: {
    cta_button: Schema.Attribute.Component<'components.button', false>;
    cta_description: Schema.Attribute.Text;
    cta_title: Schema.Attribute.String;
    footer_description: Schema.Attribute.Text;
    footer_newsletter_cta: Schema.Attribute.Component<
      'components.button',
      false
    >;
    footer_title: Schema.Attribute.String;
    is_ctahidden: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface ComponentsMatrix extends Struct.ComponentSchema {
  collectionName: 'components_components_matrices';
  info: {
    displayName: 'matrix';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    suffix: Schema.Attribute.String;
    value: Schema.Attribute.Integer;
  };
}

export interface ComponentsSeo extends Struct.ComponentSchema {
  collectionName: 'components_components_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text;
    metaKeywords: Schema.Attribute.Text;
    metaRobots: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String;
    ogDescription: Schema.Attribute.Text;
    ogImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    ogTitle: Schema.Attribute.String;
    structuredData: Schema.Attribute.JSON;
    twitterDescription: Schema.Attribute.Text;
    twitterImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    twitterTitle: Schema.Attribute.String;
  };
}

export interface ComponentsSocialMedia extends Struct.ComponentSchema {
  collectionName: 'components_components_social_medias';
  info: {
    displayName: 'social media';
    icon: 'earth';
  };
  attributes: {
    link: Schema.Attribute.String;
    name: Schema.Attribute.String;
    svg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SectionBlogCardSection extends Struct.ComponentSchema {
  collectionName: 'components_section_blog_card_sections';
  info: {
    displayName: 'blog_card_section';
  };
  attributes: {
    bg_media: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    blogs: Schema.Attribute.Relation<'oneToMany', 'api::blog.blog'>;
    common_btn_icon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    common_btn_name: Schema.Attribute.String;
    common_btn_position: Schema.Attribute.Enumeration<['left', 'right']>;
    description: Schema.Attribute.Text;
    featured_card: Schema.Attribute.Component<'components.feature-card', false>;
    is_hidden: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    is_latest_blog_required: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String;
  };
}

export interface SectionCaseStudy extends Struct.ComponentSchema {
  collectionName: 'components_section_case_studies';
  info: {
    displayName: 'case_study';
  };
  attributes: {
    button: Schema.Attribute.Component<'components.button', false>;
    case_studies: Schema.Attribute.Relation<
      'oneToMany',
      'api::case-study.case-study'
    >;
    description: Schema.Attribute.RichText;
    ishidden: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_section_hero_sections';
  info: {
    displayName: 'hero_section';
  };
  attributes: {
    background_media: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    button: Schema.Attribute.Component<'components.button', false>;
    cards: Schema.Attribute.Component<'components.card', true>;
    description: Schema.Attribute.Text;
    metrix_position: Schema.Attribute.Enumeration<['left', 'right', 'bottom']> &
      Schema.Attribute.DefaultTo<'right'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionMemeberSection extends Struct.ComponentSchema {
  collectionName: 'components_section_memeber_sections';
  info: {
    displayName: 'memeber_section';
  };
  attributes: {
    button: Schema.Attribute.Component<'components.button', false>;
    description: Schema.Attribute.Text;
    ishidden: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    subtitle: Schema.Attribute.String;
  };
}

export interface SectionMetrix extends Struct.ComponentSchema {
  collectionName: 'components_section_metrixes';
  info: {
    displayName: 'metrix_section';
  };
  attributes: {
    button: Schema.Attribute.Component<'components.button', false>;
    description: Schema.Attribute.Text;
    ishidden: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    metrix: Schema.Attribute.Component<'components.matrix', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionServicesSection extends Struct.ComponentSchema {
  collectionName: 'components_section_services_sections';
  info: {
    displayName: 'services_section';
  };
  attributes: {
    button: Schema.Attribute.Component<'components.button', false>;
    description: Schema.Attribute.Text;
    is_hidden: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
  };
}

export interface SectionTextMediaSection extends Struct.ComponentSchema {
  collectionName: 'components_section_text_media_sections';
  info: {
    displayName: 'text_media_section';
  };
  attributes: {
    bg_media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    button: Schema.Attribute.Component<'components.button', false>;
    description: Schema.Attribute.Text;
    is_hidden: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    position: Schema.Attribute.Enumeration<['top', 'right', 'bottom', 'left']>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.button': ComponentsButton;
      'components.card': ComponentsCard;
      'components.feature-card': ComponentsFeatureCard;
      'components.footer': ComponentsFooter;
      'components.matrix': ComponentsMatrix;
      'components.seo': ComponentsSeo;
      'components.social-media': ComponentsSocialMedia;
      'section.blog-card-section': SectionBlogCardSection;
      'section.case-study': SectionCaseStudy;
      'section.hero-section': SectionHeroSection;
      'section.memeber-section': SectionMemeberSection;
      'section.metrix': SectionMetrix;
      'section.services-section': SectionServicesSection;
      'section.text-media-section': SectionTextMediaSection;
    }
  }
}
