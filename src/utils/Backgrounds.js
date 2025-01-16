export const CustomGeometricaBackground = (isDarkMode) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="1920" height="1080">
      <!-- Background -->
      <rect fill="${
        isDarkMode ? "#1A1A1A" : "#F5F5F5"
      }" width="1920" height="1080" />

      <defs>
        <!-- Star definition -->
        <circle id="star" r=".5" fill="${isDarkMode ? "white" : "black"}" />
      </defs>
      
      <!-- Randomly distributed moving stars -->
      <g>
        ${Array.from({ length: 200 }) // Generate 200 stars
          .map(() => {
            const startX = Math.random() * 1920; // Random starting x position
            const startY = Math.random() * 1080; // Random starting y position
            const endX = startX + (Math.random() * 400 - 200); // Random x drift
            const endY = startY + (Math.random() * 400 - 200); // Random y drift
            const duration = (Math.random() * 10 + 5).toFixed(2); // Random movement duration
            const delay = (Math.random() * 5).toFixed(2); // Random delay for staggered animation

            return `
              <use href="#star" x="${startX}" y="${startY}">
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  from="0 0"
                  to="${endX - startX} ${endY - startY}"
                  dur="${duration}s"
                  repeatCount="indefinite"
                  begin="${delay}s"
                />
                <animate
                  attributeName="opacity"
                  values="1;0.5;1"
                  dur="2s"
                  repeatCount="indefinite"
                  begin="${delay}s"
                />
              </use>
            `;
          })
          .join("")}
      </g>
    </svg>
  `;

  const encoded = encodeURIComponent(svg);
  console.log("Generated SVG URL:", `data:image/svg+xml,${encoded}`); // Debugging
  return encoded;
};
