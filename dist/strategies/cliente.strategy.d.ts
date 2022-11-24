/// <reference types="express" />
import { AuthenticationStrategy } from '@loopback/authentication';
import { Request } from '@loopback/rest';
import { UserProfile } from '@loopback/security';
import { AutenticacionService } from '../services';
export declare class EstrategiaCliente implements AuthenticationStrategy {
    servicioAutentication: AutenticacionService;
    name: string;
    constructor(servicioAutentication: AutenticacionService);
    authenticate(request: Request): Promise<UserProfile | undefined>;
}
