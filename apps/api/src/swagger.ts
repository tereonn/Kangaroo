export const DOC_DESCR = {
  auth: {
    get: {
      summary: `Authenticates a user with the provided credentials.`,
      desc: `If the login attempt fails due to invalid or missing credentials, the API will respond with a 401 Unauthorized status code.
      Clients should handle this response by requesting valid credentials from the user or directing them to the appropriate login page.`,
    },
    post: {
      summary: `Registers a new user account with the provided information.`,
      desc: `If the registration attempt fails due to invalid or incomplete data, the API will respond with a 401 Unauthorized status code.
      Clients should handle this response by requesting valid registration data from the user or directing them to the appropriate registration page.`,
    },
  },
};
