import * as yup from "yup";
import { useForm } from "react-hook-form";
import { FormField } from "../../../Checkout/FormField";
import { yupResolver } from "@hookform/resolvers/yup";

interface CheckoutFormProps {
  submit?: () => Promise<void>;
}

const validationSchema = yup.object().shape({
  name: yup.string().required(),
  cardNumber: yup
    .string()
    .required()
    .matches(
      /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/,
      "Card should have xxxx xxxx xxxx xxxx format"
    ),
  expDate: yup.date().required(),
  cvv: yup
    .string()
    .required()
    .matches(/^\d\d\d$/, "CVV should contain three numbers"),
});

export const CheckoutForm = ({
  submit = async () => {},
}: CheckoutFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(validationSchema),
  });

  return (
    <form onSubmit={handleSubmit(submit)}>
      <FormField
        placeholder="John Smith"
        type="text"
        label="Cardholder's Name"
        {...register("name")}
        errors={errors.name}
      />
      <FormField
        placeholder="0000 0000 0000 0000"
        type="tel"
        inputMode="numeric"
        autoComplete="cc-number"
        {...register("cardNumber")}
        label="Card Number"
        normalize={(value) => {
          return (
            value
              .replace(/\s/g, "")
              .match(/.{1,4}/g)
              ?.join(" ")
              .substr(0, 19) || ""
          );
        }}
        errors={errors.cardNumber}
      />
      <FormField
        type="month"
        {...register("expDate")}
        label="Expiration Date"
        errors={errors.expDate}
      />
      <FormField
        placeholder="000"
        type="number"
        {...register("cvv")}
        label="CVV"
        errors={errors.cvv}
        normalize={(value) => {
          return value.substr(0, 3);
        }}
      />
      <button className="nes-btn is-primary">Place order</button>
    </form>
  );
};
