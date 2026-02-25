const nxPreset = require('@nx/jest/preset').default;
const irisPreset = require('@trackunit/react-test-setup/preset').default;
module.exports = {
  ...nxPreset,
  ...irisPreset,
};
