const numberSuffixes = ['', ' k', ' M', ' B'];

export function round(n, precision = 1) {
    let res, i;

    for (i = numberSuffixes.length - 1; i >= 0; i--) {
        res = n / 10 ** (3 * i);
        if (res >= 1) break;
    }

    res = new Intl.NumberFormat('en-US', {
        style: 'decimal',
        maximumFractionDigits: precision
    }).format(res);

    return `${res}${numberSuffixes[i] || ''}`;
}
