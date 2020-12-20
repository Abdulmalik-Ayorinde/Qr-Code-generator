const QRCode = require('qrcode')


const codeImg = document.getElementById('code-img')
const modalContainer = document.getElementById('modal-container')
let  name = document.getElementById('name').value
let  email = document.getElementById('email').value
let  twitter = document.getElementById('twitter').value
let   github = document.getElementById('github').value


const cancleBtn = document.getElementById('cancle')
const closeBtn = document.getElementById('close-modal')

const form = document.getElementById('my-form')
 
const data = [
    { errorCorrectionLevel: 'H' }  
]

const handleSubmit = () => {
    const data = new FormData(form)
    let fullName = data.get("fullName")
    let email = data.get("email")
    let twitter = data.get("twitter")
    let github= data.get("github")
    const fullData= {
        fullName, email, twitter, github
    }

    const segs = [
        { data: `Fullname:${fullName}`},
        { data: "           ", mode: 'Byte' },
        { data: `Email:${email}`, mode: 'Byte' },
        { data: "           ", mode: 'Byte' },
        { data: `Twitter:${twitter}`, mode: 'Byte' },
        { data: "           ", mode: 'Byte' },
        { data: `Github:${github}`, mode: 'Byte' }
      ]

      
    QRCode.toDataURL(segs, data, (err, url) => {
        if(err) console.error(err)
        codeImg.setAttribute('src', `${url}`)
      })
}

form.addEventListener('submit',event => {
    event.preventDefault()
    modalContainer.classList.add('display-modal')
    handleSubmit();
} )

closeBtn.addEventListener('click', () => {
    modalContainer.classList.remove('display-modal')
})

// Work on form input validation 