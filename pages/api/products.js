import { products } from '../../productsData';

export default (req, res) => {
  res.status(200).json(products);
};
