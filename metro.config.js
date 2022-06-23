const { getDefaultConfig } = require("expo/metro-config");
const withExpoComponentPreview = require("expo-component-preview/withExpoComponentPreview");

const projectRoot = __dirname;

const config = getDefaultConfig(projectRoot);

module.exports = withExpoComponentPreview(config);
