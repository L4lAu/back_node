import bcrypt from "bcryptjs";


//gera uma senha "teste" hasheada

async function generateHashPassword() {
    const password= 'teste'; //substituir pela senha desejada
    try {
        const salt = await bcrypt.genSalt(10);
        
        const hashedPassword = await bcrypt.hash(password, salt);

        console.log('senha hasheada: ', hashedPassword);
        process.exit(0);
    } catch (err) {
        console.error('erro ao hashear a senha: ', err);
        process.exit(1)
    }
}

generateHashPassword()