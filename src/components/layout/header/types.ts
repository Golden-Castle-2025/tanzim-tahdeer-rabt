
export interface MainMenuItem {
  name: string;
  path: string;
  children?: {
    name: string;
    path: string;
  }[];
}
