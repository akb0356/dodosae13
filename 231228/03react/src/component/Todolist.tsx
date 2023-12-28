import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const Todolist = () => {
  // const [toDo, setTodo] = useState("");
  // const onchange = (event: React.FormEvent<HTMLInputElement>) => {
  //   const {
  //     //실제로 값을 찾아올 때는 currentTarget을 사용해야해요
  //     currentTarget: { value },
  //   } = event;
  //   setTodo(value);
  // };

  // const onSubmit = (event: React.FormEvent<HTMLInputElement>) => {
  //   event.preventDefault();
  //   console.log(toDo);
  // };

  //객체값을 반환, register라는 key값을 반환시킨다.
  //register는 반드시 key값이 있어야한다. (todo라는 값을 무조건찾아! 근데 찾는 일은 watch가 해줄것임.)
  //handlesubmit은 onsubmit 일을 해준다.
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  } = useForm();
  console.log(watch());
  const onValid = (data: any) => {
    if (data.password !== data.password1) {
      setError(
        "password1",
        { message: "Password is not the same" },
        { shouldFocus: true }
      );
    }
    setValue("email", "");
  };

  console.log(errors);

  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          padding: "0 10px",
        }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", {
            required: true,
            pattern: {
              value: /^[A-Za-z0-9]+@naver.com/gm,
              message: "Only naver.com email allowed",
            },
            minLength: 5,
          })}
          placeholder="Email"
        />
        <span>{errors?.email?.message as string}</span>
        <input
          {...register("firstname", {
            required: "Write Here",
            validate: (value) =>
              value.includes("test") ? "No test allowed" : true,
          })}
          placeholder="First Name"
        />
        <span>{errors?.firstname?.message as string}</span>
        <input
          {...register("lastname", { required: true })}
          placeholder="Last Name"
        />
        <span>{errors?.lastname?.message as string}</span>
        <input
          {...register("username", { required: true })}
          placeholder="User Name"
        />
        <span>{errors?.username?.message as string}</span>
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 5,
              message: "Your Password is too shorts",
            },
          })}
          placeholder="Password"
        />
        <span>{errors?.password?.message as string}</span>
        <input
          {...register("password1", {
            required: "Password1 is required",
            minLength: {
              value: 5,
              message: "Your Password1 is too shorts",
            },
          })}
          placeholder="Password1"
        />
        <span>{errors?.password1?.message as string}</span>
        <button>Add</button>
      </form>
    </div>
  );
};
