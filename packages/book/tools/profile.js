// Absent group means that user has bought automated course.
// In this case all the chapters are available by default.
const over9000 = 9001;

export const parseProfile = data => ({
    ...data,
    group: {
        ...(data.group || {}),
        last_chapter_number: data.group?.last_chapter_number || over9000
    }
});
