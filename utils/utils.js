import allureReporter from "@wdio/allure-reporter"

export default class Utils {

    /**
     * Método responsável para add as informações do relatório allure
     * @param {String} feature - 
     * @param {Array} severity - 
     * @param {Number} testCaseCode - 
     */
    async addTagsAllureReports(feature, severity, testCaseCode) {
        allureReporter.addFeature(feature)
        allureReporter.addSeverity(severity)
        allureReporter.addTestId(`https://example.org/issue/${testCaseCode}`)
    }
}