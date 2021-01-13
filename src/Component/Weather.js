import axios from 'axios';

const KEY = `850ee855ff939fea8f88736ee056e1fb`;

export default axios.create({
    baseURL:'http://api.openweathermap.org/data/2.5',
    params:{
        APPID:KEY,
    }
});