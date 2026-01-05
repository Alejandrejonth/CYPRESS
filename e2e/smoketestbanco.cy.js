describe("Test suite - conjunto de pruebas",()=>{
   
    beforeEach(() => {
    // runs before each test in the block
    cy.visit('http://zero.webappsecurity.com')
  })


    it("validar pagina de inicio",()=>{
        cy.get('.active > img').should("be.visible")//ubico el elemento y con should verifico que elemento este visible
        cy.get('.active > .custom > h4').contains("Online Banking")
    })  

    it("Prueba E2E -transferencia de fondos",()=>{
        cy.get('#signin_button').click()
        cy.get('[name="user_login"]').type("username")
        cy.get('[name="user_password"]').type("password")   
        cy.get('[name="submit"]').click()
        cy.get('#transfer_funds_tab > a').click()
        cy.get('[name="fromAccountId"]').select('1')
        cy.get('[name="toAccountId"]').select('5')
        cy.get('[name="amount"]').type("300")
        cy.get('[name="description"]').type("Transferencia de prueba 300dlls")
        cy.get('#btn_submit').click()
        cy.get('#btn_submit').click()
        cy.get('.alert').contains('You successfully submitted your transaction.')


    }) 

    it("Prueba de validación de actualización del  grafico",()=>{
        cy.get('#signin_button').click()
        cy.get('[name="user_login"]').type("username")
        cy.get('[name="user_password"]').type("password")   
        cy.get('[name="submit"]').click()
        cy.get('#money_map_tab > a').click()
        cy.get('#ext-sprite-1259').should('be.visible')
        cy.get('#ext-sprite-1167 > tspan').click()
        cy.get('#ext-sprite-1259').should('not.be.visible')
    })


})