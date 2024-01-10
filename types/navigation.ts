import type { RoutePathSchema, RoutesNamesList } from '@typed-router';

export type NavigationItem = {
  path: RoutePathSchema;
  name: RoutesNamesList;
  text: string;
};
