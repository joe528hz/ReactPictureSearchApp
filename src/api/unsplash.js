import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID KmZRWJnL0FytOPcV1zM6CnsoURtirvvY2-iuGLYeyiY'
    }
})