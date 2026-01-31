describe('supply links', () => {
  it('should load circulating supply', () => {
    cy.visit('/')
    cy.get("#circulatingSupplyLink").click()

    cy.document().then(doc => {
      const text = doc.body.innerText.trim()
      console.log('text:', text)
      const value = Number(text)
      expect(value).to.be.a('number')
      expect(value).to.be.greaterThan(0)
    })
  })

  it('should load total supply', () => {
    cy.visit('/')
    cy.get("#totalSupplyLink").click()

    cy.document().then(doc => {
      const text = doc.body.innerText.trim()
      console.log('text:', text)
      const value = Number(text)
      expect(value).to.be.a('number')
      expect(value).to.be.greaterThan(0)
    })
  })

  it('should load max supply', () => {
    cy.visit('/')
    cy.get("#maxSupplyLink").click()

    cy.document().then(doc => {
      const text = doc.body.innerText.trim()
      console.log('text:', text)
      const value = Number(text)
      expect(value).to.be.a('number')
      expect(value).to.be.greaterThan(0)
    })
  })
})
