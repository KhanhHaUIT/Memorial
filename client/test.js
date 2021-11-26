const axios = require("axios");
const fs = require("fs");

async function getDistricts() {
  districts = [];

  for (let i = 2; i <= 64; i++) {
    districts.push(
      axios.get(`https://vnexpress.net/postarticle/location/district/${i}`)
    );
  }

  districts = await Promise.all(districts);
  districts = districts.map((district) => district.data);


    let data = fs.readFileSync("test.txt");

    let newData = []
    for(let item of data.toString().split("\n")){
        if(item !== ''){
            newData.push(item);
        }
    }

    for(let i = 0; i < newData.length; i++){
        for(let j = 0; j < districts[i].length; j++){
            districts[i][j]['province'] = newData[i];
        }
    }
    

  fs.writeFileSync('provinces.json', JSON.stringify(newData))
  fs.writeFileSync("districts.json", JSON.stringify(districts));
}

getDistricts();

// let data = fs.readFileSync("test.txt");

// let newData = []
// for(let item of data.toString().split("\n")){
//     if(item !== ''){
//         newData.push(item);
//     }
// }
// console.log(newData);