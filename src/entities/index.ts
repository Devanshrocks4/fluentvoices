/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: csrinitiatives
 * Interface for CSRInitiatives
 */
export interface CSRInitiatives {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  initiativeTitle?: string;
  /** @wixFieldType text */
  descriptionOfImpact?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  initiativeImage?: string;
  /** @wixFieldType date */
  initiativeDate?: Date | string;
  /** @wixFieldType url */
  callToActionURL?: string;
}


/**
 * Collection ID: events
 * Interface for Events
 */
export interface Events {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  eventTitle?: string;
  /** @wixFieldType datetime */
  eventDateTime?: Date | string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  eventPhoto?: string;
  /** @wixFieldType boolean */
  isUpcoming?: boolean;
  /** @wixFieldType text */
  location?: string;
  /** @wixFieldType url */
  registrationLink?: string;
}


/**
 * Collection ID: leadershipteam
 * Interface for LeadershipTeam
 */
export interface LeadershipTeam {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  fullName?: string;
  /** @wixFieldType text */
  role?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  photo?: string;
  /** @wixFieldType text */
  bio?: string;
  /** @wixFieldType url */
  linkedinProfile?: string;
}


/**
 * Collection ID: missionvalues
 * Interface for MissionValues
 */
export interface MissionValues {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  title?: string;
  /** @wixFieldType text */
  tagline?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  pillarImage?: string;
  /** @wixFieldType number */
  displayOrder?: number;
}


/**
 * Collection ID: ngopartners
 * Interface for NGOPartners
 */
export interface NGOPartners {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  partnerName?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  logoImage?: string;
  /** @wixFieldType url */
  websiteUrl?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType date */
  partnershipStartDate?: Date | string;
}


/**
 * Collection ID: podcasts
 * Interface for Podcasts
 */
export interface Podcasts {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  episodeTitle?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType url */
  youTubeEmbedUrl?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  thumbnailImage?: string;
  /** @wixFieldType date */
  publicationDate?: Date | string;
}


/**
 * Collection ID: sociallinks
 * Interface for SocialLinks
 */
export interface SocialLinks {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  platformName?: string;
  /** @wixFieldType url */
  platformUrl?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  iconImage?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType boolean */
  isActive?: boolean;
}
