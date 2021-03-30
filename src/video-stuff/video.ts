import axios from 'axios'; 
import { execSync } from 'child_process'


const headers_video = {
    'authority': 'hw.hanime.tv',
    'accept': 'application/json, text/plain, */*',
    'origin': 'https://hanime.tv',
    'if-none-match': 'W/"a5e2787805920a8145ce33ab7c0fd947"'
};

export const getVideo = async(slug: string) => {
    const url = `https://hw.hanime.tv/api/v8/video?id=${slug}&`
    const result = (await axios.get(url, { headers: headers_video }))
    return result.status === 200 ? JSON.stringify(result.data) : result.statusText;
}

export const getVideoMedia = async(slug: string) => {
    const resp: any = await getVideo(slug)

    if (resp !instanceof Object)
        return resp

    const json = JSON.parse(resp)

    return json.videos_manifest.servers[0].streams;
}

export const downloadVideo = async(url: string, path: string) => {
    const filename = path + '/' + Math.random().toString(36).substring(7) + '.mp4'
    execSync(`dl ${url} ${filename}`, {})
    return filename;
}
