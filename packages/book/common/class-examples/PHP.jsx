import React from 'react';
import Code from './Code';

const code = `
class [[Feed]](orange c1-b1-1) { 
    [[setOfPosts]](light-sky-blue c1-b1-2) []Post
}

class [[Post]](green c1-b1-3) {
    [[user]](wheat c1-b1-4) User
    [[time]](green-yellow c1-b1-9) Time
    [[image]](aquamarine c1-b1-5) Image
    [[setOfImages]](aquamarine c1-b1-5) []Image
    [[video]](aquamarine c1-b1-5) Video
    [[setOfLikes]](steel-blue c1-b1-8) []Like
    [[caption]](grey c1-b1-6) Text
    [[setOfComments]](green-yellow c1-b1-7) []Comment
}

class [[Image]](aquamarine c1-b1-10) {
    [[imageLink]](aquamarine c1-b1-10) Text
    [[setOfTags]](aquamarine c1-b1-10) []Tag
}

class [[User]](wheat c1-b1-11) {
    [[username]](wheat c1-b1-11) Text
    [[imageLink]](wheat c1-b1-11) Text
    [[latestStoryImage]](wheat c1-b1-11) Image
}`;

const PHP = () => <Code value={code} />;

export default PHP;
