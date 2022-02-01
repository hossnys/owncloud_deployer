import Axios from 'axios';

const ownCloudClient = Axios.create({
    baseURL: '/owncloud/api',
    withCredentials: true,
    headers: {
        "Accept": 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
})

export default {
    sendMails(email) {
        return ownCloudClient.post('/requests', { email: email })
    },
    getRequests() {
        return ownCloudClient.get('/requests')
    },
    getBalance() {
        return ownCloudClient.get('/balance')
    },
    exportData() {
        return ownCloudClient.get('/requests/export')
    },
    deploy(name) {
        return ownCloudClient.post('/deployment', [name])
    }
}