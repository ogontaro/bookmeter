import BookmeterClient from 'cheerio-httpcli'

export default class Bookmeter {
  constructor(id, password) {
    this._id = id
    this._password = password
  }

  async _login() {
    BookmeterClient.fetch('https://bookmeter.com//login', (err, $, res, body) => {
      let form = $('form[action="/login"]')
      form.field({
        'session[email_address]': this._id,
        'session[password]': this._password,
        'session[keep]': 1
      })
      form.find('button[type=submit]').click((err, $2, res, body) => {
        BookmeterClient.fetch('https://bookmeter.com/home.json?offset=10&limit=30',(err, $, res, body) =>{
          console.log($.text())
        })
      })
    })
  }
}
