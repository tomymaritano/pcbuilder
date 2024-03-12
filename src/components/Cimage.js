import React from 'react';
import componentImages from './ComponentImages';

const ComponentImage = ({ componentName }) => {
  return <img src={componentImages[componentName]} alt={componentName} />;
};

export default ComponentImage;
