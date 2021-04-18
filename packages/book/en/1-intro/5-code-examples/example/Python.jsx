import React from 'react';
import Code from './Code';

const code = `
class [[Feed]](orange c1-b1-1):
    def __init__(self):
        [[self.posts]](light-sky-blue c1-b1-2) = []

class [[Post]](green c1-b1-3):
    def __init__(self, user, image=None, video=None, images=[], caption="", likes=[]):
        [[self.user]](wheat c1-b1-4) = user
        [[self.time]](green-yellow c1-b1-9) = Time()
        [[self.image]](aquamarine c1-b1-5) = image
        [[self.images]](aquamarine c1-b1-5) = []
        [[self.video]](aquamarine c1-b1-5) = video
        [[self.likes]](steel-blue c1-b1-8) = []
        [[self.caption]](grey c1-b1-6) = caption
        [[self.comments]](green-yellow c1-b1-7) = []


class [[Image]](aquamarine c1-b1-10):
    def __init__(self, url)
        [[self.url]](aquamarine c1-b1-10) = url
        [[self.tag]](aquamarine c1-b1-10) = [] // Tag()

class [[User]](wheat c1-b1-11):
    def __init__(self, url)
        [[self.username]](wheat c1-b1-11) = username
        [[self.picture_url]](wheat c1-b1-11)= picture_url
`;

const Python = () => <Code value={code} />;

export default Python;
