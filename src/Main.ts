import axios from 'axios'; 

const headers = {
    'authority': 'search.htv-services.com',
    'accept': 'application/json, text/plain, */*',
    'content-type': 'application/json;charset=UTF-8'
};

export const search = async (search_text: string, tags?: string[], order_by?: string, ordering?: string, page?: number) => {

        const body = {
            "search_text": search_text,
            "tags": tags || [],
            "tags_mode":"AND",
            "brands": [],
            "blacklist": [],
            "order_by": order_by ||"created_at_unix",
            "ordering": ordering || "desc",
            "page": page || 0
            }

        const result = (await axios.post('https://search.htv-services.com/', body, { headers: headers }))

        return result.status === 200 ? result.data : result.statusText 
    }