import axios from 'axios'

export const BASE_URL = 'http://localhost:5117/';

export const ENDPOINTS = {
    workingtime: 'workingtime',
}

export const createAPIEndpoint = endpoint => {

    let url = BASE_URL + 'api/' + endpoint + '/';
    return {
        fetch: () => axios.get(url),
        fetchById: id => axios.get(url + id),
        post: newTimeRecord => axios.post(url, newTimeRecord),
        put: (id, updateTimeRecord) => axios.put(url + id, updateTimeRecord),
        delete: id => axios.delete(url + id),
    }
}