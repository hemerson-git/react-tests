"use client";

import { Input } from "./input";
import { z } from "zod";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(4, "The Password must be at least 4 characters long"),
});

type FormDataProps = z.infer<typeof schema>;

export function SignInForm() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (field: FormDataProps) => {
    console.log(field);
  };

  return (
    <>
      <h2 className="text-2xl mb-4 uppercase font-bold">Sign In</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-[540px] flex-col gap-3"
      >
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input
              placeholder="johndoe@gmail.com"
              aria-label="email"
              {...field}
            />
          )}
        />

        {errors.email && <span>{String(errors?.email?.message)}</span>}

        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input
              placeholder="type your password"
              type="password"
              security="true"
              aria-label="password"
              {...field}
            />
          )}
        />

        {errors.password && <span>{String(errors?.password?.message)}</span>}

        <button type="submit" className="bg-purple-400 py-3 px-2 rounded">
          Submit
        </button>
      </form>
    </>
  );
}
