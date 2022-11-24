"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutenticacionService = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const llaves_1 = require("../config/llaves");
const repositories_1 = require("../repositories");
const generador = require('password-generator');
const cryptoJS = require('crypto-js');
const jwt = require("jsonwebtoken");
let AutenticacionService = class AutenticacionService {
    constructor(usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }
    /*
     * Add service methods here
     */
    GenerarContrasena() {
        let contrasena = generador(8, false);
        return contrasena;
    }
    CifrarContrasena(contrasena) {
        let contrasenaCifrada = cryptoJS.MD5(contrasena).toString();
        return contrasenaCifrada;
    }
    IdentificarUsuario(usuario, contrasena) {
        try {
            let u = this.usuarioRepository.findOne({ where: { correo: usuario, contrasena: contrasena } });
            if (u) {
                return u;
            }
            return false;
        }
        catch (_a) {
            return false;
        }
    }
    GenerarTokenJWT(usuario) {
        let token = jwt.sign({
            data: {
                id: usuario.id,
                correo: usuario.correo,
                nombre: usuario.nombre + " " + usuario.apellido,
            }
        }, llaves_1.Llaves.claveJWT);
        return token;
    }
    ValidarTokenJWT(token) {
        try {
            let datos = jwt.verify(token, llaves_1.Llaves.claveJWT);
            return datos;
        }
        catch (_a) {
            return false;
        }
    }
};
AutenticacionService = tslib_1.__decorate([
    (0, core_1.injectable)({ scope: core_1.BindingScope.TRANSIENT }),
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.UsuarioRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.UsuarioRepository])
], AutenticacionService);
exports.AutenticacionService = AutenticacionService;
//# sourceMappingURL=autenticacion.service.js.map