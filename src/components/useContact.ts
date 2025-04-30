import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";

const schema = z.object({
  name: z.string().min(3, "Name should be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(5, "Message should be at least 5 characters"),
});

type Contact = z.infer<typeof schema>;

export const useContact = () => {
  const [alert, setAlert] = useState({ message: "", type: "" });
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Contact>({ mode: "onChange", resolver: zodResolver(schema) });
  const onSubmit = async (data: Contact) => {
    try {
      await axios.post("https://formspree.io/f/xgvkorgk", data);
      setAlert({ message: "Thanks for your feedback", type: "success" });
      reset();
    } catch (error) {
      setAlert({ message: "Something went wrong", type: "error" });
    } finally {
      setTimeout(() => {
        setAlert({ message: "", type: "" });
      }, 5000);
    }
  };
  return {
    alert,
    setAlert,
    reset,
    isSubmitting,
    errors,
    handleSubmit: handleSubmit(onSubmit),
    register,
  };
};
