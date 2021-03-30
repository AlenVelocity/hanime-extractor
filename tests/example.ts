import * as hanime from 'hanime-extractor'

(async() => {
    // get search results
    const output = await hanime.search('hajimete', ['loli'], 'likes', 'asc', 0) 
    console.log(output)

    // get video info using slug gotten from above step
    const videoInfo = await hanime.getVideoMedia('hajimete-no-orusuban-2')
    console.log(videoInfo)

    // download video using results from above steps
    // can also be used to download same filetype videos from other sources than hanime
    const file = await hanime.downloadVideo(videoInfo[1].url, './video/')
    console.log(file)
})()
