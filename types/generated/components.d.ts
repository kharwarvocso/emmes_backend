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
    description: Schema.Attribute.Text;
    featured_card: Schema.Attribute.Component<'components.card', false>;
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
    button: Schema.Attribute.Component<'components.button', true>;
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
    metrix: Schema.Attribute.Component<'components.matrix', true>;
    subtitle: Schema.Attribute.String;
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

export interface SectionsCallToAction extends Struct.ComponentSchema {
  collectionName: 'components_sections_call_to_actions';
  info: {
    displayName: 'call_to_action';
  };
  attributes: {
    button_link: Schema.Attribute.String;
    button_name: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    headline: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    ishidden: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface SectionsCompanyAbout extends Struct.ComponentSchema {
  collectionName: 'components_sections_company_abouts';
  info: {
    displayName: 'company_about';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    ishidden: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    subtitle: Schema.Attribute.String;
  };
}

export interface SectionsCompanyStats extends Struct.ComponentSchema {
  collectionName: 'components_sections_company_stats';
  info: {
    displayName: 'company_stats';
  };
  attributes: {
    button_link: Schema.Attribute.String;
    button_name: Schema.Attribute.String;
    ishidden: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    matrix: Schema.Attribute.Component<'sections.counter-stats', true>;
    preheading: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsCounterStats extends Struct.ComponentSchema {
  collectionName: 'components_sections_counter_stats';
  info: {
    displayName: 'counter_stats';
  };
  attributes: {
    description: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    suffix: Schema.Attribute.String;
    value: Schema.Attribute.Integer;
  };
}

export interface SectionsHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_hero_sections';
  info: {
    displayName: 'hero_section';
  };
  attributes: {
    ishidden: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsOffering extends Struct.ComponentSchema {
  collectionName: 'components_sections_offerings';
  info: {
    displayName: 'offering';
  };
  attributes: {
    ishidden: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsResearchCases extends Struct.ComponentSchema {
  collectionName: 'components_sections_research_cases';
  info: {
    displayName: 'research_cases';
  };
  attributes: {
    ishidden: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    preheading: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsResourceCenter extends Struct.ComponentSchema {
  collectionName: 'components_sections_resource_centers';
  info: {
    displayName: 'resource_center';
  };
  attributes: {
    blog: Schema.Attribute.Relation<'oneToOne', 'api::blog.blog'>;
    button_link: Schema.Attribute.String;
    button_name: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    isPriority: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    preTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsResources extends Struct.ComponentSchema {
  collectionName: 'components_sections_resources';
  info: {
    displayName: 'resources';
  };
  attributes: {
    ishidden: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    resource: Schema.Attribute.Component<'sections.resource-center', true>;
  };
}

export interface SectionsTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_sections_testimonials';
  info: {
    displayName: 'testimonial';
  };
  attributes: {
    is_hidden: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    preheading: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.button': ComponentsButton;
      'components.card': ComponentsCard;
      'components.matrix': ComponentsMatrix;
      'components.seo': ComponentsSeo;
      'section.blog-card-section': SectionBlogCardSection;
      'section.case-study': SectionCaseStudy;
      'section.hero-section': SectionHeroSection;
      'section.memeber-section': SectionMemeberSection;
      'section.metrix': SectionMetrix;
      'section.services-section': SectionServicesSection;
      'section.text-media-section': SectionTextMediaSection;
      'sections.call-to-action': SectionsCallToAction;
      'sections.company-about': SectionsCompanyAbout;
      'sections.company-stats': SectionsCompanyStats;
      'sections.counter-stats': SectionsCounterStats;
      'sections.hero-section': SectionsHeroSection;
      'sections.offering': SectionsOffering;
      'sections.research-cases': SectionsResearchCases;
      'sections.resource-center': SectionsResourceCenter;
      'sections.resources': SectionsResources;
      'sections.testimonial': SectionsTestimonial;
    }
  }
}
