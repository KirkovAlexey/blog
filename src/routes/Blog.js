import MainLayout from 'components/layouts/MainLayout';

import initialLoad from 'helpers/initialLoad';

import PostsContainer from 'containers/PostsContainer';
import PostContainer from 'containers/PostContainer';
import ContactsContainer from 'containers/ContactsContainer';
import EditPostContainer from 'containers/EditPostContainer';
import NewPostContainer from 'containers/NewPostContainer';

import { fetchPosts } from 'actions/Posts';
import { fetchPost, newPost } from 'actions/Post';

import { postsPath, contactsPath, postsEditPath, postsNewPath } from 'helpers/routes';

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
    if (initialLoad()) return;
    return store.dispatch(fetchPost(params.id));
  }
};

const EditPostRoute = {
  path: postsEditPath(),
  component: EditPostContainer,
  prepareData: (store, query, params) => {
    if (initialLoad()) return;
    return store.dispatch(fetchPost(params.id));
  }
};

const CreatePostRoute = {
  path: postsNewPath(),
  component: NewPostContainer,
  prepareData: (store) => {
    if (initialLoad()) return;
    return store.dispatch(newPost());
  }
};

const SearchRoute = {
  path: '/result',
  component: PostsContainer,
  prepareData: (store, query) => {
    if (initialLoad()) return;
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
    EditPostRoute,
    CreatePostRoute,
    SearchRoute,
    ContactsRoute
  ]
};
