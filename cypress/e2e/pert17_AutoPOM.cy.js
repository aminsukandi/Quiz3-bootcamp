import loginview from "../support/loginPage";

import halamanLogin from '../support/loginPage'

describe('Scenario Verifikasi Fungsi Login', () => {

  // TC01 - Login dengan username valid dan password valid
  it('TC01-Login dengan username valid & password valid', () => {
    halamanLogin.kunjungiHalaman()
    halamanLogin.masukanUsername('Admin')
    halamanLogin.masukanPassword('admin123')
    halamanLogin.klikTombolLogin()
    halamanLogin.verifikasiLoginBerhasil()
  })


  // TC02 - Login dengan username salah
  it('TC02-Login dengan username salah', () => {
    halamanLogin.kunjungiHalaman()
    halamanLogin.masukanUsername('UserSalah')
    halamanLogin.masukanPassword('admin123')
    halamanLogin.klikTombolLogin()
    halamanLogin.verifikasiLoginGagal()
  })


  // TC03 - Login dengan password salah
  it('TC03-Login dengan password salah', () => {
    halamanLogin.kunjungiHalaman()
    halamanLogin.masukanUsername('Admin')
    halamanLogin.masukanPassword('PasswordSalah')
    halamanLogin.klikTombolLogin()
    halamanLogin.verifikasiLoginGagal()
  })


  // TC04 - Login dengan username dan password salah
  it('TC04-Login dengan username & password salah', () => {
    halamanLogin.kunjungiHalaman()
    halamanLogin.masukanUsername('UserSalah')
    halamanLogin.masukanPassword('PasswordSalah')
    halamanLogin.klikTombolLogin()
    halamanLogin.verifikasiLoginGagal()
  })


  // TC05 - Login tanpa username
  it('TC05-Login tanpa username', () => {
    halamanLogin.kunjungiHalaman()
    halamanLogin.masukanPassword('admin123')
    halamanLogin.klikTombolLogin()
    halamanLogin.verifikasiRequired()
  })


  // TC06 - Login tanpa password
  it('TC06-Login tanpa password', () => {
    halamanLogin.kunjungiHalaman()
    halamanLogin.masukanUsername('Admin')
    halamanLogin.klikTombolLogin()
    halamanLogin.verifikasiRequired()
  })


  // TC07 - Login tanpa username dan password
  it('TC07-Login tanpa username & password', () => {
    halamanLogin.kunjungiHalaman()
    halamanLogin.klikTombolLogin()
    halamanLogin.verifikasiRequired()
  })


  // TC08 - Memastikan password tersembunyi
  it('TC08-Memastikan password tersembunyi', () => {
    halamanLogin.kunjungiHalaman()
    halamanLogin.verifikasiPassword()
  })

})
