import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../ui-practice/home'
import NotFound from '../ui-practice/notFound'
import { MemoryRouter as Router } from 'react-router-dom';
import { render, fireEvent, getByTestId} from "react-testing-library";
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Link } from 'react-router-dom';

configure({ adapter: new Adapter() })

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render( <Router><Home /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // it("App loads with initial state of 0 and resuts in 1 when incremented", () => {
  //   const { container } = render(<Router><Home /></Router>);
  //   const countValue = getByTestId(container, "counter");
  //   const increment = getByTestId(container, "incrementButton");
  //   expect(countValue.textContent).toBe('0');
  //   fireEvent.click(increment);
  //   expect(countValue.textContent).toBe('1');
  // });

  test('valid home path should result in 1', () => {
    const wrapper = mount(
      <Router initialEntries={[ '/' ]}>
        <Home/>
      </Router>
    );
    expect(wrapper.find(Home)).toHaveLength(1);
  });
  test('invalid home path should result in 0', () => {
    const wrapper = mount(
      <Router initialEntries={[ '/random' ]}>
        <NotFound/>
      </Router>
    );
    expect(wrapper.find(NotFound)).toHaveLength(1);
  });
  it('linkto candidate page', () => {
    const wrapper = mount(
      <Router>
        <Home />
      </Router>
    );
    expect(wrapper.find('[href="/Candidate"]').length).toBe(1);
  })
  
  