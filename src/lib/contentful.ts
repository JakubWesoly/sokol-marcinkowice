import contentful, { type EntryFieldTypes, type EntrySkeletonType } from "contentful";

export interface ArticleInterface {
    contentTypeId: "artykul",
    fields: {
        tytul: EntryFieldTypes.Text,
        tekst: EntryFieldTypes.RichText,
        grupa: EntryFieldTypes.Text
    }
  };

export interface TrainerInterface {
  contentTypeId: "trener",
  fields: {
    name: EntryFieldTypes.Text,
    description: EntryFieldTypes.Text,
    phone: EntryFieldTypes.Text
    certificates: EntryFieldTypes.Text,
    picture: EntryFieldTypes.AssetLink,
    licenses: EntryFieldTypes.Text,
    conferenses: EntryFieldTypes.Text
  }
}

export interface PicturesInterface extends EntrySkeletonType{
  pictures: string;
}

export interface TrainingGroupInterface {
  contentTypeId: "TrainingGroup",
  fields: {
    name: EntryFieldTypes.Text,
    groupPhoto: EntryFieldTypes.AssetLink,
    league: EntryFieldTypes.Text,
    years: EntryFieldTypes.Text,
    trainerName: EntryFieldTypes.Text,
    trainerNumber: EntryFieldTypes.Text,
    trainerPhoto: EntryFieldTypes.AssetLink,
    trainings: EntryFieldTypes.AssetLink
  }
}

export interface GalleryInterface {
  contentTypeId: "galleries",
  fields: {
    name: EntryFieldTypes.Text,
    main_picture: EntryFieldTypes.AssetLink;
    pictures: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<PicturesInterface>>
  }
}

export interface SponsorInterface {
  contentTypeId: "sponsor",
  fields: {
    name:EntryFieldTypes.Text,
    picture:EntryFieldTypes.AssetLink,
    sponsors_site:EntryFieldTypes.Text
  }
}

export interface ProductInterface {
  contentTypeId: "products",
  fields:{
    name: EntryFieldTypes.Text,
    type: EntryFieldTypes.Text,
    sizes: EntryFieldTypes.Text,
    price: EntryFieldTypes.Text,
    description: EntryFieldTypes.RichText,
    pictures: EntryFieldTypes.AssetLink
  }
}

export interface CampInterface {
  contentTypeId: "camp",
  fields: {
    tytul: EntryFieldTypes.Text,
    lokalizacja: EntryFieldTypes.Text,
    opis: EntryFieldTypes.RichText,
    dataWyjazdu: EntryFieldTypes.Date,
    dataPowrotu: EntryFieldTypes.Date,
    linkStronyOsrodka: EntryFieldTypes.Text,
    zalaczniki: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>,
    zdjecieWTle: EntryFieldTypes.AssetLink,
  }
}

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: "cdn.contentful.com",
});