import BasePage from './basePage'
import {
	userPageTitle
} from '../pageobjects/userPage'

class UserPage extends BasePage {
	

	async landinPageTitle() {
		return await this.isElementVisible(userPageTitle, "Text not visible")
	}

}
export default UserPage