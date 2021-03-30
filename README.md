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
    const output = await hanime.search('hajimete', ['loli'], 'likes', 'asc', 0)
    console.log(output)
})()
```

## Arguments. Ones with question mark can be undefined.
```TS 
 // 1. text: string, 2. tags?: string[], 3. order_by?: string, 4. orderding?: desc || asc, 5. page?: number 
```
