import { routesNames } from '#ui-colors/typed-router';
import type { NavigationItem } from '~/types/navigation';

export const rootNavigation: NavigationItem[] = [
  {
    name: routesNames.films,
    path: '/films',
    text: 'Films'
  },
  {
    name: routesNames.people,
    path: '/people',
    text: 'People'
  },
  {
    name: routesNames.planets,
    path: '/planets',
    text: 'Planets'
  }
];
