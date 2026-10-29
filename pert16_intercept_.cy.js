describe('TEST AUTO orangeHRM', () => {
  
  //memastikan halaman login -->ok
  it('TC01-open login view', () => {
    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').as('location');
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.wait('@location').its('response.statusCode').should('eq',200);

    cy.get('input[name="username"]').should('be.visible');
    cy.get('input[name="password"]').should('be.visible');
    cy.get('button[type="submit"]').should('be.visible');
    
    //cy.screenshot()
    
  });

  // memastikan input username dapat diisi -->ok
  it('TC02-memastikan input username dapat di isi', () => {
    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').as('location');
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
    cy.wait('@location').its('response.statusCode').should('eq',200);
    cy.get('input[name="username"]').should('be.visible');
    
    //cy.screenshot()
  })

  //memastikan input password dapat di isi --> ok
  it('TC03-memastikan input password dapat di isi', () => {
     cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').as('location');
     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
     cy.wait('@location').its('response.statusCode').should('eq',200);
     cy.get('input[name="password"]').should('have.attr', 'type', 'password');
     //cy.screenshot()

  })

  //memastikan button login aktif --> ok
  it('TC04- memastikan bbutton login aktif', () => {
     cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').as('location');
     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
     cy.get('button[type="submit"]')
      .should('be.enabled');
     cy.wait('@location').its('response.statusCode').should('eq',200);
    //cy.screenshot()

  })

  //input username --> ok
  it('TC05-input username', ()=> {
    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').as('location');
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.wait('@location').its('response.statusCode').should('eq',200);
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="username"]').should('have.value','Admin')
    //cy.screenshot()
  })

    //input username --> ok
  it('TC06-input password', ()=> {
    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').as('location');
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.wait('@location').its('response.statusCode').should('eq',200);
    cy.get('input[name="password"]').type('admin123')
    cy.get('input[name="password"]').should('have.value', 'admin123')
    
    //cy.screenshot()
    
  })

  //Login menggunakan data valid --> ok
  it('TC07 - Login dengan data valid', () => {
    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary').as('loginview');
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();
    cy.contains('Dashboard').should('be.visible');
    cy.get('#app div.emp-attendance-chart canvas').click();

    cy.wait('@loginview').its('response.statusCode').should('eq',200);

  })

  //Login dengan username salah --> ok
   it('TC08 - Login menggunakan username salah', () => {
    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').as('loginPage');
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    cy.wait('@loginPage').its('response.statusCode').should('eq',200);

    cy.get('input[name="username"]').type('SalahUser');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
    });


   //Login dengan password salah --> ok
    it('TC09 - Login menggunakan password salah', () => {
    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').as('loginPage');

    cy.intercept('POST', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate').as('loginRequest');

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    cy.wait('@loginPage').its('response.statusCode').should('eq',200);

    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('PasswordSalah');
    cy.get('button[type="submit"]').click();

    cy.wait('@loginRequest').its('response.statusCode').should('eq',302);
    cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
  });


  
  //Login dengan username kosong --> ok
   it('TC10 - Login dengan username kosong', () => {
    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').as('loginPage');
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    cy.wait('@loginPage').its('response.statusCode').should('eq',200);

    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();
    cy.get('input[name="username"]').should('be.visible');

  it('should validate empty input', () => {
  cy.get('input[required]').then(($input) => {
    expect($input[0].checkValidity()).to.be.false;
  });
});

    
  //cy.screenshot()
  })

//Login dengan password kosong --> ok
it('TC11 - Login dengan password kosong', () => {
  cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com//web/index.php/auth/login').as('loginPage');
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  cy.wait('@loginPage').its('response.statusCode').should('eq',200);

  cy.get('input[name="username"]').type('Admin');
  cy.get('button[type="submit"]').click();

  // Validasi pesan error password kosong
  cy.get('.oxd-input-field-error-message').should('be.visible').and('contain', 'Required');

});


  //Memastikan dashboard tampil setelah login --> ok
   it('TC12 - Login menggunakan akun yang benar', () => {
    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com//web/index.php/auth/login').as('loginPage');
    cy.intercept('POST', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate').as('loginRequest');
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    cy.wait('@loginPage').its('response.statusCode').should('eq',200);

    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    cy.wait('@loginRequest').its('response.statusCode').should('eq',302);

    cy.url().should('include', '/dashboard');
    cy.get('.oxd-topbar-header').should('be.visible');
  });
  


})