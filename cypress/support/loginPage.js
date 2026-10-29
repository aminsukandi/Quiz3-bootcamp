class halamanLogin {

  kunjungiHalaman() {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  }

  masukanUsername(username) {
    cy.get('input[name="username"]').type(username)
  }

  masukanPassword(password) {
    cy.get('input[name="password"]').type(password)
  }

  klikTombolLogin() {
    cy.get('button[type="submit"]').click()
  }

  verifikasiLoginBerhasil() {
    cy.url().should('include', '/dashboard')
  }

  verifikasiLoginGagal() {
    cy.get('.oxd-alert-content-text')
      .should('contain', 'Invalid credentials')
  }

  verifikasiRequired() {
    cy.get('.oxd-input-field-error-message')
      .should('contain', 'Required')
  }

  verifikasiPassword() {
    cy.get('input[name="password"]')
      .should('have.attr', 'type', 'password')
  }

}

export default new halamanLogin()