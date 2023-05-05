// Prepare folder structure

const fs = require("fs-extra")

const dir = "./cypress/cucumber_report/html"

if (fs.existsSync(dir)) {
	fs.removeSync(dir)
}

fs.mkdirSync(dir)

// Report configuration

const reporter = require("cucumber-html-reporter")

const options = {
	theme: "bootstrap",
	jsonDir: "./cypress/cucumber_report",
	output: "./cypress/cucumber_report/html/cucumber_report.html",
	reportSuiteAsScenarios: true,
	scenarioTimestamp: true,
	launchReport: true,
	metadata: {},
}

// Generate report

reporter.generate(options)
