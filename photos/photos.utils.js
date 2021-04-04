export const processHashtags = (capton) => {
    const hashtag =capton.match(/#[\w]+/g)|| [];
    return hashtag.map((hashtag)=>({
        where: {hashtag},
        create: {hashtag},
    }));
};