import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import ContentWrapper from '.';

describe('<ContentWrapper>', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <ContentWrapper>
        <div>Content Wrapper</div>
      </ContentWrapper>,
    ) as ShallowWrapper;
  });

  it('renders properly', () => {
    expect(wrapper.getElement()).toMatchSnapshot();
  });
});
