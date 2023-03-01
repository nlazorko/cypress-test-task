import { EMPTY_STRING } from '../constants';
import { basePage } from 'pages';

describe('Test Task', () => {
  beforeEach(() => {
    cy.intercept('POST', '**/ping', { fixture: 'ping' }).as('ping');
    cy.visit('/');
  });

  it('should display the logo properly', () => {
    basePage
      .logo()
      .should('be.visible')
      .and('have.attr', 'href', basePage.EG_LINK_URL)
      .find('svg')
      .should('have.attr', 'xmlns', basePage.LOGO_SVG_PATH);
  });

  it('should display the header title properly', () => {
    basePage.headerTitle().should('be.visible').and('have.text', basePage.HEADER_TITLE_TEXT);
  });

  context('Navigation Buttons', () => {
    const buttonConfigs = [
      {
        elementGetter: basePage.homeButton,
        text: basePage.HOME_BUTTON_TEXT
      },
      {
        elementGetter: basePage.practiceButton,
        text: basePage.PRACTICE_BUTTON_TEXT
      },
      {
        elementGetter: basePage.loginButton,
        text: basePage.LOGIN_BUTTON_TEXT
      },
      {
        elementGetter: basePage.signUpButton,
        text: basePage.SIGNUP_BUTTON_TEXT
      }
    ];

    buttonConfigs.forEach((buttonConfig) => {
      it(`should display the ${buttonConfig.text} button properly`, () => {
        buttonConfig
          .elementGetter()
          .should('be.visible')
          .and('have.text', buttonConfig.text)
          .parent()
          .should('have.attr', 'href', basePage.EG_LINK_URL);
      });
    });
  });

  context('Dropdown', () => {
    it('should display the dropdown header properly', () => {
      basePage.dropdownHeader().should('be.visible').and('have.text', basePage.DROPDOWN_HEADER_TEXT);
    });

    it('should allow the user to switch value dropdown properly', () => {
      basePage.dropdown().should('have.value', EMPTY_STRING).select('option2').should('have.value', 'option2');
    });
  });

  context('Switchers', () => {
    it('should display the switch to tab header properly', () => {
      basePage.switchToTabHeader().should('be.visible').and('have.text', basePage.SWITCH_TO_TAB_HEADER_TEXT);
    });

    it('should allow the user to switch to tab properly properly', () => {
      const baseUrl = `${Cypress.config('baseUrl')}/`;
      // Errors in console occur after reload
      cy.on('uncaught:exception', () => false);

      cy.url().should('eq', baseUrl);
      basePage
        .openInNewTabButton()
        .should((button) => {
          expect(button.text().replace(/\s+/g, EMPTY_STRING)).to.eq(basePage.OPEN_IN_NEW_TAB_BUTTON_TEXT);
          expect(button.attr('href')).to.eq(basePage.EG_LINK_URL);
          expect(button.attr('target')).to.eq('_blank');

          button.attr('target', '_self');
        })
        .click();

      cy.url().should('not.eq', baseUrl);
    });

    it('should display the switch to alert header properly', () => {
      basePage.switchToAlertHeader().should('be.visible').and('have.text', basePage.SWITCH_TO_ALERT_HEADER_TEXT);
    });

    it('should allow the user to call alert window properly', () => {
      cy.task<string>('readTxtFile').then((textToType) => {
        const stub = cy.stub();
        cy.on('window:alert', stub);

        basePage
          .switchToAlertInput()
          .should('have.value', EMPTY_STRING)
          .type(textToType)
          .should('have.value', textToType);
        basePage
          .switchToAlertButton()
          .click()
          .then(() => {
            expect(stub).to.be.calledOnce;
            expect(stub.args[0][0]).to.eq(`Hello ${textToType}, share this practice page and share your knowledge`);
          });
      });
    });

    it('should allow the user to call confirm window properly', () => {
      cy.task<string>('readTxtFile').then((textToType) => {
        const stub = cy.stub();
        cy.on('window:confirm', stub);

        basePage
          .switchToAlertInput()
          .should('have.value', EMPTY_STRING)
          .type(textToType)
          .should('have.value', textToType);
        basePage
          .switchToConfirmButton()
          .click()
          .then(() => {
            expect(stub).to.be.calledOnce;
            expect(stub.args[0][0]).to.eq(`Hello ${textToType}, Are you sure you want to confirm?`);
          });
      });
    });
  });

  context('Display', () => {
    it('should display the header properly', () => {
      basePage.elementDisplayedHeader().should('be.visible').and('have.text', basePage.ELEMENT_DISPLAYED_HEADER_TEXT);
    });

    it('should display the textbox properly', () => {
      basePage
        .hideShowTextBox()
        .should('be.visible')
        .and('have.attr', 'placeholder', basePage.HIDE_SHOW_TEXTBOX_PLACEHOLDER_TEXT)
        .and('have.value', EMPTY_STRING)
        .type('123')
        .should('have.value', '123');
    });

    it('should allow the user to show/hide the text box properly', () => {
      basePage.hideShowTextBox().should('be.visible');
      basePage.hideTextBoxButton().should('have.value', basePage.HIDE_TEXTBOX_BUTTON_TEXT).click();
      basePage.hideShowTextBox().should('not.be.visible');
      basePage.showTextBoxButton().should('have.value', basePage.SHOW_TEXTBOX_BUTTON_TEXT).click();
      basePage.hideShowTextBox().should('be.visible');
    });
  });

  context('Hover', () => {
    it('should display the header properly', () => {
      basePage.mouseHoverHeader().should('be.visible').and('have.text', basePage.MOUSE_HOVER_HEADER_TEXT);
    });

    it('should allow the user to hover the element properly', () => {
      basePage.hoverScrollToTopOption().should('not.be.visible');
      basePage.hoverReloadOption().should('not.be.visible');
      basePage.mouseHoverButton().should('have.text', basePage.MOUSE_HOVER_BUTTON_TEXT).realHover();
      basePage
        .hoverScrollToTopOption()
        .should('be.visible')
        .and('have.text', basePage.HOVER_CONTENT_SCROLL_TO_TOP_OPTION_TEXT);
      basePage.hoverReloadOption().should('be.visible').and('have.text', basePage.HOVER_CONTENT_RELOAD_OPTION_TEXT);
    });
  });

  context('Iframe', () => {
    it('should display the iframe properly', () => {
      basePage.iframeHeader().should('be.visible').and('have.text', basePage.IFRAME_HEADER_TEXT);
      basePage.iframe().should('be.visible').find('.link').should('be.visible').and('have.text', 'Try now for free');
    });
  });
});
