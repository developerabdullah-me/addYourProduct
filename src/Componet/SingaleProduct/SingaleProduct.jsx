/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const SingaleProduct = ({ product, handelDeleteProduct }) => {
  return (
    <tbody>
      <tr className="table-primary">
        <td>{product.name}</td>
        <td>{product.productId}</td>
        <td>{product.productPrice}</td>
        <td>{product.productQuantity}</td>
        <td style={{ backgroundColor: product.color }}>{product.color}</td>
        <td>{product.productDescription.slice(0,50)}</td>
        <td>
          <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={() => handelDeleteProduct(product.productId)}
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default SingaleProduct;
