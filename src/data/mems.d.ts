export interface Mem {
  id: number;
  title: string;
  upvotes: number;
  downvotes: number;
  description: string;
  img: ImgConfig;
}

export interface ImgConfig {
  type: ImgSourceType;
  value: string;
}
export type ImgSourceType = "staticSource" | "link";
export type Mems = Mem[];
