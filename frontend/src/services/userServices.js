import api from '../api/api';

const userServices = {
    getUsers: async () => {
        const response = await api.get("/users");
        return response.data;
    },
    createUser: async ({ name, email }) => {
        const response = await api.post("/users",{
            name,
            email,
        });
        return response;
    },
};

export default userServices;