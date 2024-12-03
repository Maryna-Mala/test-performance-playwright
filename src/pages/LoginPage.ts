import { Page } from "@playwright/test";
import BasePage from "../base/BasePage.ts";

export default class LoginPage extends BasePage {
  public readonly inputEmailField = this.page.locator("#email");
  public readonly inputPasswordField = this.page.locator(
    '[name="login[password]"]',
  );
  public readonly logInButton = this.page.locator(
    "//button[contains(@class, 'primary')]",
  );

  constructor(page: Page) {
    super(page, "Login Page", "customer/account/login");
  }

  private async fillEmail(email: string): Promise<void> {
    await this.inputEmailField.fill(email);
  }

  private async fillPassword(password: string): Promise<void> {
    await this.inputPasswordField.fill(password);
  }

  private async clickOnLogInButton(): Promise<void> {
    await this.inputPasswordField.click();
  }
}
