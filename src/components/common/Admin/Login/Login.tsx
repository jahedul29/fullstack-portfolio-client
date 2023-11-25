"use client";

import { useUserLoginMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/services/auth.service";
import { Button, Col, Row, message } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";
import loginImage from "../../../../assets/Mobile login.gif";
import Form from "../../Form";
import FormInput from "../../Form/FormInput";

type FormValues = {
  id: string;
  password: string;
};

const Login = () => {
  const [userLogin, options] = useUserLoginMutation();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const res = await userLogin({ ...data }).unwrap();

      console.log({ res });
      if (res?.accessToken) {
        message.success("User logged in successfully");
        storeUserInfo({ accessToken: res?.accessToken });

        router.push("/profile");
      } else {
        message.error("Something went wrong");
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <Row
      justify={"center"}
      align={"middle"}
      style={{
        minHeight: "100vh",
      }}
    >
      <Col sm={12} md={10} lg={10}>
        <Image src={loginImage} width={500} alt="login image" />
      </Col>
      <Col sm={12} md={8} lg={8}>
        <h1 className="my-5 font-medium text-4xl text-darkText">
          Login to admin panel
        </h1>
        <div>
          <Form submitHandler={onSubmit}>
            <div>
              <FormInput
                name="email"
                type="email"
                size="large"
                label="User ID"
              />
            </div>
            <div
              style={{
                margin: "16px 0px",
              }}
            >
              <FormInput
                name="password"
                type="password"
                size="large"
                label="Password"
              />
            </div>
            <Button type="primary" htmlType="submit" size="large">
              Login
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default Login;
