let input = document.getElementById('input');
let getIpUser = document.getElementById('getIpUser');
let result = document.getElementById('result');

getIpUser.addEventListener('click', async () => {
  let userIP = input.value
  let token = "ba3f5726c182e2"
  let response = await fetch(`https://ipinfo.io/${userIP}?token=${token}`)
  let data = await response.json()
  result.innerHTML = template(data)

  animation()
})


function rulesInput () {
  input.value = input.value.replace(/[^0-9.]/g, "")
}

function template(data) {
  return `
    <div id="result">
      <code>
        ip: ${data.ip}           <br>
        city: ${data.city}       <br>
        region: ${data.region}   <br>
        country: ${data.country} <br>
        loc: ${data.loc}         <br>
        org: ${data.org}         <br>
        postal: ${data.postal}   <br>
        timezone: ${data.timezone} <br>
      </code>
    </div>
  `
}

function animation () {
  result.style.height = '0'
  setTimeout(() => result.style.height = '220px', 600)
}
