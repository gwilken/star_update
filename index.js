let request = require('request')

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

    cb(res.statusCode)
  })
}

const getToken = (cb) => {
  let token = null

  request.post({
      url: 'https://starlight.gwilken.com/api/gettoken',
      json: true,
      body: {
        "username": "greg",
        "password": "test"
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
  getToken((res) => {
    console.log(res)
  })
}

checkApi()