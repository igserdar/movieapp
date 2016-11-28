/* eslint-disable import/prefer-default-export */
// import Drawer from './modules/_global/Drawer';
// import MoviesList from './modules/movies/MoviesList';
// import Search from './modules/movies/Search';

import {
  createRouter,
} from '@exponent/ex-navigation';

import TabNavigationScreen from './TabNavigationScreen';
import BlankScreen from './BlankScreen';
import ModalScreen from './ModalScreen';

import Movies from '../modules/movies/Movies';
import Movie from '../modules/movies/Movie';

export default createRouter(() => ({
  movie: () => Movie,
  movies: () => Movies,
  // moviesList: () => MoviesList,
  // search: () => Search,
  // drawer: () => Drawer,
  tabNavigation: () => TabNavigationScreen,
  blank: () => BlankScreen,
  modal: () => ModalScreen,
}), {ignoreSerializableWarnings: true});
