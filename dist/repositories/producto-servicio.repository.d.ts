import { DefaultCrudRepository } from '@loopback/repository';
import { MongodbDataSource } from '../datasources';
import { ProductoServicio, ProductoServicioRelations } from '../models';
export declare class ProductoServicioRepository extends DefaultCrudRepository<ProductoServicio, typeof ProductoServicio.prototype.id, ProductoServicioRelations> {
    constructor(dataSource: MongodbDataSource);
}
