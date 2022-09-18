import { useFormik } from "formik";
import * as Yup from "yup";

const Formik = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid Email").required("Required"),
      name: Yup.string("please inter a string").required("Required"),
    }),
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <input type="email" {...formik.getFieldProps("email")} />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}

        <input type="text" {...formik.getFieldProps("text")} />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Formik;
