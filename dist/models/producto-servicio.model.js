"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoServicio = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let ProductoServicio = class ProductoServicio extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], ProductoServicio.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], ProductoServicio.prototype, "tipo", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], ProductoServicio.prototype, "nombre", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], ProductoServicio.prototype, "descripcion", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], ProductoServicio.prototype, "precio", void 0);
ProductoServicio = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], ProductoServicio);
exports.ProductoServicio = ProductoServicio;
//# sourceMappingURL=producto-servicio.model.js.map