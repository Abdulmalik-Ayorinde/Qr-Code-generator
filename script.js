const QRCode = require('qrcode')


const codeImg = document.getElementById('code-img')
const  name = document.getElementById('name')
const  email = document.getElementById('email')
const  twitter = document.getElementById('twitter')
const   github = document.getElementById('github')

const nameVal = 'name' + email.value

const genBtn = document.getElementById('generate')
const cancleBtn = document.getElementById('cancle')
const closeBtn = document.getElementById('close-modal')
 
const data = [
    { errorCorrectionLevel: 'H' }  
]

console.log(nameVal)



const val = [
    `Full Name: ${nameVal}`,
    '        ',
    'Twitter: https://twitter.com/AbdulmalikAyor1',
    '        ',
    'Email: malik.ayo4life@gmail.com',
    '        ',
    'Github: https://github.com/Abdulmalik-Ayorinde'  
]

val.push(nameVal)

const segs = [
    
    { data: `${val[0]}`},
    { data: "           ", mode: 'Byte' },
    { data: `Email: ${email.value}`, mode: 'Byte' },
    { data: "           ", mode: 'Byte' },
    { data: `Twitter: ${twitter.value}`, mode: 'Byte' },
    { data: "           ", mode: 'Byte' },
    { data: `Github: ${github.value}`, mode: 'Byte' }
  ]

  console.log(val)
const generateCode = () => {
    console.log(val)
    console.log(email.value)
    QRCode.toDataURL(val, data, (err, url) => {
        if(err) console.error(err)
        console.log(url)
        codeImg.setAttribute('src', `${url}`)
      })
}

genBtn.addEventListener('click', generateCode)