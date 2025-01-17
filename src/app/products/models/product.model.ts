import { Category } from '../enums/category.enum';

export class ProductModel {
    constructor(
        public id: string,
        public name: string,
        public description: string,
        public price: number,
        public category: Category,
    ) { }
}
