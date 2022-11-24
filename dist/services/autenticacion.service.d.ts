import { Usuario } from '../models';
import { UsuarioRepository } from '../repositories';
export declare class AutenticacionService {
    usuarioRepository: UsuarioRepository;
    constructor(usuarioRepository: UsuarioRepository);
    GenerarContrasena(): any;
    CifrarContrasena(contrasena: string): any;
    IdentificarUsuario(usuario: string, contrasena: string): false | Promise<(Usuario & import("../models").UsuarioRelations) | null>;
    GenerarTokenJWT(usuario: Usuario): any;
    ValidarTokenJWT(token: string): any;
}
