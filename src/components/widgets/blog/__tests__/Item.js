import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Link from 'components/elements/Link';
import MetaData from 'components/widgets/blog/elements/Meta';

import BlogItem from '../BlogItem';

describe('Item', () => {
  it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BlogItem />, div);
  });

  describe('render', () => {
    const elementProps = {
      link: '/posts/5',
      description: { text: 'Hello, world!' },
      meta: {
        author: 'Ivan Petrov',
        createdAt: '2017-01-01',
        updatedAt: '2017-01-03',
        count: 3
      }
    };

    it('should render the title', () => {
      const item = shallow(<BlogItem element={elementProps} />);
      const header = <Link to="/posts/5">Hello, world!</Link>;

      expect(item.contains(header)).toEqual(true);
    });

    it('should render the metadata', () => {
      const item = shallow(<BlogItem element={elementProps} />);
      const meta = <MetaData {...elementProps.meta} />;

      expect(item.contains(meta)).toEqual(true);
    });

    it('should render usual item', () => {
      const elementProps = {
        link: '/posts/5',
        description: { text: 'Hello, world!' },
        image: {
          alt: 'Hello, World',
          src: '/dist/images/default.jpg'
        },
        meta: {
          createdAt: '2017-04-14',
          updatedAt: '2017-04-15'
        }
      };

      const item = shallow(<BlogItem element={elementProps} />);

      expect(item).toMatchSnapshot();
    });
  });
});
