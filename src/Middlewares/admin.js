
function admin(request, response, next){
    if(!request.body.isAdmin){
        return response.send({"Mensagem": "Não Autorizado"});
    };
    next();    
};

module.exports = admin;