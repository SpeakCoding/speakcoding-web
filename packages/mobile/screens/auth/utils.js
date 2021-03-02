export function parseError(error) {
    if (!error) return null;

    if (error.detail === "doesn't match email")
        return {
            type: 'match',
            email: true,
            password: true
        };

    if (error.detail === 'has already been taken')
        return {
            type: 'taken',
            email: true
        };

    return {
        type: 'unknown'
    };
}
