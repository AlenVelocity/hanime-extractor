<div align="center">
<img src="https://i.ytimg.com/vi/tLFNMt7kv-M/maxresdefault.jpg" alt="Hanime logo" width="500"/>

# _**HANIME-SCRAPER**_

> This is unofficial scraper for [https://hanime.tv/](https://hanime.tv/)
</div>
<br>

# Install
```cmd
> npm i hanime-extractor
```

# How-to

### Typescript
```TS 
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
```

## Arguments
```TS 
 // 1. text: string, 2. tags?: string[], 3. order_by?: string, 4. orderding?: desc || asc, 5. page?: number 
 // 1. slug: string
 // 1. url: string, 2. path: string
```