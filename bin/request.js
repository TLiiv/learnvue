import axios from 'axios';
let response = await axios.get('https://www.delfi.ee/artikkel/120363163/sama-plaan-mis-1945-aastal-venemaa-esitas-usa-le-noudmised-mainitakse-ka-nato-vagesid-euroopas');
console.log(response);