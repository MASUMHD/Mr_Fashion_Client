import { useForm } from "react-hook-form";
import UseAuth from "../../Hooks/UseAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const AddNewProduct = () => {
  const { user } = UseAuth();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const title = data.title;
    const brand = data.brand;
    const price = parseFloat(data.price);
    const stock = parseFloat(data.stock);
    const category = data.category;
    const description = data.description;
    const sellerEmail = user.email;
    const image = data.image;

    const product = {
      title,
      brand,
      price,
      stock,
      category,
      description,
      sellerEmail,
      image,
    };

    const token = localStorage.getItem("access-token");
    axios
      .post("http://localhost:4000/products", product, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Product Added Successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });

    reset();
  };

  return (
    <div>
      <Helmet>
        <title>Mr. Fashion | Add Products</title>
      </Helmet>
      <h1 className="mb-5 text-3xl lg:text-4xl font-bold text-center text-black">
        Add Products
      </h1>
      <div className="w-full lg:w-2/3 mx-auto h-full">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="lg:flex gap-8 w-full">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-lg text-black font-bold">
                  Title
                </span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                name="title"
                required
                className="input input-bordered border-2 border-black"
                {...register("title")}
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-black text-lg font-bold">
                  Brand
                </span>
              </label>
              <input
                type="text"
                placeholder="Brand Name Type here"
                name="brand"
                required
                className="input input-bordered border-2 border-black"
                {...register("brand")}
              />
            </div>
          </div>

          <div className="lg:flex gap-8 w-full">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-black text-lg font-bold">
                  Price
                </span>
              </label>
              <input
                type="number"
                placeholder="Price Type here"
                name="price"
                required
                className="input input-bordered border-2 border-black"
                {...register("price")}
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-black text-lg font-bold">
                  Stock
                </span>
              </label>
              <input
                type="number"
                placeholder="Stock Quantity Type Here"
                name="stock"
                required
                className="input input-bordered border-2 border-black"
                {...register("stock")}
              />
            </div>
          </div>
          <div className="lg:flex gap-8 w-full">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-black text-lg font-bold">
                  Category
                </span>
              </label>
              <input
                type="text"
                placeholder="Category Type Here"
                name="category"
                required
                className="input input-bordered border-2 border-black"
                {...register("category")}
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-black text-lg font-bold">
                  Image URL
                </span>
              </label>
              <input
                type="text"
                placeholder="Image URL Type Here"
                name="image"
                required
                className="input input-bordered border-2 border-black"
                {...register("image")}
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-black text-lg font-bold">
                Description
              </span>
            </label>
            <textarea
              type="text"
              placeholder="Product Description Type Here"
              name="description"
              required
              className="input input-bordered border-2 border-black h-32 p-3"
              {...register("description")}
            />
          </div>
          <div className="my-8 w-full">
            <button
              type="submit"
              className="btn btn-outline  w-full text-lg font-bold"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewProduct;