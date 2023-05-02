import api from '../api/api';

const userServices = {
    getUsers: async () => {
        const response = await api.get("/users");
        return response.data;
    },
};

export default userServices;