import {
  setupFailOnConsole,
  setupReactTestingLibrary,
  setupResizeObserver,
  setupTranslations,
} from '@trackunit/react-test-setup';

setupFailOnConsole();
setupReactTestingLibrary();
setupTranslations();
setupResizeObserver();

(global as any).fetch = require('jest-fetch-mock');
(window as any).URL.createObjectURL = jest.fn();
