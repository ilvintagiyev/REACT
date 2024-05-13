import * as Yup from "yup";
export const ProductsSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  salePrice: Yup.number().min(0, "Too Short!").required("Required"),
  costPrice: Yup.number().min(0, "Too Short!").required("Required"),
  imgSrc: Yup.string().required("Required").url("Invalid URL"),
  discountPercentage: Yup.number()
    .min(2, "Too Short!")
    .max(110, "Too Long!")
    .required("Required"),
  description: Yup.string().required("Required"),
  stockCount: Yup.number()
    .min(2, "Too Short!")
    .max(1100, "Too Long!")
    .required("Required"),
    
});
