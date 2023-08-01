import styles from "./dotgrid.module.scss";

export const DotGrid = () => {
  const GRID_WIDTH = 25;
  const GRID_HEIGHT = 20;
  const TOTAL_DOTS = GRID_WIDTH * GRID_HEIGHT;

  const dots = [];
  let index = 0;

  const calculateColor = (index: any) => {
    // Define the start and end colors in RGB
    const startColor = [255, 105, 180]; // RGB for pink
    const endColor = [173, 216, 230]; // RGB for light blue

    // Calculate the ratio based on the current index and total dots
    const ratio = index / TOTAL_DOTS;

    // Interpolate the color
    const color = startColor.map((start, i) => 
      Math.round(start + ratio * (endColor[i] - start))
    );

    return `rgb(${color.join(',')})`;
  };

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      const color = calculateColor(index);
      dots.push(
        <div
          className={styles.dotWrapper}
          data-index={index}
          key={`${i}-${j}`}
        >
          <div 
            className={`${styles.dot} dot-point`} 
            data-index={index} 
            style={{ background: color }}
          />
        </div>
      );
      index++;
    }
  }

  return (
    <div
      style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
      className={styles.dotGrid}
    >
      {dots.map((dot) => dot)}
    </div>
  );
};
