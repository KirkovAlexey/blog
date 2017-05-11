import MainLayout from 'components/layouts/MainLayout';

import initialLoad from 'helpers/initialLoad';

import PostsContainer from 'containers/PostsContainer';
import PostContainer from 'containers/PostContainer';
import ContactsContainer from 'containers/ContactsContainer';

import { fetchPosts } from 'actions/Posts';
import { fetchPost } from 'actions/Post';

import { postsPath, contactsPath } from 'helpers/routes';

const Index = {
  path: '/',
  component: PostsContainer,
  prepareData: (store) => {
    if (initialLoad()) return;
    return store.dispatch(fetchPosts());
  }
};

const PostRoute = {
  path: postsPath(),
  component: PostContainer,
  prepareData: (store, query, params) => {
    return store.dispatch(fetchPost(params.id));
  }
};

const SearchRoute = {
  path: '/result',
  component: PostsContainer,
  prepareData: (store, query) => {
    return store.dispatch(fetchPosts(query.q));
  }
};

const ContactsRoute = {
  path: contactsPath(),
  component: ContactsContainer
};

export default {
  component: MainLayout,
  childRoutes: [
    Index,
    PostRoute,
    SearchRoute,
    ContactsRoute
  ]
};
