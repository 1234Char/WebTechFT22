export interface Objects {
  id:             null;
  scope:          null;
  query:          null;
  appliedFilters: null;
  sort:           null;
  configuration:  null;
  type:           ValueType;
  _links:         ObjectsLinks;
  _embedded:      ObjectsEmbedded;
}

export interface ObjectsEmbedded {
  searchResult: SearchResult;
  facets:       Facet[];
}

export interface Facet {
  name:       string;
  facetType:  string;
  facetLimit: number;
  minValue?:  string;
  maxValue?:  string;
  page?:      FacetPage;
  _links:     FacetLinks;
  _embedded:  FacetEmbedded;
}

export interface FacetEmbedded {
  values: Value[];
}

export interface Value {
  label:        string;
  count:        number;
  authorityKey: null;
  type:         ValueType;
  _links:       ValueLinks;
}

export interface ValueLinks {
  search: Self;
}

export interface Self {
  href: string;
}

export enum ValueType {
  Discover = "discover",
}

export interface FacetLinks {
  next?: Self;
  self:  Self;
}

export interface FacetPage {
  number: number;
  size:   number;
}

export interface SearchResult {
  _embedded: SearchResultEmbedded;
  page:      SearchResultPage;
  _links:    SearchResultLinks;
}

export interface SearchResultEmbedded {
  objects: DBObject[];
}

export interface DBObject {
  hitHighlights: null;
  type:          ValueType;
  _links:        DBObjectLinks;
  _embedded:     DBObjectEmbedded;
}

export interface DBObjectEmbedded {
  indexableObject: IndexableObject;
}

export interface IndexableObject {
  id:            string;
  uuid:          string;
  name:          string;
  handle:        string;
  metadata:      { [key: string]: Metadatum[] };
  inArchive?:    boolean;
  discoverable?: boolean;
  withdrawn?:    boolean;
  lastModified?: Date;
  entityType?:   null;
  type:          IndexableObjectType;
  _links:        IndexableObjectLinks;
}

export interface IndexableObjectLinks {
  bundles?:            Self;
  mappedCollections?:  Self;
  owningCollection?:   Self;
  relationships?:      Self;
  version?:            Self;
  templateItemOf?:     Self;
  thumbnail?:          Self;
  self:                Self;
  harvester?:          Self;
  itemtemplate?:       Self;
  license?:            Self;
  logo?:               Self;
  mappedItems?:        Self;
  parentCommunity?:    Self;
  adminGroup?:         Self;
  submittersGroup?:    Self;
  itemReadGroup?:      Self;
  bitstreamReadGroup?: Self;
  workflowGroups?:     WorkflowGroup[];
  collections?:        Self;
  subcommunities?:     Self;
}

export interface WorkflowGroup {
  href: string;
  name: string;
}

export interface Metadatum {
  value:      string;
  language:   Language;
  authority:  null;
  confidence: number;
  place:      number;
}

export enum Language {
  Empty = "",
  En = "en",
}

export enum IndexableObjectType {
  Collection = "collection",
  Community = "community",
  Item = "item",
}

export interface DBObjectLinks {
  indexableObject: Self;
}

export interface SearchResultLinks {
  next: Self;
  last: Self;
  self: Self;
}

export interface SearchResultPage {
  number:        number;
  size:          number;
  totalPages:    number;
  totalElements: number;
}

export interface ObjectsLinks {
  self: Self;
}
