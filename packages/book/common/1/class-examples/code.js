export const php = `
class {{hl:Feed}}(orange c1-b1-1) { 
    {{hl:setOfPosts}}(light-sky-blue c1-b1-2) []Post
}
\xa0
---
class {{hl:Post}}(green c1-b1-3) {
    {{hl:user}}(wheat c1-b1-4) User
    {{hl:time}}(green-yellow c1-b1-9) Time
    {{hl:image}}(aquamarine c1-b1-5) Image
    {{hl:setOfImages}}(aquamarine c1-b1-5) []Image
    {{hl:video}}(aquamarine c1-b1-5) Video
    {{hl:setOfLikes}}(steel-blue c1-b1-8) []Like
    {{hl:caption}}(grey c1-b1-6) Text
    {{hl:setOfComments}}(plum c1-b1-7) []Comment
}
\xa0
---
class {{hl:Image}}(aquamarine c1-b1-10) {
    {{hl:imageLink}}(red c1-b1-11) Text
    {{hl:setOfTags}}(blue c1-b1-12) []Tag
}
\xa0
---
class {{hl:User}}(wheat c1-b1-13) {
    {{hl:username}}(turquoise c1-b1-14) Text
    {{hl:latestStoryImage}}(sandy-brown c1-b1-15) Image
    {{hl:imageLink}}(powder-blue c1-b1-16) Text
}`.split('---');

export const python = `
class {{hl:Feed}}(orange c1-b1-1):
    def __init__(self):
        {{hl:self.posts}}(light-sky-blue c1-b1-2) = []
\xa0
---
class {{hl:Post}}(green c1-b1-3):
    def __init__(self, user, image=None, video=None, images=[], caption="", likes=[]):
        {{hl:self.user}}(wheat c1-b1-4) = user
        {{hl:self.time}}(green-yellow c1-b1-9) = Time()
        {{hl:self.image}}(aquamarine c1-b1-5) = image
        {{hl:self.images}}(aquamarine c1-b1-5) = []
        {{hl:self.video}}(aquamarine c1-b1-5) = video
        {{hl:self.likes}}(steel-blue c1-b1-8) = []
        {{hl:self.caption}}(grey c1-b1-6) = caption
        {{hl:self.comments}}(plum c1-b1-7) = []
\xa0
---
class {{hl:Image}}(aquamarine c1-b1-10):
    def __init__(self, url)
        {{hl:self.url}}(red c1-b1-11) = url
        {{hl:self.tag}}(blue c1-b1-12) = [] // Tag()
\xa0
---
class {{hl:User}}(wheat c1-b1-13):
    def __init__(self, url)
        {{hl:self.username}}(turquoise c1-b1-14) = username
        {{hl:self.picture_url}}(powder-blue c1-b1-16)= picture_url
`.split('---');

export const ruby = `
class {{hl:Feed}}(orange c1-b1-1)
    def initialize(posts)
        {{hl:@posts}}(light-sky-blue c1-b1-2) = posts
    end
end
\xa0
---
class {{hl:Post}}(green c1-b1-3)
    def initialize(user, time, image, images, video, likes, caption, comments)
        {{hl:@user}}(wheat c1-b1-4) = user
        {{hl:@time}}(green-yellow c1-b1-9) = time
        {{hl:@image}}(aquamarine c1-b1-5) = image
        {{hl:@images}}(aquamarine c1-b1-5) = images
        {{hl:@video}}(aquamarine c1-b1-5) = video
        {{hl:@likes}}(steel-blue c1-b1-8) = likes
        {{hl:@caption}}(grey c1-b1-6) = caption
        {{hl:@comments}}(plum c1-b1-7) = comments
    end
end
\xa0
---
class {{hl:Image}}(aquamarine c1-b1-10)
    def initialize(url, tags)
        {{hl:@url}}(red c1-b1-11) = url
        {{hl:@tags}}(blue c1-b1-12) = tags
       end
end
\xa0
---
class {{hl:User}}(wheat c1-b1-13)
    def initialize(username, picture_url)
        {{hl:@username}}(turquoise c1-b1-14) = username
        {{hl:@picture_url}}(powder-blue c1-b1-16) = url
    end
end
`.split('---');
