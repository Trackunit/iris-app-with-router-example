import { FleetExtensionManifest } from '@trackunit/iris-app-api';

const fleetExtensionManifest: FleetExtensionManifest = {
  id: 'context-test',
  type: 'FLEET_EXTENSION',
  sourceRoot: 'libs/context-test/src',

  menuItem: {
    name: 'context-test',
    icon: 'QuestionMarkCircle',
  },
};

export default fleetExtensionManifest;
