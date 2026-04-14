export interface MediaCategory {
  id: number;
  name: string;
  icon: string;
}

export interface Media {
  id?: number;
  title: string;
  categoryId: number;
  description: string;
  url: string;
  image?: string;
}

