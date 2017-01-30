// Karma configuration
// Generated on Mon Jan 30 2017 15:22:39 GMT-0200 (BRST)

module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
            files: [
            'bower_components/angular/angular.min.js',
            {
                pattern: 'dev/**/*.js',
                include: true
            },
            'bower_components/angular-mocks/angular-mocks.js',
            'test/**/*.spec.js'
        ],
        exclude: [],
        preprocessors: {
            'dev/**/*.js': ['coverage']
        },
        reporters: ['progress', 'coverage'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        customLaunchers: {
            'chrome': {
                base: 'Chrome',
                flags: ['--disable-web-security']
            }
        },
        plugins: [
            'karma-chrome-launcher',
            'karma-coverage',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-phantomjs-launcher',
            'karma-*'
        ],
        hostname: '//168.192.0.1',
        singleRun: false,
        concurrency: Infinity,
        coverageReporter: {
            instrumenterOptions: {
                istanbul: {
                    noCompact: true
                }
            },
            dir: './reports/coverage/',
            reporters: [
                {
                    type: 'html', 
                    subdir: 'report-html', 
                    file: 'sumary.html'
                }
            ]
        }


    })
}
