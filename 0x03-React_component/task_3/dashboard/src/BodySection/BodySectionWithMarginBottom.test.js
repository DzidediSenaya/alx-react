import React from 'react';
import { render } from '@testing-library/react';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

describe('BodySectionWithMarginBottom Component', () => {
  it('should render BodySection component and pass props correctly', () => {
    const title = 'test title';
    const children = <p>test children node</p>;

    const { getByText } = render(
      <BodySectionWithMarginBottom title={title}>{children}</BodySectionWithMarginBottom>
    );

    const titleElement = getByText(title);
    const childrenElement = getByText('test children node');

    expect(titleElement).toBeInTheDocument();
    expect(childrenElement).toBeInTheDocument();

    // Check if BodySection component is rendered
    const bodySectionComponent = getByText(title).closest('.bodySection');
    expect(bodySectionComponent).toBeInTheDocument();

    // Check if props are passed correctly to the BodySection component
    expect(bodySectionComponent.querySelector('h2')).toBeInTheDocument();
    expect(bodySectionComponent.querySelector('p')).toBeInTheDocument();
  });
});

