import LoginPage from "./pageObjects/login/login.page"
import Utils from "./utils/utils"
import { assert } from "chai"

export const loginPage = new LoginPage()
export const utils = new Utils()
export const assertJs = assert
