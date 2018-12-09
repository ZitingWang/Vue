describe('Manage Posts page', () => {
  beforeEach(() => {
    // Delete all donations in the API's datastore
    cy.request('https://webapp-ziting.herokuapp.com/Post/')
      .its('body')
      .then((posts) => {
        posts.forEach((element) => {
          cy.request('DELETE',
            'https://webapp-ziting.herokuapp.com/Post/' + element.writer)
        })
      })
    // Populate API's datastore
    cy.fixture('Posts')
      .then((posts) => {
        posts.forEach((post) => {
          cy.request('POST',
            'https://webapp-ziting.herokuapp.com/Post/', post)
        })
      })
    cy.visit('/')
    // Click Manage Donations navbar link
    cy.get('.navbar-nav:nth-child(1)')
      .find('.nav-item:nth-child(2)').click()
  })

  it('allows a post to be deleted', () => {
    cy.get('tbody').find('tr').should('have.length', 5)
    // Click trash/delete link of 3rd donation in list
    cy.get('tbody').find('tr:nth-child(3)').find('td:nth-child(7)').click()
    // Click confirmation button
    cy.get('button').contains('Delete').click()
    cy.get('tbody').find('tr').should('have.length', 4)
  })

  it("shows and hides a post's content", () => {
    // Click + symbol of 2nd donation in list
    cy.get('tbody').find('tr:nth-child(2)').find('td:nth-child(1)').click()
    // cy.get('div.vue-content').should('contain', 'The content is [ wobuxiangxie ]')
    // Unclick same + symbol
    cy.get('tbody').find('tr:nth-child(2)').find('td:nth-child(1)').click()
    cy.get('div.vue-content').should('not.exist')
  })

  it('allows a post to be edited', () => {
    cy.get('tbody').find('tr').should('have.length', 5)
    // Click trash/delete link of 3rd donation in list
    cy.get('tbody').find('tr:nth-child(3)').find('td:nth-child(6)').click()
    // Click confirmation button
    cy.get('label').contains('Writer').next().clear()
    cy.get('label').contains('Content').next().clear()
    cy.get('label').contains('Writer').next().type('BJ')
    cy.get('label').contains('Content').next().type('shisb')
    cy.get('button').contains('Update').click()
    cy.contains('Thanks for your Post').should('not.exist')
  })

  it('up the likenumber of a post', () => {
    // Click trash/delete link of 3rd donation in list
    cy.get('tbody').find('tr:nth-child(3)').find('td:nth-child(5)').click()
    // Click confirmation button
    cy.get('tbody').find('tr:nth-child(6)').find('td:nth-child(4)').should('contain', 1)
  })

  it('search a post', () => {
    // Click trash/delete link of 3rd donation in list
    cy.get('tbody').find('tr:nth-child(3)').find('td:nth-child(5)').click()
    // Click confirmation button
    cy.get('tbody').find('tr:nth-child(6)').find('td:nth-child(4)').should('contain', 1)
  })
})
