require('dotenv').config({ path: './cred.env' });
const axios = require('axios');

const PAGE_ID = process.env.PAGE_ID;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

async function probarConexion() {
  try {
    const url = `https://graph.facebook.com/v18.0/${PAGE_ID}?fields=id,name&access_token=${ACCESS_TOKEN}`;
    const response = await axios.get(url);

    console.log("✅ Conexión exitosa con la API de Facebook");
    console.log("📄 Página conectada:");
    console.log(response.data);
  } catch (error) {
    console.error("❌ Error en la conexión:");
    console.error(error.response?.data || error.message);
  }
}

probarConexion();
