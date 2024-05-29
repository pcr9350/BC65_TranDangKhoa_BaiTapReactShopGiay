import axios from "axios";
import { httpStore } from "../../../util/config";

export class UserApi {
    async getAll() {
        const res = await httpStore.get('/api/users/getall');
        // console.log(res.data.content)
        return res.data.content;
    }

    // {
    //     "email": "string",
    //     "password": "string",
    //     "name": "string",
    //     "gender": true,
    //     "phone": "string"
    //   }
    async addUser(newUser) {
        const res = await httpStore.post('/api/users/signup', newUser);
        return res.data.content;

    }

    async getAllPaging(params) {

        let [queryKey,pageIndex] = params.queryKey;
        let pageSize = 10;
        const res = await httpStore.get(`/api/Users/paging?pageIndex=${pageIndex}&pageSize=${pageSize}`);
        // console.log(res.data.content)
        return res.data.content;
    }

    // Phần nầy xài mockapi
    // Lấy products
    async getAllMockApi() {
        try {
            const response = await axios.get('https://apistore.cybersoft.edu.vn/api/Product');
            // const response = await axios({
            //     url: "https://65fc26b814650eb2100ba7a8.mockapi.io/Products",
            //     method: 'GET',
            // });
            // console.log(response.data.content)
            return response.data.content;
          } catch (error) {
            console.error('Error fetching data:', error);
            // Handle the error appropriately (e.g., throw an error, display a message to the user)
          }
    }
    
}

export const userApi = new UserApi();