let request = require('request')
let key = require('./auth/secret')

const verifytoken = (token, cb) => {
  request.post({
    url: 'https://starlight.gwilken.com/api/verifytoken',
    headers: {
      'authorization': token
    }
  }, (err, res) => {
    if(err) {
      console.log('Error:', err)
    }

    cb(res.statusCode, token)
  })
}

const getToken = (cb) => {
  let token = null

  request.post({
      url: 'https://starlight.gwilken.com/api/gettoken',
      json: true,
      body: {
        "username": "greg",
        key
      }
    }, ((err, res) => {
        if(err) {
          console.log('Error:', err)
        }
        
        if (res.body.token) {
          token = res.body.token
        }

        verifytoken(token, cb)
      })
  )
}

 function checkApi() {
  getToken((res, token) => {
    console.log(res, token)
  })
}

checkApi()