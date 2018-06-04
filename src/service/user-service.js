import Axios from 'axios';
import { API_BASE_URL } from 'service/api.js';

class User {
    // 用户登录
    login(loginInfo) {
        return Axios.post(`${API_BASE_URL}/manage/user/login.do`, loginInfo)
    }
        
}

const user = new User()
export default user;