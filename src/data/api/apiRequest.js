import axios from "axios";

const BASE_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en'

export const dictionary= axios.create({
    baseURL:BASE_URL
})


