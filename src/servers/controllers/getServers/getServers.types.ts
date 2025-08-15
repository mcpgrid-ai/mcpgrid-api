import { UploadApiResponse } from '@services/cloudinary';

export interface ServerRecord {
  id: string;
  title: string;
  slug: string;
  githubOwner: string;
  description: string;
  isOfficial: boolean;
  icon?: {
    _id: string;
    _meta: UploadApiResponse;
  };
  category: {
    icon?: {
      _id: string;
      _meta: UploadApiResponse;
    };
  };
}

export interface GetFilterParams {
  category?: string;
}
