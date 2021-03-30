import * as hanime from 'hanime-extractor'

(async() => {
     // text: string, tags: string[], order_by: string, orderding desc || asc
    const s = await hanime.search('hajimete', ['loli'], 'likes', 'asc', 0)
    console.log(s)
})()
