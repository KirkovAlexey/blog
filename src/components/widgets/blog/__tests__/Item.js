import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Link from 'components/elements/Link';

import BlogItem from '../BlogItem';

describe('Item', () => {
  it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BlogItem />, div);
  });

  describe('render', () => {
    it('should render the title', () => {
      const elementProps = {
        link: '/posts/5',
        description: { text: 'Hello, world!' }
      };
      const item = shallow(<BlogItem element={elementProps} />);
      const header = <Link to="/posts/5">Hello, world!</Link>;

      expect(item.contains(header)).toEqual(true);
    });

    it('should render usual item', () => {
      const elementProps = {
        link: '/posts/5',
        description: { text: 'Hello, world!' },
        image: {
          alt: 'Hello, World',
          src: '/dist/images/default.jpg'
        }
      };

      const item = shallow(<BlogItem element={elementProps} />);

      expect(item).toMatchSnapshot();
    });
  });
});
