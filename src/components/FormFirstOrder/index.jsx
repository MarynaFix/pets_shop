import styles from "./styles.module.css";
import { useForm } from "react-hook-form";
import Dogs from "../../assets/icons/dogs.svg";
const FormFirstOrder = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await fetch("http://localhost:3333/sale/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      console.log(result);

      reset();
    } catch (err) {
      console.error("Sending error", err);
    }
  };

  return (
    <div className={styles.containerForm}>
      <h1>5% off on the first order</h1>
      <div className={styles.flexContainer}>
        {" "}
        <img src={Dogs} alt="dogs" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              placeholder="Name"
              {...register("name", { required: "Enter name" })}
            />
            {errors.name && (
              <p className={styles.errorMess}>{errors.name.message}</p>
            )}
          </div>

          <div>
            <input
              placeholder="Phone"
              {...register("phone", {
                required: "Enter phone",
              })}
            />
            {errors.phone && (
              <p className={styles.errorMess}>{errors.phone.message}</p>
            )}
          </div>

          <div>
            <input
              placeholder="Email"
              {...register("email", {
                required: "Enter email",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Incorrect email",
                },
              })}
            />
            {errors.email && (
              <p className={styles.errorMess}>{errors.email.message}</p>
            )}
          </div>

          <button type="submit">Get a discount</button>
        </form>
      </div>
    </div>
  );
};

export default FormFirstOrder;
