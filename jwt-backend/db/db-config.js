const mongoose = require('mongoose');

const getConnection = async () => {
    try {
        const url = 'mongodb+srv://mariaIUDigital:W9mg2eVxh9BrUL1O@cluster0.wesosjd.mongodb.net/JWT-BACKEND'

        await mongoose.connect(url);
        console.log('Conexion exitosa');
        
    } catch (error) {
        console.log(error);
        throw new Error('Error de conexion a la BD');

    }
}

module.exports = {
    getConnection,
}