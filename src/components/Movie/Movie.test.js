import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Movie } from './Movie';

const styles = {
    root: {
        width: '100%',
    },
    movie: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    img: {
        width: '100%',
        maxHeight: '50vh',
    }
  };

  const movie = {
    _id: "5c0e312574bb1627d508850a",
    title: "Robinson",
    imageURL: "https://www.riddickmovie.com/wp-content/uploads/2018/01/1.jpg",
    summary: "Super truper",
    rating: "8.7/10"
  };

configure({adapter: new Adapter()});


describe('<Movie />', () => {
    let shallow;
    let wrapper;

   beforeAll(() => {
    shallow = createShallow();
    wrapper = shallow(<Movie classes={styles} movie={movie}/>);
  });
    it('Schould rednder 2 div', () => {
        expect(wrapper.find('div')).toHaveLength(2);
    });

    it('Schould rednder 1 h3', () => {
        expect(wrapper.find('h3')).toHaveLength(1);
    });

    it('Schould rednder 1 img', () => {
        expect(wrapper.find('img')).toHaveLength(1);
    });
});