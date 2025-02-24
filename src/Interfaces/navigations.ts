export interface INavigation {
  name: string;
  url: string;
  disabled?: boolean;
}

export interface INavigationLinks {
  links: INavigation[];
  pathname?: string;
}
