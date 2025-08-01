export interface ServerRecord {
  documentId: string;
  Title: string;
  Slug: string;
  GitHubOwner: string;
  Description: string;
  IsOfficial: boolean;
  Logo?: {
    url: string;
  };
  Category: {
    Icon: {
      iconData: string;
      iconName: string;
      width: number;
      height: number;
    };
  };
}
