const axios = require('axios');
const fs = require('fs');

districts = []

for(let i = 2; i <= 64; i++) {
    districts.push(
        axios.get(`https://vnexpress.net/postarticle/location/district/${i}`)
    )
}




async function getDistricts() {
    districts = await Promise.all(districts)
    districts = districts.map(district => district.data)
    fs.writeFileSync('districts.json', JSON.stringify(districts))
}

getDistricts()
