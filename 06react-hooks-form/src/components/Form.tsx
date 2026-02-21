import { useForm, type SubmitHandler } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  password: string;
}

const onSubmit: SubmitHandler<FormData> = (data) => {
  console.log(data);
};

const Form = () => {
  // register:  is used to connect input fields to the form.
  // handleSubmit:  is a function to handle form submission.
  // errors:  contains validation errors for the form.
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          {...register("name", { required: "Name is required" })}
        >
          {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
        </input>
      </div>

      <div>
        <label htmlFor="email">E-mail: </label>
        <input
          {...register("email", {
            required: "Name is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          type="email"
          id="email"
          placeholder="Email"
        >
          {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
        </input>
      </div>
      <input
        {...register("password", {
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters",
          },
        })}
        type="password"
        placeholder="Password"
      />

      {errors.password && (
        <div style={{ color: "red" }}>{errors.password.message}</div>
      )}

      <button disabled={isSubmitting}>
        {isSubmitting ? "Loading..." : "Submit"}
      </button>
    </form>
  );
};
export default Form;
