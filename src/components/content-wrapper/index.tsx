import React from 'react';

interface Props {
  children: Element | JSX.Element | Array<Element | JSX.Element>;
}

const ContentWrapper = (props: Props): JSX.Element => {
  return <div className='content-wrapper'>{props.children}</div>;
};

export default ContentWrapper;
