module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook:
        "https://api.vercel.com/v1/integrations/deploy/prj_PVapGqj3xtxNaxkFciMlfs5JqfMR/KA5Gb9OSUY",
      apiToken: "cVpjgH5U7exFgyLZkrtQuqhp",
      appFilter: "strapi",
      teamFilter: "team_Blgg6GU6fnoeslxqKDD6SecR",
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
});
