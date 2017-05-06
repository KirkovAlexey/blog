import MainLayout from 'components/layouts/MainLayout';

import BlogPage from 'components/BlogPage';
import Post from 'components/Post';

import { fetchPosts } from 'actions/Posts';
import { fetchPost } from 'actions/Post';

import { postsPath } from 'helpers/routes';

const Index = {
  path: '/',
  component: BlogPage,
  prepareData: (store) => {
    store.dispatch(fetchPosts());
  }
};

const PostRoute = {
  path: postsPath(),
  component: Post,
  prepareData: (store, query, params) => {
    store.dispatch(fetchPost(params.id));
  }

};

export default {
  component: MainLayout,
  childRoutes: [
    Index,
    PostRoute
  ]
};
