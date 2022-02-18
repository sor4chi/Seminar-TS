export interface BookSummary {
  title: string;
  description: string;
  content: string;
  tags: string[];
  image: {
    width: number;
    height: number;
    url: string;
  };
}
