import { lazy } from 'react';
import {paths} from './paths';

const Home = lazy(() => import('../screens/home'));

export const ROUTES = [
  {
    exact: true,
    path: paths.home,
    component: Home,
    title: "aqui",
    description: "llegada"
  }
];


