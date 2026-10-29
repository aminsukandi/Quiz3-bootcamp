describe('Verifikasi Endpoint Users', () => {

  // TC01 - List Users Page 2
  it('TC01 - List Users Page 2', () => {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/users?page=2',
      headers: {
        'x-api-key': 'reqres_b5a0d5648a874535b9f41ce67234a26b'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('data');
      expect(response.body.data[0]).to.have.property('email');
    });
  });


  // TC02 - Memeriksa ID User
  it('TC02 - Memeriksa ID User', () => {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/users?page=2',
      headers: {
        'x-api-key': 'reqres_b5a0d5648a874535b9f41ce67234a26b'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data[0].id).to.eq(7);
    });
  });


  // TC03 - Memeriksa Nama User
  it('TC03 - Memeriksa Nama User', () => {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/users?page=2',
      headers: {
        'x-api-key': 'reqres_b5a0d5648a874535b9f41ce67234a26b'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data[0].first_name).to.eq('Michael');
    });
  });


  // TC04 - Memeriksa Jumlah User
  it('TC04 - Memeriksa Jumlah User', () => {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/users?page=2',
      headers: {
        'x-api-key': 'reqres_b5a0d5648a874535b9f41ce67234a26b'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data).to.have.length(6);
    });
  });


  // TC05 - Memeriksa Detail User
  it('TC05 - Memeriksa Detail User', () => {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/users/2',
      headers: {
        'x-api-key': 'reqres_b5a0d5648a874535b9f41ce67234a26b'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data.id).to.eq(2);
      expect(response.body.data.first_name).to.eq('Janet');
    });
  });


  // TC06 - User Tidak Ditemukan
  it('TC06 - User Tidak Ditemukan', () => {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/users/23',
      headers: {
        'x-api-key': 'reqres_b5a0d5648a874535b9f41ce67234a26b'
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404);
      expect(response.body).to.be.empty;
    });
  });


  // TC07 - Membuat User
  it('TC07 - Membuat User', () => {
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/users',
      headers: {
        'x-api-key': 'reqres_b5a0d5648a874535b9f41ce67234a26b'
      },
      body: {
        name: 'Amin sukandi',
        job: 'QA Engineer'
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.name).to.eq('Amin sukandi');
      expect(response.body.job).to.eq('QA Engineer');
    });
  });


  // TC08 - Membuat User Baru
  it('TC08 - Membuat User Baru', () => {
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/users',
      headers: {
        'x-api-key': 'reqres_b5a0d5648a874535b9f41ce67234a26b'
      },
      body: {
        name: 'Budi',
        job: 'Manual QA'
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.name).to.eq('Budi');
      expect(response.body).to.have.property('id');
    });
  });


  // TC09 - Update User
  it('TC09 - Update User', () => {
    cy.request({
      method: 'PUT',
      url: 'https://reqres.in/api/users/2',
      headers: {
        'x-api-key': 'reqres_b5a0d5648a874535b9f41ce67234a26b'
      },
      body: {
        name: 'Amin sukandi',
        job: 'Senior QA'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq('Amin sukandi');
      expect(response.body.job).to.eq('Senior QA');
    });
  });


  // TC10 - Update Sebagian Data User
  it('TC10 - Update Sebagian Data User', () => {
    cy.request({
      method: 'PATCH',
      url: 'https://reqres.in/api/users/2',
      headers: {
        'x-api-key': 'reqres_b5a0d5648a874535b9f41ce67234a26b'
      },
      body: {
        job: 'Automation QA'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.job).to.eq('Automation QA');
    });
  });


  // TC11 - Hapus User
  it('TC11 - Hapus User', () => {
    cy.request({
      method: 'DELETE',
      url: 'https://reqres.in/api/users/2',
      headers: {
        'x-api-key': 'reqres_b5a0d5648a874535b9f41ce67234a26b'
      }
    }).then((response) => {
      expect(response.status).to.eq(204);
      expect(response.body).to.be.empty;
    });
  });


  // TC12 - Request Tanpa API Key
  it('TC12 - Request Tanpa API Key', () => {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/users?page=2',
      failOnStatusCode: false
    }).then((response) => {
      expect([200, 401, 403]).to.include(response.status);
      expect(response.body).to.exist;
    });
  });

});