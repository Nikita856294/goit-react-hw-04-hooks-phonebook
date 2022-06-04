import React from 'react';
import { Title } from './SectionStyle';

function Section({ title, children }) {
  return (
    <>
      <Title>{title}</Title>
      {children}
    </>
  );
}

export default Section;
