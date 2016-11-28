/* eslint-disable import/prefer-default-export */

import { createRouter } from '@exponent/ex-navigation';

import TabNavigationScreen from './TabNavigationScreen';
import DrawerNavigationScreen from './DrawerNavigationScreen';
import BlankScreen from './BlankScreen';
import ModalScreen from './ModalScreen';

import Movies from '../modules/movies/Movies';
import MoviesList from '../modules/movies/MoviesList';
import Movie from '../modules/movies/Movie';
import Search from '../modules/movies/Search';

export default createRouter(() => ({
  movie: () => Movie,
  movies: () => Movies,
  moviesList: () => MoviesList,
  search: () => Search,
  drawerNavigation: () => DrawerNavigationScreen,
  tabNavigation: () => TabNavigationScreen,
  blank: () => BlankScreen,
  modal: () => ModalScreen,
}), {ignoreSerializableWarnings: true});
