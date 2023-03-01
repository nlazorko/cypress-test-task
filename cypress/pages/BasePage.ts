export class BasePage {
  readonly HOME_BUTTON_TEXT = 'Home';
  readonly PRACTICE_BUTTON_TEXT = 'Practice';
  readonly LOGIN_BUTTON_TEXT = 'Login';
  readonly SIGNUP_BUTTON_TEXT = 'Signup';
  readonly HEADER_TITLE_TEXT = 'Practice Page';
  readonly DROPDOWN_HEADER_TEXT = 'Dropdown Example';
  readonly SWITCH_TO_TAB_HEADER_TEXT = 'Switch Tab Example';
  readonly OPEN_IN_NEW_TAB_BUTTON_TEXT = 'OpenTab';
  readonly SWITCH_TO_ALERT_HEADER_TEXT = 'Switch To Alert Example';
  readonly SWITCH_TO_ALERT_INPUT_PLACEHOLDER = 'Enter Your Name';
  readonly SWITCH_TO_ALERT_BUTTON_TEXT = 'Alert';
  readonly SWITCH_TO_CONFIRM_BUTTON_TEXT = 'Confirm';
  readonly ELEMENT_DISPLAYED_HEADER_TEXT = 'Element Displayed Example';
  readonly HIDE_TEXTBOX_BUTTON_TEXT = 'Hide';
  readonly SHOW_TEXTBOX_BUTTON_TEXT = 'Show';
  readonly HIDE_SHOW_TEXTBOX_PLACEHOLDER_TEXT = 'Hide/Show Example';
  readonly MOUSE_HOVER_HEADER_TEXT = 'Mouse Hover Example';
  readonly MOUSE_HOVER_BUTTON_TEXT = 'Mouse Hover';
  readonly HOVER_CONTENT_SCROLL_TO_TOP_OPTION_TEXT = 'Top';
  readonly HOVER_CONTENT_RELOAD_OPTION_TEXT = 'Reload';
  readonly IFRAME_HEADER_TEXT = 'iFrame Example';

  readonly EG_LINK_URL = 'https://easygenerator.com/';
  readonly LOGO_SVG_PATH = 'http://www.w3.org/2000/svg';

  logo() {
    return cy.get('.logo');
  }

  homeButton() {
    return cy.get('.home');
  }

  practiceButton() {
    return cy.get('.practice');
  }

  loginButton() {
    return cy.get('.login');
  }

  signUpButton() {
    return cy.get('.signup');
  }

  headerTitle() {
    return cy.get('.title');
  }

  dropdownHeader() {
    return cy.get('.dropdown-example');
  }

  dropdown() {
    return cy.get('#dropdown-class-example');
  }

  switchToTabHeader() {
    return cy.get('.switch-tab');
  }

  openInNewTabButton() {
    return cy.get('#opentab');
  }

  switchToAlertHeader() {
    return cy.get('.switch-alert');
  }

  switchToAlertInput() {
    return cy.get('#name');
  }

  switchToAlertButton() {
    return cy.get('#alertbtn');
  }

  switchToConfirmButton() {
    return cy.get('#confirmbtn');
  }

  elementDisplayedHeader() {
    return cy.get('.element-displayed');
  }

  hideTextBoxButton() {
    return cy.get('#hide-textbox');
  }

  showTextBoxButton() {
    return cy.get('#show-textbox');
  }

  hideShowTextBox() {
    return cy.get('#displayed-text');
  }

  mouseHoverHeader() {
    return cy.get('.mouse-hover');
  }

  mouseHoverButton() {
    return cy.get('.hover-btn');
  }

  hoverScrollToTopOption() {
    return cy.get('.scrollToTop');
  }

  hoverReloadOption() {
    return cy.get('.reload');
  }

  iframeHeader() {
    return cy.get('.iframe-header');
  }

  iframe() {
    return cy.iframe('#courses-iframe');
  }
}
