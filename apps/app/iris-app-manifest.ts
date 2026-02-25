import { IrisAppManifest } from '@trackunit/iris-app-api';
import contextTest from "@user-context-test/context-test";

// eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports
const nxPackageJson = require('../../package.json');
// eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports
const packageJson = require('./package.json');

const irisAppManifest: IrisAppManifest = {
  specVersion: '1.1',
  moduleFederationName: packageJson.name,
  dependencies: nxPackageJson.dependencies || {},
  devDependencies: nxPackageJson.devDependencies || {},

  installation: {
    accountIds: 'ALL_ACCOUNTS',
    pricingPlanPolicy: {
      ALL_PLANS: 'ON_DEMAND',
    },
  },

  marketplace: {
    showInMarketplace: false,
    name: 'app',
    description: 'The app app is used for <YOUR SUMMARY HERE>.',
    fullDescriptionPath: 'description.md',
    tags: [],
    categories: [],
  },
  extensions: [contextTest],
};

export default irisAppManifest;
