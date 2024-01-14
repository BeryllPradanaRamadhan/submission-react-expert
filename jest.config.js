module.exports = {
  transformIgnorePatterns: [
    '/node_modules/(?!axios)', // Transform axios in node_modules, but not others
  ],
};
