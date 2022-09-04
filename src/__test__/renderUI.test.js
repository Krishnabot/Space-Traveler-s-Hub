import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Missions from '../components/Missions';
import MissionContainer from '../components/MissionsContainer';
import Rockets from '../components/Rockets';
import RocketCards from '../components/RocketCards';
import Navbar from '../components/Navbar';
import Profile from '../components/profile';
import ProfileContainer from '../components/ProfileContainer';
import store from '../redux/configureStore';

describe('Components rendering test', () => {
  it('whether it match snapshot for NavBar or not ', () => {
    const tree = render(
      <BrowserRouter>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Whether it matches snapshot for the Mission Contaniner or not', () => {
    const tree = render(
      <BrowserRouter>
        <Provider store={store}>
          <MissionContainer />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Whether it matches snapshot for the Mission or not ', () => {
    const mission = {
      mission_name: 'Mission 1',
      description: 'This is the description for mission 1',
      more: 'A link',
      status: false,
    };

    const tree = render(
      <BrowserRouter>
        <Provider store={store}>
          <Missions mission={mission} />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Whether it matches snapshot for the RocketCards or not', () => {
    const tree = render(
      <BrowserRouter>
        <Provider store={store}>
          <RocketCards />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Whether it matches snapshot for the  Rockets or not', () => {
    const rocket = {
      rocket_name: 'Rocket  1',
      description: 'This is the description for mission 1',
      more: 'A link',
      status: false,
      image: 'A Link',
      id: 'Rocket 1',
    };

    const tree = render(
      <BrowserRouter>
        <Provider store={store}>
          <Rockets rocket={rocket} />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Whether it matches snapshot for the Profile Contaniner  or not', () => {
    const tree = render(
      <BrowserRouter>
        <Provider store={store}>
          <ProfileContainer />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Whether it matches snapshot for the Profile or not', () => {
    const tree = render(
      <BrowserRouter>
        <Provider store={store}>
          <Profile />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
