import confetti from 'canvas-confetti';

export function fireHighFiveConfetti(originX = 0.5, originY = 0.5) {
  // Vibrant mascot brand palette confetti
  const colors = ['#4d41df', '#675df9', '#abbffe', '#ffe083', '#ff8484', '#60e0ba'];

  confetti({
    particleCount: 50,
    spread: 60,
    origin: { x: originX, y: originY },
    colors,
    ticks: 200,
    gravity: 1.2,
    scalar: 1.1,
  });

  // Secondary delayed burst for fireworks effect
  setTimeout(() => {
    confetti({
      particleCount: 30,
      angle: 60,
      spread: 55,
      origin: { x: Math.max(0.1, originX - 0.1), y: originY },
      colors,
    });
    confetti({
      particleCount: 30,
      angle: 120,
      spread: 55,
      origin: { x: Math.min(0.9, originX + 0.1), y: originY },
      colors,
    });
  }, 100);
}
