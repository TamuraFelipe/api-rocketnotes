const { hash, compare } = require("bcryptjs");
const AppError = require("../utils/AppError");
const knex = require("../database/knex");

class UsersController{
    async create(request, response){
        const { name, email, password } = request.body;
        
        //Verificando se usuário já existe
        const [checkUserExists] = await knex("users")
        .where("email", email)
        if(checkUserExists){
            throw new AppError("Este e-mail já está em uso!")
        };

        //Criptografando a senha e cadastrando no banco
        const hashedPassword = await hash(password, 8)
        
        //Inserindo dados
        await knex("users")
        .insert({
            name,
            email,
            password: hashedPassword
        })

        return response.status(201).json({
            message: "Usuário criado com sucesso!"
        });
    };

    async update(request, response){
        const { name, email, password, old_password } = request.body;
        /* const { id } = request.params; */
        const user_id = request.user.id;

        //Verifica se o usuário existe 
        const [user] = await knex("users")
        .where('id', user_id)
        if(!user){
            throw new AppError("Usuário não encontrado");
        };

        //Verifica se o email que será modificado está sendo utilizado por outro usuário
        const [userWithUpdatedEmail] = await knex("users")
        .where('email', email)
        if(!!userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id){
            throw new AppError("Este e-mail já está em uso!")
        };

        user.name = name ?? user.name;
        user.email = email ?? user.email;

        //Verifica se a senha antiga foi digitada
        if( password && !old_password){
            throw new AppError("Informe a senha antiga!")
        };
        //Verifica se amabas as senhas foram digitadas e confere se a senha antiga confere
        if( password && old_password){
            const checkOldPassword = await compare(old_password, user.password);
            if(!checkOldPassword){
                throw new AppError("Senha antiga não confere.");
            };
            user.password = await hash(password, 8);
        };
        
        //Atualizando dados do usuário id?
        await knex("users")
        .update({
           name: name ?? user.name,
           email: email ?? user.email,
           password: user.password,
           updated_at: knex.raw("datetime('now')")
        })
        .where('id', user_id)
        
        return response.status(200).json({
            message: "Usuário alterado com sucesso!"
        });
    };
};

module.exports = UsersController;
