import moment from 'moment';

export const elements = [
  {
    id: 1,
    image: {
      src: '/dist/images/default.jpg',
      width: 160,
      height: 120,
      style: {
        padding: '5px',
        margin: '5px',
        border: '1px solid black'
      }
    },
    description: { text: 'Winter is comming, first' },
    meta: {
      author: 'Ivan Petrov',
      createdAt: moment().subtract(10, 'weeks')
                         .calendar(),
      updatedAt: moment().subtract(8, 'weeks')
                         .calendar(),
      count: 3
    }
  },
  {
    id: 2,
    image: {
      src: '/dist/images/default.jpg',
      width: 160,
      height: 120,
      alt: 'Winter'
    },
    description: { text: 'Winter is comming, second' },
    meta: {
      author: 'Peter Petrov',
      createdAt: moment().subtract(2, 'weeks')
                         .calendar(),
      updatedAt: moment().subtract(2, 'days')
                         .calendar(),
      count: 7
    }
  },
  {
    id: 3,
    image: {
      src: '/dist/images/default.jpg',
      width: 160,
      height: 120,
      alt: 'Winter',
      style: {
        padding: '5px',
        margin: '5px',
        border: '1px solid black'
      }
    },
    description: { text: 'Winter is comming, third' },
    meta: {
      author: 'Sidor Petrov',
      createdAt: moment().subtract(2, 'days')
                         .calendar(),
      updatedAt: moment().subtract(1, 'days')
                         .calendar(),
      count: 32
    }
  }
];
