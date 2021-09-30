export const parseProfile = data => ({
    ...data,
    group: {
        ...(data.group || {}),
        last_chapter_number: data.group?.last_chapter_number || 1
    }
});
