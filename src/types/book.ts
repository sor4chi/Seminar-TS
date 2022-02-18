export interface Book {
  title: string;
  description: string;
  content: string;
  tags: Tag[];
  image: {
    width: number;
    height: number;
    url: string;
  };
}

export interface Tag {
  id: number;
  name: string;
}
