const QRCode = require('qrcode')
const canvas = document.getElementById('canvas')
const error = document.getElementById('error')


 
const data = [
    { errorCorrectionLevel: 'H' },
    
]

// const text = [
//     'ullam nobis ut neque magni eos officia adipisci quam?',
//     'Saepe doloremque autem non labore natus eum sit officiis ex eligendi rem incidunt',
//     'officiis ex eligendi rem incidunt, ullam nobis ut neque magni eos officia',
//     'dolor sit amet consectetur adipisicing elit. Saepe doloremque autem non labor',
//     'ullam nobis ut neque magni eos officia adipisci quam?',
//     'Saepe doloremque autem non labore natus eum sit officiis ex eligendi rem incidunt',
//     'officiis ex eligendi rem incidunt, ullam nobis ut neque magni eos officia',
//     'dolor sit amet consectetur adipisicing elit. Saepe doloremque autem non labor',
// ]

// const text = [
//      'facebook.com',
//      'twitter.com',
//      'github.com'
// ]

// QRCode.toDataURL("text", data, error => {
//   if (error) {
//       console.error(error)
//     } else {
//      console.log('success!');
//      console.log(data)
//     }
// })

// error.addEventListener("change", (data) => {
//     console.log(data.value.text)
// })


// var opts = {
//     errorCorrectionLevel: 'H',
//     type: 'image/jpeg',
//     quality: 0.3,
//     margin: 1,
//     color: {
//       dark:"#010599FF",
//       light:"#FFBF60FF"
//     }
//   }
   
//   QRCode.toDataURL('text', opts, function (err, url) {
//     if (err) throw err
   
//     var img = document.getElementById('image')
//     img.src = url
//   })



const text = [
    'Full Name: Abdulmalik Ayorinde',
    '        ',
    'Twitter: https://twitter.com/AbdulmalikAyor1',
    '        ',
    'Email: malik.ayo4life@gmail.com',
    '        ',
    'Github: https://github.com/Abdulmalik-Ayorinde'
    
]

// text.push(`${<h1>google.com/ayo</h1>}`)

// console.log(text[1])

// const head  = document.createElement('b')

//  head.innerHTML = 'bro'

//  canvas.appendChild(head)
//  console.log(head)

var segs = [
    
    { data: 'Full Name: Abdulmalik Ayorinde', mode: 'Byte' },
    { data: "   ", mode: 'Byte' },
    { data: 'Twitter: https://twitter.com/AbdulmalikAyor1', mode: 'Byte' },
    { data: "   ", mode: 'Byte' },
    { data: 'Email: malik.ayo4life@gmail.com', mode: 'Byte' },
    { data: "   ", mode: 'Byte' },
    { data: 'Github: https://github.com/Abdulmalik-Ayorinde', mode: 'Byte' }
    // { data: '0123456', mode: 'numeric' }
  ]
 
  QRCode.toDataURL(segs, data, (err, url) => console.log(url))


 
//   QRCode.toDataURL(canvas, { toSJISFunc: toSJIS }, function (err, url) {
//     console.log(url)
//   })