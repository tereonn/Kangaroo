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
  seasonData: {
    get: {
      summary: `Get list of created seasons.`,
      desc: `Return the array of created seasond with related stages.`,
    },
    post: {
      summary: `Create season.`,
      desc: `Create new season.`,
    },
    delete: {
      summary: `Delete season.`,
      desc: `Delete season if there aren't any starded related stages.`,
    },
    put: {
      summary: `Update season.`,
      desc: `Change season if there aren't any started related stages.`,
    },

    stage: {
      // TODO: add docs
      post: {
        summary: ``,
        desc: ``,
      },
      delete: {
        summary: ``,
        desc: ``,
      },
      put: {
        summary: ``,
        desc: ``,
      },
    },
  },
};
