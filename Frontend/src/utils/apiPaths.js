export const BASE_URL = "http://localhost:3000/api/v1";

export const API_PATHS = {
    AUTH: {
        REGISTER: "/auth/register",
        LOGIN: "/auth/login",
        SIGNUP: "/auth/register"
    },

    SESSION: {
        CREATE: "/session/create",
        GET_ALL: "/session/my-sessions",
        GET_PUBLISHED: "/session/published",
        TOGGLE:"/session/toggle-status",
        GET_ONE: (id) => `/session/${id}`,
        DELETE: (id) => `/session/${id}`
    },
};