module.exports = {
  apps: [
    {
      name: "server-front-dev",
      script: "server.js",
      env_development: {
        NAME : "server-front-dev",
        NODE_ENV: "development",
        PORT: 4000,
        CORS: "*",
        API_URL: "http://18.220.215.25:9004/api/v1/",
        REACT_APP_AUTH_API_URL:'http://10.10.68.11:3000/',
        REACT_APP_API:'http://10.10.68.11:3000/'
      },
    }
  ],
};
