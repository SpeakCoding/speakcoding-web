export const php = `
class [[Feed]](orange c1-b1-1) { 
    [[setOfPosts]](light-sky-blue c1-b1-2) []Post
}
\xa0
---
class [[Post]](green c1-b1-3) {
    [[user]](wheat c1-b1-4) User
    [[time]](green-yellow c1-b1-9) Time
    [[image]](aquamarine c1-b1-5) Image
    [[setOfImages]](aquamarine c1-b1-5) []Image
    [[video]](aquamarine c1-b1-5) Video
    [[setOfLikes]](steel-blue c1-b1-8) []Like
    [[caption]](grey c1-b1-6) Text
    [[setOfComments]](plum c1-b1-7) []Comment
}
\xa0
---
class [[Image]](aquamarine c1-b1-10) {
    [[imageLink]](red c1-b1-11) Text
    [[setOfTags]](blue c1-b1-12) []Tag
}
\xa0
---
class [[User]](wheat c1-b1-13) {
    [[username]](turquoise c1-b1-14) Text
    [[latestStoryImage]](sandy-brown c1-b1-15) Image
    [[imageLink]](powder-blue c1-b1-16) Text
}`.split('---');

export const python = `
class [[Feed]](orange c1-b1-1):
    def __init__(self):
        [[self.posts]](light-sky-blue c1-b1-2) = []
\xa0
---
class [[Post]](green c1-b1-3):
    def __init__(self, user, image=None, video=None, images=[], caption="", likes=[]):
        [[self.user]](wheat c1-b1-4) = user
        [[self.time]](green-yellow c1-b1-9) = Time()
        [[self.image]](aquamarine c1-b1-5) = image
        [[self.images]](aquamarine c1-b1-5) = []
        [[self.video]](aquamarine c1-b1-5) = video
        [[self.likes]](steel-blue c1-b1-8) = []
        [[self.caption]](grey c1-b1-6) = caption
        [[self.comments]](plum c1-b1-7) = []
\xa0
---
class [[Image]](aquamarine c1-b1-10):
    def __init__(self, url)
        [[self.url]](red c1-b1-11) = url
        [[self.tag]](blue c1-b1-12) = [] // Tag()
\xa0
---
class [[User]](wheat c1-b1-13):
    def __init__(self, url)
        [[self.username]](turquoise c1-b1-14) = username
        [[self.picture_url]](powder-blue c1-b1-16)= picture_url
`.split('---');

export const ruby = `
class [[Feed]](orange c1-b1-1)
    def initialize(posts)
        [[@posts]](light-sky-blue c1-b1-2) = posts
    end
end
\xa0
---
class [[Post]](green c1-b1-3)
    def initialize(user, time, image, images, video, likes, caption, comments)
        [[@user]](wheat c1-b1-4) = user
        [[@time]](green-yellow c1-b1-9) = time
        [[@image]](aquamarine c1-b1-5) = image
        [[@images]](aquamarine c1-b1-5) = images
        [[@video]](aquamarine c1-b1-5) = video
        [[@likes]](steel-blue c1-b1-8) = likes
        [[@caption]](grey c1-b1-6) = caption
        [[@comments]](plum c1-b1-7) = comments
    end
end
\xa0
---
class [[Image]](aquamarine c1-b1-10)
    def initialize(url, tags)
        [[@url]](red c1-b1-11) = url
        [[@tags]](blue c1-b1-12) = tags
       end
end
\xa0
---
class [[User]](wheat c1-b1-13)
    def initialize(username, picture_url)
        [[@username]](turquoise c1-b1-14) = username
        [[@picture_url]](powder-blue c1-b1-16) = url
    end
end
`.split('---');
