import React from 'react';
import ContentLoader from 'react-content-loader';

const ItemLoader: React.FC = () => {
  const display = window.innerWidth;
  let width = 350;
  let hight = 480;
  if (
    display < 767 
  ) {
    hight = display / 0.8
    width = display - 50
  }else if (
    display < 1000 
  ) {
    hight = 310
    width = display - 100
  }

  return (
    <ContentLoader 
    speed={2}
    width={width}
    height={hight}
    viewBox={`0 0 ${width} ${hight}`}
    backgroundColor="#ededee"
    foregroundColor="#e0e0e0"
  >
    <rect x="0" y="0" rx="15" ry="15" width={width} height={hight} />
  </ContentLoader>
  )
}

export default ItemLoader;