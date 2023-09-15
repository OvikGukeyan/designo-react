import React from 'react';
import ContentLoader from 'react-content-loader';

const ItemLoader: React.FC = () => {
  return (
    <ContentLoader 
    speed={2}
    width={350}
    height={480}
    viewBox="0 0 350 480"
    backgroundColor="#ededee"
    foregroundColor="#e0e0e0"
  >
    <rect x="650" y="273" rx="0" ry="0" width="445" height="343" /> 
    <rect x="0" y="0" rx="15" ry="15" width="350" height="480" />
  </ContentLoader>
  )
}

export default ItemLoader;