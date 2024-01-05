import React, { useEffect, useState } from 'react';

interface Position {
  left: number;
  top: number;
  width: number;
  height: number;
}

interface DivProps {
  style: React.CSSProperties;
}

const ScatterDivs: React.FC = () => {
  const [divs, setDivs] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const getRandomPosition = (): Position => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const divWidth = 100;
      const divHeight = 100;

      let randomX: number;
      let randomY: number;
      let isColliding: boolean;

      do {
        randomX = Math.random() * (screenWidth - divWidth);
        randomY = Math.random() * (screenHeight - divHeight);
        isColliding = false;

        divs.forEach((div) => {
          const rect1: Position = { left: randomX, top: randomY, width: divWidth, height: divHeight };
          const rect2 = div.props.style as React.CSSProperties;

          if (isCollidingRect(rect1, rect2)) {
            isColliding = true;
          }
        });
      } while (isColliding);

      return {
        left: randomX,
        top: randomY,
        width: divWidth,
        height: divHeight,
      };
    };

    const isCollidingRect = (rect1: Position, rect2: React.CSSProperties): boolean => {
      return (
        rect1.left < (rect2.left as number) + (rect2.width as number) &&
        (rect1.left as number) + (rect1.width as number) > (rect2.left as number) &&
        rect1.top < (rect2.top as number) + (rect2.height as number) &&
        (rect1.top as number) + (rect1.height as number) > (rect2.top as number)
      );
    };

    const scatteredDivs: JSX.Element[] = Array.from({ length: 10 }, (_, index) => {
      const position = getRandomPosition();
      return <YourDivComponent key={index} style={{ left: `${position.left}px`, top: `${position.top}px` }} />;
    });

    setDivs(scatteredDivs);
  }, []);

  return <div>{divs}</div>;
};

export default ScatterDivs;
