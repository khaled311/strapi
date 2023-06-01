module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: [
      "CYvEQx7Oj1hUeLSe3KlIyA==",
      "tRxZvISpqSDtPLpudbDtYw==",
      "jSHprEFk2SRTimaHvjR0ow==",
      "EupWlZemakCZ8hP2fpsTKg==",
    ],
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});
