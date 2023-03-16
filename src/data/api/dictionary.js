import axios from "axios";

const BASE_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en'

const data= axios.create({
    baseURL:BASE_URL
})

export const wordDetail = data.get('house')
