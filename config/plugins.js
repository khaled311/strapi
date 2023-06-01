module.exports = ({ env }) => ({
  plugins: {
    "users-permissions": {
      jwtSecret: crypto.randomBytes(16).toString("base64"),
    },
  },
});
