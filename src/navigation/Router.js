/* eslint-disable import/prefer-default-export */
// import Drawer from './modules/_global/Drawer';

import {
  createRouter,
} from '@exponent/ex-navigation';

import TabNavigationScreen from './TabNavigationScreen';
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
  drawerNavigation: () => TabNavigationScreen,
  tabNavigation: () => TabNavigationScreen,
  blank: () => BlankScreen,
  modal: () => ModalScreen,
}), {ignoreSerializableWarnings: true});
