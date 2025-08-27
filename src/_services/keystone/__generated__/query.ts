import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: any; output: any };
  JSON: { input: any; output: any };
  Upload: { input: any; output: any };
};

export type AuthenticatedItem = User;

export type BooleanFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilter>;
};

/**
 * Mirrors the formatting options [Cloudinary provides](https://cloudinary.com/documentation/image_transformation_reference).
 * All options are strings as they ultimately end up in a URL.
 */
export type CloudinaryImageFormat = {
  angle?: InputMaybe<Scalars['String']['input']>;
  aspect_ratio?: InputMaybe<Scalars['String']['input']>;
  background?: InputMaybe<Scalars['String']['input']>;
  border?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  color_space?: InputMaybe<Scalars['String']['input']>;
  crop?: InputMaybe<Scalars['String']['input']>;
  default_image?: InputMaybe<Scalars['String']['input']>;
  delay?: InputMaybe<Scalars['String']['input']>;
  density?: InputMaybe<Scalars['String']['input']>;
  dpr?: InputMaybe<Scalars['String']['input']>;
  effect?: InputMaybe<Scalars['String']['input']>;
  fetch_format?: InputMaybe<Scalars['String']['input']>;
  flags?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  gravity?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['String']['input']>;
  opacity?: InputMaybe<Scalars['String']['input']>;
  overlay?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  /**  Rewrites the filename to be this pretty string. Do not include `/` or `.` */
  prettyName?: InputMaybe<Scalars['String']['input']>;
  quality?: InputMaybe<Scalars['String']['input']>;
  radius?: InputMaybe<Scalars['String']['input']>;
  transformation?: InputMaybe<Scalars['String']['input']>;
  underlay?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['String']['input']>;
  x?: InputMaybe<Scalars['String']['input']>;
  y?: InputMaybe<Scalars['String']['input']>;
  zoom?: InputMaybe<Scalars['String']['input']>;
};

export type CloudinaryImage_File = {
  __typename?: 'CloudinaryImage_File';
  encoding?: Maybe<Scalars['String']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  mimetype?: Maybe<Scalars['String']['output']>;
  originalFilename?: Maybe<Scalars['String']['output']>;
  publicUrl?: Maybe<Scalars['String']['output']>;
  publicUrlTransformed?: Maybe<Scalars['String']['output']>;
};

export type CloudinaryImage_FilePublicUrlTransformedArgs = {
  transformation?: InputMaybe<CloudinaryImageFormat>;
};

export type Config = {
  __typename?: 'Config';
  id: Scalars['ID']['output'];
  releaseDate?: Maybe<Scalars['DateTime']['output']>;
};

export type ConfigCreateInput = {
  releaseDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ConfigOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  releaseDate?: InputMaybe<OrderDirection>;
};

export type ConfigUpdateArgs = {
  data: ConfigUpdateInput;
  where?: ConfigWhereUniqueInput;
};

export type ConfigUpdateInput = {
  releaseDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ConfigWhereInput = {
  AND?: InputMaybe<Array<ConfigWhereInput>>;
  NOT?: InputMaybe<Array<ConfigWhereInput>>;
  OR?: InputMaybe<Array<ConfigWhereInput>>;
  id?: InputMaybe<IdFilter>;
  releaseDate?: InputMaybe<DateTimeNullableFilter>;
};

export type ConfigWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type CreateInitialUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type FrequentlyAskedQuestion = {
  __typename?: 'FrequentlyAskedQuestion';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type FrequentlyAskedQuestionCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FrequentlyAskedQuestionOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type FrequentlyAskedQuestionUpdateArgs = {
  data: FrequentlyAskedQuestionUpdateInput;
  where: FrequentlyAskedQuestionWhereUniqueInput;
};

export type FrequentlyAskedQuestionUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FrequentlyAskedQuestionWhereInput = {
  AND?: InputMaybe<Array<FrequentlyAskedQuestionWhereInput>>;
  NOT?: InputMaybe<Array<FrequentlyAskedQuestionWhereInput>>;
  OR?: InputMaybe<Array<FrequentlyAskedQuestionWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type FrequentlyAskedQuestionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type IdFilter = {
  equals?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilter>;
  notIn?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type KeystoneAdminMeta = {
  __typename?: 'KeystoneAdminMeta';
  list?: Maybe<KeystoneAdminUiListMeta>;
  lists: Array<KeystoneAdminUiListMeta>;
};

export type KeystoneAdminMetaListArgs = {
  key: Scalars['String']['input'];
};

export type KeystoneAdminUiFieldGroupMeta = {
  __typename?: 'KeystoneAdminUIFieldGroupMeta';
  description?: Maybe<Scalars['String']['output']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  label: Scalars['String']['output'];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: 'KeystoneAdminUIFieldMeta';
  createView: KeystoneAdminUiFieldMetaCreateView;
  customViewsIndex?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  fieldMeta?: Maybe<Scalars['JSON']['output']>;
  isFilterable: Scalars['Boolean']['output'];
  isNonNull?: Maybe<Array<KeystoneAdminUiFieldMetaIsNonNull>>;
  isOrderable: Scalars['Boolean']['output'];
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
  label: Scalars['String']['output'];
  listView: KeystoneAdminUiFieldMetaListView;
  path: Scalars['String']['output'];
  search?: Maybe<QueryMode>;
  viewsIndex: Scalars['Int']['output'];
};

export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: 'KeystoneAdminUIFieldMetaCreateView';
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden',
}

export enum KeystoneAdminUiFieldMetaIsNonNull {
  Create = 'create',
  Read = 'read',
  Update = 'update',
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: 'KeystoneAdminUIFieldMetaItemView';
  fieldMode?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldMode>;
  fieldPosition?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldPosition>;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden',
  Read = 'read',
}

export enum KeystoneAdminUiFieldMetaItemViewFieldPosition {
  Form = 'form',
  Sidebar = 'sidebar',
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: 'KeystoneAdminUIFieldMetaListView';
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Hidden = 'hidden',
  Read = 'read',
}

export type KeystoneAdminUiGraphQl = {
  __typename?: 'KeystoneAdminUIGraphQL';
  names: KeystoneAdminUiGraphQlNames;
};

export type KeystoneAdminUiGraphQlNames = {
  __typename?: 'KeystoneAdminUIGraphQLNames';
  createInputName: Scalars['String']['output'];
  createManyMutationName: Scalars['String']['output'];
  createMutationName: Scalars['String']['output'];
  deleteManyMutationName: Scalars['String']['output'];
  deleteMutationName: Scalars['String']['output'];
  itemQueryName: Scalars['String']['output'];
  listOrderName: Scalars['String']['output'];
  listQueryCountName: Scalars['String']['output'];
  listQueryName: Scalars['String']['output'];
  outputTypeName: Scalars['String']['output'];
  relateToManyForCreateInputName: Scalars['String']['output'];
  relateToManyForUpdateInputName: Scalars['String']['output'];
  relateToOneForCreateInputName: Scalars['String']['output'];
  relateToOneForUpdateInputName: Scalars['String']['output'];
  updateInputName: Scalars['String']['output'];
  updateManyInputName: Scalars['String']['output'];
  updateManyMutationName: Scalars['String']['output'];
  updateMutationName: Scalars['String']['output'];
  whereInputName: Scalars['String']['output'];
  whereUniqueInputName: Scalars['String']['output'];
};

export type KeystoneAdminUiListMeta = {
  __typename?: 'KeystoneAdminUIListMeta';
  description?: Maybe<Scalars['String']['output']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  graphql: KeystoneAdminUiGraphQl;
  groups: Array<KeystoneAdminUiFieldGroupMeta>;
  hideCreate: Scalars['Boolean']['output'];
  hideDelete: Scalars['Boolean']['output'];
  initialColumns: Array<Scalars['String']['output']>;
  initialSearchFields: Array<Scalars['String']['output']>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars['Boolean']['output'];
  isSingleton: Scalars['Boolean']['output'];
  itemQueryName: Scalars['String']['output'];
  key: Scalars['String']['output'];
  label: Scalars['String']['output'];
  labelField: Scalars['String']['output'];
  listQueryName: Scalars['String']['output'];
  pageSize: Scalars['Int']['output'];
  path: Scalars['String']['output'];
  plural: Scalars['String']['output'];
  singular: Scalars['String']['output'];
};

export type KeystoneAdminUiSort = {
  __typename?: 'KeystoneAdminUISort';
  direction: KeystoneAdminUiSortDirection;
  field: Scalars['String']['output'];
};

export enum KeystoneAdminUiSortDirection {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type KeystoneMeta = {
  __typename?: 'KeystoneMeta';
  adminMeta: KeystoneAdminMeta;
};

export type Log = {
  __typename?: 'Log';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  error?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<LogTypeType>;
};

export type LogCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  error?: InputMaybe<Scalars['JSON']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<LogTypeType>;
};

export type LogOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
};

export enum LogTypeType {
  HandleOnMcpFileCreatedUpdatedFailed = 'HandleOnMcpFileCreatedUpdatedFailed',
}

export type LogTypeTypeNullableFilter = {
  equals?: InputMaybe<LogTypeType>;
  in?: InputMaybe<Array<LogTypeType>>;
  not?: InputMaybe<LogTypeTypeNullableFilter>;
  notIn?: InputMaybe<Array<LogTypeType>>;
};

export type LogUpdateArgs = {
  data: LogUpdateInput;
  where: LogWhereUniqueInput;
};

export type LogUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  error?: InputMaybe<Scalars['JSON']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<LogTypeType>;
};

export type LogWhereInput = {
  AND?: InputMaybe<Array<LogWhereInput>>;
  NOT?: InputMaybe<Array<LogWhereInput>>;
  OR?: InputMaybe<Array<LogWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  title?: InputMaybe<StringFilter>;
  type?: InputMaybe<LogTypeTypeNullableFilter>;
};

export type LogWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  authenticateUserWithPassword?: Maybe<UserAuthenticationWithPasswordResult>;
  createConfig?: Maybe<Config>;
  createConfigs?: Maybe<Array<Maybe<Config>>>;
  createFrequentlyAskedQuestion?: Maybe<FrequentlyAskedQuestion>;
  createFrequentlyAskedQuestions?: Maybe<Array<Maybe<FrequentlyAskedQuestion>>>;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  createLog?: Maybe<Log>;
  createLogs?: Maybe<Array<Maybe<Log>>>;
  createPage?: Maybe<Page>;
  createPages?: Maybe<Array<Maybe<Page>>>;
  createServer?: Maybe<Server>;
  createServerCategories?: Maybe<Array<Maybe<ServerCategory>>>;
  createServerCategory?: Maybe<ServerCategory>;
  createServers?: Maybe<Array<Maybe<Server>>>;
  createUser?: Maybe<User>;
  createUsers?: Maybe<Array<Maybe<User>>>;
  createWaitlist?: Maybe<Waitlist>;
  createWaitlists?: Maybe<Array<Maybe<Waitlist>>>;
  deleteConfig?: Maybe<Config>;
  deleteConfigs?: Maybe<Array<Maybe<Config>>>;
  deleteFrequentlyAskedQuestion?: Maybe<FrequentlyAskedQuestion>;
  deleteFrequentlyAskedQuestions?: Maybe<Array<Maybe<FrequentlyAskedQuestion>>>;
  deleteLog?: Maybe<Log>;
  deleteLogs?: Maybe<Array<Maybe<Log>>>;
  deletePage?: Maybe<Page>;
  deletePages?: Maybe<Array<Maybe<Page>>>;
  deleteServer?: Maybe<Server>;
  deleteServerCategories?: Maybe<Array<Maybe<ServerCategory>>>;
  deleteServerCategory?: Maybe<ServerCategory>;
  deleteServers?: Maybe<Array<Maybe<Server>>>;
  deleteUser?: Maybe<User>;
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  deleteWaitlist?: Maybe<Waitlist>;
  deleteWaitlists?: Maybe<Array<Maybe<Waitlist>>>;
  endSession: Scalars['Boolean']['output'];
  updateConfig?: Maybe<Config>;
  updateConfigs?: Maybe<Array<Maybe<Config>>>;
  updateFrequentlyAskedQuestion?: Maybe<FrequentlyAskedQuestion>;
  updateFrequentlyAskedQuestions?: Maybe<Array<Maybe<FrequentlyAskedQuestion>>>;
  updateLog?: Maybe<Log>;
  updateLogs?: Maybe<Array<Maybe<Log>>>;
  updatePage?: Maybe<Page>;
  updatePages?: Maybe<Array<Maybe<Page>>>;
  updateServer?: Maybe<Server>;
  updateServerCategories?: Maybe<Array<Maybe<ServerCategory>>>;
  updateServerCategory?: Maybe<ServerCategory>;
  updateServers?: Maybe<Array<Maybe<Server>>>;
  updateUser?: Maybe<User>;
  updateUsers?: Maybe<Array<Maybe<User>>>;
  updateWaitlist?: Maybe<Waitlist>;
  updateWaitlists?: Maybe<Array<Maybe<Waitlist>>>;
};

export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type MutationCreateConfigArgs = {
  data: ConfigCreateInput;
};

export type MutationCreateConfigsArgs = {
  data: Array<ConfigCreateInput>;
};

export type MutationCreateFrequentlyAskedQuestionArgs = {
  data: FrequentlyAskedQuestionCreateInput;
};

export type MutationCreateFrequentlyAskedQuestionsArgs = {
  data: Array<FrequentlyAskedQuestionCreateInput>;
};

export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};

export type MutationCreateLogArgs = {
  data: LogCreateInput;
};

export type MutationCreateLogsArgs = {
  data: Array<LogCreateInput>;
};

export type MutationCreatePageArgs = {
  data: PageCreateInput;
};

export type MutationCreatePagesArgs = {
  data: Array<PageCreateInput>;
};

export type MutationCreateServerArgs = {
  data: ServerCreateInput;
};

export type MutationCreateServerCategoriesArgs = {
  data: Array<ServerCategoryCreateInput>;
};

export type MutationCreateServerCategoryArgs = {
  data: ServerCategoryCreateInput;
};

export type MutationCreateServersArgs = {
  data: Array<ServerCreateInput>;
};

export type MutationCreateUserArgs = {
  data: UserCreateInput;
};

export type MutationCreateUsersArgs = {
  data: Array<UserCreateInput>;
};

export type MutationCreateWaitlistArgs = {
  data: WaitlistCreateInput;
};

export type MutationCreateWaitlistsArgs = {
  data: Array<WaitlistCreateInput>;
};

export type MutationDeleteConfigArgs = {
  where?: ConfigWhereUniqueInput;
};

export type MutationDeleteConfigsArgs = {
  where: Array<ConfigWhereUniqueInput>;
};

export type MutationDeleteFrequentlyAskedQuestionArgs = {
  where: FrequentlyAskedQuestionWhereUniqueInput;
};

export type MutationDeleteFrequentlyAskedQuestionsArgs = {
  where: Array<FrequentlyAskedQuestionWhereUniqueInput>;
};

export type MutationDeleteLogArgs = {
  where: LogWhereUniqueInput;
};

export type MutationDeleteLogsArgs = {
  where: Array<LogWhereUniqueInput>;
};

export type MutationDeletePageArgs = {
  where: PageWhereUniqueInput;
};

export type MutationDeletePagesArgs = {
  where: Array<PageWhereUniqueInput>;
};

export type MutationDeleteServerArgs = {
  where: ServerWhereUniqueInput;
};

export type MutationDeleteServerCategoriesArgs = {
  where: Array<ServerCategoryWhereUniqueInput>;
};

export type MutationDeleteServerCategoryArgs = {
  where: ServerCategoryWhereUniqueInput;
};

export type MutationDeleteServersArgs = {
  where: Array<ServerWhereUniqueInput>;
};

export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};

export type MutationDeleteUsersArgs = {
  where: Array<UserWhereUniqueInput>;
};

export type MutationDeleteWaitlistArgs = {
  where: WaitlistWhereUniqueInput;
};

export type MutationDeleteWaitlistsArgs = {
  where: Array<WaitlistWhereUniqueInput>;
};

export type MutationUpdateConfigArgs = {
  data: ConfigUpdateInput;
  where?: ConfigWhereUniqueInput;
};

export type MutationUpdateConfigsArgs = {
  data: Array<ConfigUpdateArgs>;
};

export type MutationUpdateFrequentlyAskedQuestionArgs = {
  data: FrequentlyAskedQuestionUpdateInput;
  where: FrequentlyAskedQuestionWhereUniqueInput;
};

export type MutationUpdateFrequentlyAskedQuestionsArgs = {
  data: Array<FrequentlyAskedQuestionUpdateArgs>;
};

export type MutationUpdateLogArgs = {
  data: LogUpdateInput;
  where: LogWhereUniqueInput;
};

export type MutationUpdateLogsArgs = {
  data: Array<LogUpdateArgs>;
};

export type MutationUpdatePageArgs = {
  data: PageUpdateInput;
  where: PageWhereUniqueInput;
};

export type MutationUpdatePagesArgs = {
  data: Array<PageUpdateArgs>;
};

export type MutationUpdateServerArgs = {
  data: ServerUpdateInput;
  where: ServerWhereUniqueInput;
};

export type MutationUpdateServerCategoriesArgs = {
  data: Array<ServerCategoryUpdateArgs>;
};

export type MutationUpdateServerCategoryArgs = {
  data: ServerCategoryUpdateInput;
  where: ServerCategoryWhereUniqueInput;
};

export type MutationUpdateServersArgs = {
  data: Array<ServerUpdateArgs>;
};

export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type MutationUpdateUsersArgs = {
  data: Array<UserUpdateArgs>;
};

export type MutationUpdateWaitlistArgs = {
  data: WaitlistUpdateInput;
  where: WaitlistWhereUniqueInput;
};

export type MutationUpdateWaitlistsArgs = {
  data: Array<WaitlistUpdateArgs>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc',
}

export type Page = {
  __typename?: 'Page';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  seoDescription?: Maybe<Scalars['String']['output']>;
  seoIcon?: Maybe<CloudinaryImage_File>;
  seoKeywords?: Maybe<Scalars['String']['output']>;
  seoTitle?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PageCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  seoDescription?: InputMaybe<Scalars['String']['input']>;
  seoIcon?: InputMaybe<Scalars['Upload']['input']>;
  seoKeywords?: InputMaybe<Scalars['String']['input']>;
  seoTitle?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PageOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  seoDescription?: InputMaybe<OrderDirection>;
  seoKeywords?: InputMaybe<OrderDirection>;
  seoTitle?: InputMaybe<OrderDirection>;
  slug?: InputMaybe<OrderDirection>;
  subtitle?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type PageUpdateArgs = {
  data: PageUpdateInput;
  where: PageWhereUniqueInput;
};

export type PageUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  seoDescription?: InputMaybe<Scalars['String']['input']>;
  seoIcon?: InputMaybe<Scalars['Upload']['input']>;
  seoKeywords?: InputMaybe<Scalars['String']['input']>;
  seoTitle?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PageWhereInput = {
  AND?: InputMaybe<Array<PageWhereInput>>;
  NOT?: InputMaybe<Array<PageWhereInput>>;
  OR?: InputMaybe<Array<PageWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  seoDescription?: InputMaybe<StringFilter>;
  seoKeywords?: InputMaybe<StringFilter>;
  seoTitle?: InputMaybe<StringFilter>;
  slug?: InputMaybe<StringFilter>;
  subtitle?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type PageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type PasswordState = {
  __typename?: 'PasswordState';
  isSet: Scalars['Boolean']['output'];
};

export type Query = {
  __typename?: 'Query';
  authenticatedItem?: Maybe<AuthenticatedItem>;
  config?: Maybe<Config>;
  configs?: Maybe<Array<Config>>;
  configsCount?: Maybe<Scalars['Int']['output']>;
  frequentlyAskedQuestion?: Maybe<FrequentlyAskedQuestion>;
  frequentlyAskedQuestions?: Maybe<Array<FrequentlyAskedQuestion>>;
  frequentlyAskedQuestionsCount?: Maybe<Scalars['Int']['output']>;
  keystone: KeystoneMeta;
  log?: Maybe<Log>;
  logs?: Maybe<Array<Log>>;
  logsCount?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Page>;
  pages?: Maybe<Array<Page>>;
  pagesCount?: Maybe<Scalars['Int']['output']>;
  server?: Maybe<Server>;
  serverCategories?: Maybe<Array<ServerCategory>>;
  serverCategoriesCount?: Maybe<Scalars['Int']['output']>;
  serverCategory?: Maybe<ServerCategory>;
  servers?: Maybe<Array<Server>>;
  serversCount?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
  usersCount?: Maybe<Scalars['Int']['output']>;
  waitlist?: Maybe<Waitlist>;
  waitlists?: Maybe<Array<Waitlist>>;
  waitlistsCount?: Maybe<Scalars['Int']['output']>;
};

export type QueryConfigArgs = {
  where?: ConfigWhereUniqueInput;
};

export type QueryConfigsArgs = {
  cursor?: InputMaybe<ConfigWhereUniqueInput>;
  orderBy?: Array<ConfigOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ConfigWhereInput;
};

export type QueryConfigsCountArgs = {
  where?: ConfigWhereInput;
};

export type QueryFrequentlyAskedQuestionArgs = {
  where: FrequentlyAskedQuestionWhereUniqueInput;
};

export type QueryFrequentlyAskedQuestionsArgs = {
  cursor?: InputMaybe<FrequentlyAskedQuestionWhereUniqueInput>;
  orderBy?: Array<FrequentlyAskedQuestionOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: FrequentlyAskedQuestionWhereInput;
};

export type QueryFrequentlyAskedQuestionsCountArgs = {
  where?: FrequentlyAskedQuestionWhereInput;
};

export type QueryLogArgs = {
  where: LogWhereUniqueInput;
};

export type QueryLogsArgs = {
  cursor?: InputMaybe<LogWhereUniqueInput>;
  orderBy?: Array<LogOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: LogWhereInput;
};

export type QueryLogsCountArgs = {
  where?: LogWhereInput;
};

export type QueryPageArgs = {
  where: PageWhereUniqueInput;
};

export type QueryPagesArgs = {
  cursor?: InputMaybe<PageWhereUniqueInput>;
  orderBy?: Array<PageOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PageWhereInput;
};

export type QueryPagesCountArgs = {
  where?: PageWhereInput;
};

export type QueryServerArgs = {
  where: ServerWhereUniqueInput;
};

export type QueryServerCategoriesArgs = {
  cursor?: InputMaybe<ServerCategoryWhereUniqueInput>;
  orderBy?: Array<ServerCategoryOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ServerCategoryWhereInput;
};

export type QueryServerCategoriesCountArgs = {
  where?: ServerCategoryWhereInput;
};

export type QueryServerCategoryArgs = {
  where: ServerCategoryWhereUniqueInput;
};

export type QueryServersArgs = {
  cursor?: InputMaybe<ServerWhereUniqueInput>;
  orderBy?: Array<ServerOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ServerWhereInput;
};

export type QueryServersCountArgs = {
  where?: ServerWhereInput;
};

export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserWhereInput;
};

export type QueryUsersCountArgs = {
  where?: UserWhereInput;
};

export type QueryWaitlistArgs = {
  where: WaitlistWhereUniqueInput;
};

export type QueryWaitlistsArgs = {
  cursor?: InputMaybe<WaitlistWhereUniqueInput>;
  orderBy?: Array<WaitlistOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: WaitlistWhereInput;
};

export type QueryWaitlistsCountArgs = {
  where?: WaitlistWhereInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive',
}

export type Server = {
  __typename?: 'Server';
  category?: Maybe<ServerCategory>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  githubLanguage?: Maybe<Scalars['String']['output']>;
  githubLicense?: Maybe<Scalars['String']['output']>;
  githubOwner?: Maybe<Scalars['String']['output']>;
  githubPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  githubUrl?: Maybe<Scalars['String']['output']>;
  homepage?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<CloudinaryImage_File>;
  id: Scalars['ID']['output'];
  isOfficial?: Maybe<Scalars['Boolean']['output']>;
  keywords?: Maybe<Scalars['String']['output']>;
  overview?: Maybe<Scalars['String']['output']>;
  settings?: Maybe<Scalars['JSON']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  tools?: Maybe<Scalars['JSON']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ServerCategory = {
  __typename?: 'ServerCategory';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  icon?: Maybe<CloudinaryImage_File>;
  id: Scalars['ID']['output'];
  isDefault?: Maybe<Scalars['Boolean']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ServerCategoryCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  icon?: InputMaybe<Scalars['Upload']['input']>;
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ServerCategoryOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isDefault?: InputMaybe<OrderDirection>;
  slug?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type ServerCategoryRelateToOneForCreateInput = {
  connect?: InputMaybe<ServerCategoryWhereUniqueInput>;
  create?: InputMaybe<ServerCategoryCreateInput>;
};

export type ServerCategoryRelateToOneForUpdateInput = {
  connect?: InputMaybe<ServerCategoryWhereUniqueInput>;
  create?: InputMaybe<ServerCategoryCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ServerCategoryUpdateArgs = {
  data: ServerCategoryUpdateInput;
  where: ServerCategoryWhereUniqueInput;
};

export type ServerCategoryUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  icon?: InputMaybe<Scalars['Upload']['input']>;
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ServerCategoryWhereInput = {
  AND?: InputMaybe<Array<ServerCategoryWhereInput>>;
  NOT?: InputMaybe<Array<ServerCategoryWhereInput>>;
  OR?: InputMaybe<Array<ServerCategoryWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  isDefault?: InputMaybe<BooleanFilter>;
  slug?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type ServerCategoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ServerCreateInput = {
  category?: InputMaybe<ServerCategoryRelateToOneForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  githubLanguage?: InputMaybe<Scalars['String']['input']>;
  githubLicense?: InputMaybe<Scalars['String']['input']>;
  githubOwner?: InputMaybe<Scalars['String']['input']>;
  githubPublishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  githubUrl?: InputMaybe<Scalars['String']['input']>;
  homepage?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['Upload']['input']>;
  isOfficial?: InputMaybe<Scalars['Boolean']['input']>;
  keywords?: InputMaybe<Scalars['String']['input']>;
  overview?: InputMaybe<Scalars['String']['input']>;
  settings?: InputMaybe<Scalars['JSON']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  tools?: InputMaybe<Scalars['JSON']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ServerOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  githubLanguage?: InputMaybe<OrderDirection>;
  githubLicense?: InputMaybe<OrderDirection>;
  githubOwner?: InputMaybe<OrderDirection>;
  githubPublishedAt?: InputMaybe<OrderDirection>;
  githubUrl?: InputMaybe<OrderDirection>;
  homepage?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isOfficial?: InputMaybe<OrderDirection>;
  keywords?: InputMaybe<OrderDirection>;
  overview?: InputMaybe<OrderDirection>;
  slug?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type ServerUpdateArgs = {
  data: ServerUpdateInput;
  where: ServerWhereUniqueInput;
};

export type ServerUpdateInput = {
  category?: InputMaybe<ServerCategoryRelateToOneForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  githubLanguage?: InputMaybe<Scalars['String']['input']>;
  githubLicense?: InputMaybe<Scalars['String']['input']>;
  githubOwner?: InputMaybe<Scalars['String']['input']>;
  githubPublishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  githubUrl?: InputMaybe<Scalars['String']['input']>;
  homepage?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['Upload']['input']>;
  isOfficial?: InputMaybe<Scalars['Boolean']['input']>;
  keywords?: InputMaybe<Scalars['String']['input']>;
  overview?: InputMaybe<Scalars['String']['input']>;
  settings?: InputMaybe<Scalars['JSON']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  tools?: InputMaybe<Scalars['JSON']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ServerWhereInput = {
  AND?: InputMaybe<Array<ServerWhereInput>>;
  NOT?: InputMaybe<Array<ServerWhereInput>>;
  OR?: InputMaybe<Array<ServerWhereInput>>;
  category?: InputMaybe<ServerCategoryWhereInput>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  githubLanguage?: InputMaybe<StringFilter>;
  githubLicense?: InputMaybe<StringFilter>;
  githubOwner?: InputMaybe<StringFilter>;
  githubPublishedAt?: InputMaybe<DateTimeNullableFilter>;
  githubUrl?: InputMaybe<StringFilter>;
  homepage?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  isOfficial?: InputMaybe<BooleanFilter>;
  keywords?: InputMaybe<StringFilter>;
  overview?: InputMaybe<StringFilter>;
  slug?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type ServerWhereUniqueInput = {
  githubUrl?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isAdmin?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<PasswordState>;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: 'UserAuthenticationWithPasswordFailure';
  message: Scalars['String']['output'];
};

export type UserAuthenticationWithPasswordResult =
  | UserAuthenticationWithPasswordFailure
  | UserAuthenticationWithPasswordSuccess;

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: 'UserAuthenticationWithPasswordSuccess';
  item: User;
  sessionToken: Scalars['String']['output'];
};

export type UserCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type UserOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  email?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isAdmin?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
};

export type UserUpdateArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  isAdmin?: InputMaybe<BooleanFilter>;
  name?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Waitlist = {
  __typename?: 'Waitlist';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type WaitlistCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
};

export type WaitlistOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  email?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
};

export type WaitlistUpdateArgs = {
  data: WaitlistUpdateInput;
  where: WaitlistWhereUniqueInput;
};

export type WaitlistUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
};

export type WaitlistWhereInput = {
  AND?: InputMaybe<Array<WaitlistWhereInput>>;
  NOT?: InputMaybe<Array<WaitlistWhereInput>>;
  OR?: InputMaybe<Array<WaitlistWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
};

export type WaitlistWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type WaitlistsCreateMutationVariables = Exact<{
  data: WaitlistCreateInput;
}>;

export type WaitlistsCreateMutation = {
  __typename?: 'Mutation';
  createWaitlist?: { __typename?: 'Waitlist'; id: string } | null;
};

export type WaitlistsFindUniqueQueryVariables = Exact<{
  where: WaitlistWhereUniqueInput;
}>;

export type WaitlistsFindUniqueQuery = {
  __typename?: 'Query';
  waitlist?: { __typename?: 'Waitlist'; id: string } | null;
};

export const WaitlistsCreate = gql`
  mutation waitlistsCreate($data: WaitlistCreateInput!) {
    createWaitlist(data: $data) {
      id
    }
  }
`;
export const WaitlistsFindUnique = gql`
  query waitlistsFindUnique($where: WaitlistWhereUniqueInput!) {
    waitlist(where: $where) {
      id
    }
  }
`;
