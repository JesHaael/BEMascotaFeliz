import { Entity } from '@loopback/repository';
export declare class ProductoServicio extends Entity {
    id?: string;
    tipo: string;
    nombre: string;
    descripcion: string;
    precio: number;
    constructor(data?: Partial<ProductoServicio>);
}
export interface ProductoServicioRelations {
}
export declare type ProductoServicioWithRelations = ProductoServicio & ProductoServicioRelations;
