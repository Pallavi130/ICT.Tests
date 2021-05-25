/// <reference types="cypress" />
/// <reference types="cypress-iframe" />

import 'cypress-iframe';



describe('Search feature',() =>  {
    it('Open URL',()=>{
        cy.visit('https://www.willistowerswatson.com')
        if (window.Cypress) {
            window.appReady = true
          }
       
            cy.frameLoaded("[id^=pop-frame"); //Load iFrame

            cy.iframe().find("a.required").eq(0).click();
           
           
    })


         
   //Check the global icon
    it('Verify user is on Global site',() =>{
        cy.contains('GB').should('be.visible').screenshot()
        cy.log('User is on correct Global site')

    });
    
    //Search by keyword 'test'
    it('Validate Search results are for test Keyword',() =>{
        const searchKey = 'test'
        
        cy.get('button.btn.btn-lg.site-nav__btn.site-nav__btn--search-menu > span.site-nav__btn__label.d-none.d-md-block').click({ force: true })
        cy.get('[role=searchbox]').type(searchKey)
        cy.get('.CoveoSearchButton').click({ force: true })

        //Verify 'test' result summary 
        cy.get('.CoveoQuerySummary').contains('Results').should('be.visible')
        cy.get('.CoveoQuerySummary').contains('for test').should('be.visible')
        cy.screenshot()

    });

    //verify default sort if not 'Date' then change it to 'Date'
    it('Check search result is sorted by Date', ()=>{
        if(cy.get('#coveo2a434694').get('.coveo-selected'))
        {
            cy.get('#coveo9de96e90').click({ force: true })
        }

        //Verify sort by date 
        cy.get('#coveo9de96e90').should('have.class','coveo-selected')
        cy.log('Search functionality is working fine')
        

    });
    
})

