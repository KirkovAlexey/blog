import MainLayout from 'components/layouts/MainLayout';

import PostsContainer from 'containers/PostsContainer';
import PostContainer from 'containers/PostContainer';

import { fetchPosts, searchPosts } from 'actions/Posts';
import { fetchPost } from 'actions/Post';

import { postsPath } from 'helpers/routes';

const Index = {
  path: '/',
  component: PostsContainer,
  prepareData: (store) => {
    store.dispatch(fetchPosts());
  }
};

const PostRoute = {
  path: postsPath(),
  component: PostContainer,
  prepareData: (store, query, params) => {
    store.dispatch(fetchPost(params.id));
  }
};

const SearchRoute = {
  path: '/result',
  component: PostsContainer,
  prepareData: (store, query) => {
    store.dispatch(searchPosts(query.q));
  }
};

export default {
  component: MainLayout,
  childRoutes: [
    Index,
    PostRoute,
    SearchRoute
  ]
};
