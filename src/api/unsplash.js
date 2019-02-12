import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
      Authorization:
        "Client-ID dadb2fbad126de34b257663f7d2534e456ff82328d7b7d05be9c40b400dd7899"
    }
})