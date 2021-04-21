import React from 'react';
import Code from './Code';

const code = `
class [[Feed]](orange c1-b1-1)
    def initialize(posts)
        [[@posts]](light-sky-blue c1-b1-2) = posts
    end
end

class [[Post]](green c1-b1-3)
    def initialize(user, time, image, images, video, likes, caption, comments)
        [[@user]](wheat c1-b1-4) = user
        [[@time]](green-yellow c1-b1-9) = time
        [[@image]](aquamarine c1-b1-5) = image
        [[@images]](aquamarine c1-b1-5) = images
        [[@video]](aquamarine c1-b1-5) = video
        [[@likes]](steel-blue c1-b1-8) = likes
        [[@caption]](grey c1-b1-6) = caption
        [[@comments]](green-yellow c1-b1-7) = comments
    end
end

class [[Image]](aquamarine c1-b1-10)
    def initialize(url, tags)
        [[@url]](aquamarine c1-b1-10) = url
        [[@tags]](aquamarine c1-b1-10) = tags
       end
end

class [[User]](wheat c1-b1-11)
    def initialize(username, picture_url)
        [[@username]](wheat c1-b1-11) = username
        [[@picture_url]](wheat c1-b1-11) = url
       end
end`;

const Ruby = () => <Code value={code} />;

export default Ruby;
