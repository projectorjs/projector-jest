// @flow
'use strict';

const jestCli = require('jest-cli');

/*::
// Documentation: https://facebook.github.io/jest/

export type JestOptions = {
  // Automock all files by default.
  automock?: boolean,
  // Exit the test suite immediately upon the first failing test
  bail?: boolean,
  // Respect the "browser" field in package.json when resolving modules. Some
  // packages export different versions based on whether they are operating in
  // node.js or a browser.
  browser?: boolean,
  // Whether to use the transform cache. Disable the cache using --no-cache.
  cache?: boolean,
  // The directory where Jest should store its cached dependency information.
  cacheDirectory?: string,
  // Whether to run Jest in continuous integration (CI) mode. This option is on
  // by default in most popular CI environments. It will prevent snapshots from
  // being written unless explicitly requested.
  ci?: boolean,
  // Automatically clear mock calls and instances between every test.
  // Equivalent to calling jest.clearAllMocks() between each test.
  clearMocks?: boolean,
  // Alias for --coverage.
  collectCoverage?: boolean,
  // relative to <rootDir> glob pattern matching the files that coverage info
  // needs to be collected from.
  collectCoverageFrom?: string,
  // Explicit list of paths coverage will be restricted to.
  collectCoverageOnlyFrom?: Array<string>,
  // Forces test results output color highlighting (even if stdout is not a
  // TTY). Set to false if you would like to have no colors.
  color?: boolean,
  // Alias for `--color`.
  colors?: boolean,
  // The path to a jest config file specifying how to find and execute tests.
  // If no rootDir is set in the config, the current directory is assumed to be
  // the rootDir for the project. This can also be a JSON encoded value which
  // Jest will use as configuration.
  config?: string,
  // Indicates that test coverage information should be collected and reported
  // in the output.
  coverage?: boolean,
  // The directory where Jest should output its coverage files.
  coverageDirectory?: string,
  // An array of regexp pattern strings that are matched against all file paths
  // before executing the test. If the file pathmatches any of the patterns,
  // coverage information will be skipped.
  coveragePathIgnorePatterns?: Array<string>,
  // A list of reporter names that Jest uses when writing coverage reports. Any
  // istanbul reporter can be used.
  coverageReporters?: Array<string>,
  // A JSON string with which will be used to configure minimum threshold
  // enforcement for coverage results
  coverageThreshold?: string,
  // Print debugging info about your jest config.
  debug?: boolean,
  // The test environment used for all tests. This can point to any file or
  // node module. Examples: `jsdom`, `node` or `path/to/my-environment.js`
  env?: 'jsdom' | 'node' | string,
  // Use this flag to show full diffs instead of a patch.
  expand?: boolean,
  // Find related tests for a list of source files that were passed in as
  // arguments. Useful for pre-commit hook integration to run the minimal
  // amount of tests necessary.
  findRelatedTests?: boolean,
  // Force Jest to exit after all tests have completed running. This is useful
  // when resources set up by test code cannot be adequately cleaned up.
  forceExit?: boolean,
  // A JSON string with map of global variables that need to be available in
  // all test environments.
  globals?: string,
  // A JSON string with map of variables for the haste module system
  haste?: string,
  // Prints the test results in JSON. This mode will send all other test output
  // and user messages to stderr.
  json?: boolean,
  // Will run all tests affected by file changes in the last commit made.
  lastCommit?: boolean,
  // Lists all tests Jest will run given the arguments and exits. Most useful
  // in a CI system together with `--findRelatedTests` to determine the tests
  // Jest will run based on specific files
  listTests?: boolean,
  // Logs the heap usage after every test. Useful to debug memory leaks. Use\
  // together with `--runInBand` and `--expose-gc` in node.
  logHeapUsage?: boolean,
  // Maps code coverage reports against original source code when transformers
  // supply source maps.
  mapCoverage?: boolean,
  // Specifies the maximum number of workers the worker-pool will spawn for
  // running tests. This defaults to the number of the cores available on your
  // machine. (its usually best not to override this default)
  maxWorkers?: number,
  // An array of directory names to be searched recursively up from the
  // requiring module's location.
  moduleDirectories?: Array<string>,
  // An array of file extensions your modules use. If you require modules
  // without specifying a file extension, these are the extensions Jest will
  // look for.
  moduleFileExtensions?: Array<string>,
  // A JSON string with a map from regular expressions to module names that
  // allow to stub out resources, like images or styles with a single module
  moduleNameMapper?: string,
  // An array of regexp pattern strings that are matched against all module
  // paths before those paths are to be considered "visible" to the module
  // loader.
  modulePathIgnorePatterns?: Array<string>,
  // An alternative API to setting the NODE_PATH env variable, modulePaths is
  // an array of absolute paths to additional locations to search when
  // resolving modules.
  modulePaths?: Array<string>,
  // Disables stack trace in test results output
  noStackTrace?: boolean,
  // Activates notifications for test results.
  notify?: boolean,
  // Attempts to identify which tests to run based on which files have changed
  // in the current repository. Only works if you're running tests in a git
  // repository at the moment.
  onlyChanged?: boolean,
  // Write test results to a file when the --json option is also specified.
  outputFile?: string,
  // A preset that is used as a base for Jest's configuration.
  preset?: string,
  // A list of projects that use Jest to run all tests of all projects in a
  // single instance of Jest.
  projects?: Array<string>,
  // A list of custom reporters for the test suite.
  reporters?: Array<string>,
  // Automatically reset mock state between every test. Equivalent to calling
  // jest.resetAllMocks() between each test.
  resetMocks?: boolean,
  // If enabled, the module registry for every test file will be reset before
  // running each individual test.
  resetModules?: boolean,
  // A JSON string which allows the use of a custom resolver.
  resolver?: string,
  // The root directory that Jest should scan for tests and modules within.
  rootDir?: string,
  // A list of paths to directories that Jest should use to search for files
  // in.
  roots?: Array<string>,
  // Run all tests serially in the current process (rather than creating a
  // worker pool of child processes that run tests). This is sometimes useful
  // for debugging, but such use cases are pretty rare.
  runInBand?: boolean,
  // The paths to modules that run some code to configure or set up the testing
  // environment before each test.
  setupFiles?: Array<string>,
  // The path to a module that runs some code to configure or set up the
  // testing framework before each test.
  setupTestFrameworkScriptFile?: string,
  // Print your jest config and then exits.
  showConfig?: boolean,
  // Prevent tests from printing messages through the console.
  silent?: boolean,
  // A list of paths to snapshot serializer modules Jest should use for
  // snapshot testing.
  snapshotSerializers?: Array<string>,
  // Alias for --env
  testEnvironment?: string,
  // The glob patterns Jest uses to detect test files.
  testMatch?: Array<string>,
  // Run only tests with a name that matches the regex pattern.
  testNamePattern?: string,
  // An array of regexp pattern strings that are matched against all test paths
  // before executing the test. If the test path matches any of the patterns,
  // it will be skipped.
  testPathIgnorePatterns?: Array<string>,
  // A regexp pattern string that is matched against all tests paths before
  // executing the test.
  testPathPattern?: string,
  // The regexp pattern Jest uses to detect test files.
  testRegex?: string,
  // Allows the use of a custom results processor. This processor must be a
  // node module that exports a function expecting as the first argument the
  // result object
  testResultsProcessor?: string,
  // Allows to specify a custom test runner. The default is  `jasmine2`. A path
  // to a custom test runner can be provided:
  // `<rootDir>/path/to/testRunner.js`.
  testRunner?: string,
  // This option sets the URL for the jsdom environment.
  testURL?: string,
  // Setting this value to fake allows the use of fake timers for functions
  // such as setTimeout.
  timers?: string,
  // A JSON string which maps from regular expressions to paths to
  // transformers.
  transform?: string,
  // An array of regexp pattern strings that are matched against all source
  // file paths before transformation.
  transformIgnorePatterns?: Array<string>,
  // An array of regexp pattern strings that are matched against all modules
  // before the module loader will automatically return a mock for them.
  unmockedModulePathPatterns?: Array<string>,
  // Use this flag to re-record snapshots. Can be used together with a test
  // suite pattern or with `--testNamePattern` to re-record snapshot for test
  // matching the pattern
  updateSnapshot?: boolean,
  // Divert all output to stderr.
  useStderr?: boolean,
  // Display individual test results with the test suite hierarchy.
  verbose?: boolean,
  // Print the version and exit
  version?: boolean,
  // Watch files for changes and rerun tests related to changed files. If you
  // want to re-run all tests when a file has changed, use the `--watchAll`
  // option.
  watch?: boolean,
  // Watch files for changes and rerun all tests. If you want to re-run only
  // the tests related to the changed files, use the `--watch` option.
  watchAll?: boolean,
  // Whether to use watchman for file crawling.
  watchman?: boolean,
};

type Position = {
  line: number,
  column: number,
};

type Range = {
  start: Position,
  end: Position,
};

export type JestResult = {
  numFailedTestSuites: number,
  numFailedTests: number,
  numPassedTestSuites: number,
  numPassedTests: number,
  numPendingTestSuites: number,
  numPendingTests: number,
  numRuntimeErrorTestSuites: number,
  numTotalTestSuites: number,
  numTotalTests: number,
  snapshot: {
    added: number,
    didUpdate: false,
    failure: false,
    filesAdded: number,
    filesRemoved: number,
    filesUnmatched: number,
    filesUpdated: number,
    matched: number,
    total: number,
    unchecked: number,
    unmatched: number,
    updated: number,
  },
  startTime: number,
  success: true,
  testResults: Array<{
    console: null,
    failureMessage: string | null,
    numFailingTests: number,
    numPassingTests: number,
    numPendingTests: number,
    perfStats: {
      end: number,
      start: number,
    },
    snapshot: {
      added: number,
      fileDeleted: false,
      matched: number,
      unchecked: number,
      unmatched: number,
      updated: number,
    },
    testFilePath: string,
    testResults: Array<{
      ancestorTitles: Array<any>,
      duration: number,
      failureMessages: Array<string>,
      fullName: string,
      numPassingAsserts: number,
      status: string,
      title: string,
    }>,
    coverage: void,
    sourceMaps: {},
    skipped: boolean,
  }>,
  wasInterrupted: boolean,
  coverageMap?: {
    data: {
      [key: string]: {
        data: {
          path: string,
          statementMap: {
            [key: string]: Range,
          },
          fnMap: {
            [key: string]: {
              name: string,
              decl: Range,
              loc: Range,
              line: number,
            },
          },
          branchMap: {
            [key: string]: {
              loc: Range,
              type: string,
              locations: [Range, Range],
              line: number,
            },
          },
          s: { [key: string]: number },
          f: { [key: string]: number },
          b: { [key: string]: [number, number] },
          _coverageSchema: string,
          hash: string,
        },
      },
    },
  },
};
*/

exports.test = (opts /*: JestOptions */ = {}) => {
  opts = Object.assign({
    rootDir: process.cwd()
  }, opts);
  return new Promise((resolve, reject) => {
    jestCli.runCLI(opts, [opts.rootDir], (result /*: JestResult */) => {
      if (result.numFailedTests || result.numFailedTestSuites) {
        let err /*: any */ = new Error('Tests failed');
        Object.assign(err, result);
        reject((err /*: Error & JestResult */));
      } else {
        resolve(result);
      }
    });
  });
};
