export interface ServerRecord {
  documentId: string;
  Title: string;
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
