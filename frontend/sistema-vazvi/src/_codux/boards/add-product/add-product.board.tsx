import { createBoard } from '@wixc3/react-board';
import { AddProductForm } from '../../../components/add-product/add-product';
import ICategory from '../../../models/category.model';
import IBrand from '../../../models/brand.model';
import { IProductCreate } from '../../../models/product.model';
import { UseFormRegister, useForm } from 'react-hook-form';

const categories: ICategory[] = [];
const brands: IBrand[] = [];

export default createBoard({
    name: 'AddProctud',
    Board: () => <AddProductForm categories={categories} brands={brands}/>,
    environmentProps: {
        canvasHeight: 628,
        windowHeight: 640,
        windowWidth: 1024
    }
});
