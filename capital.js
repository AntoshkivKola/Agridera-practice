const capitalsL = document.querySelector('#capitals-left')
const capitalsR = document.querySelector('#capitals-right')

fetch('https://restcountries.eu/rest/v2/regionalbloc/eu')
  .then(res => res.json())
  .then(data => {
    data.forEach((d,i)=>{
      // console.log(d.capital)
      const li = document.createElement('li')
      li.appendChild(document.createTextNode(d.capital))
      if(i%2===0){
        capitalsL.appendChild(li)
      }else{
        capitalsR.appendChild(li)

      }

    })

  })
