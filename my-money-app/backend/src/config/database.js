const { Mongoose } = require("mongoose");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
module.exports = mongoose.connect('mongodb://localhost/mymoney', { useNewUrlParser: true })

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatorio";
mongoose.Error.messages.Number.min=
"0 '{VALUE}'informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max= "O '{VALUE}' informado é maior que o limite '{MAX}'."
mongoose.Error.messages.String.enum= "'{VALUE}' não é válido para o atributo '{PATH}'."