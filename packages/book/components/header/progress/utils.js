/*
 * The outer radius is 32, stroke width is 6, so path (circle) radius is (32-6/2) = 29
 * */
export const R = 32,
    s = 6,
    r = R - s / 2,
    total = 100,
    max = (359.999 * Math.PI) / 180;

export const calcPath = value => {
    if (value === 0) return undefined;

    const angle = Math.min((2 * Math.PI * value) / total, max),
        x = R + r * Math.sin(angle),
        y = R - r * Math.cos(angle);

    return `M${R},${s / 2}A${r},${r},0,${value > total / 2 ? 1 : 0},1,${x},${y}`;
};
