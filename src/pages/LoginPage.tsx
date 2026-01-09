import { localCustomFetch } from "@/axios/customFetch";
import { CustomInput } from "@/components";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { loginUser } from "@/features/users/usersSlice";
import { type ReduxStore } from "@/store";
import { Form, Link, redirect, type ActionFunction } from "react-router-dom";

export const loginAction =
  (store: ReduxStore): ActionFunction =>
  async ({ request }): Promise<Response | null> => {
    try {
      const formData = await request.formData();
      const data = Object.fromEntries(formData);
      const response = await localCustomFetch.post("auth/login", data);
      store.dispatch(loginUser(response.data));
      return redirect("/");
    } catch (error) {
      console.log(error);
      return null;
    }
  };
const LoginPage = () => {
  return (
    <section className="h-screen w-screen grid place-content-center">
      <Card className="w-96 bg-slate-50">
        <CardHeader className="text-center">Login</CardHeader>
        <CardContent>
          <Form method="POST">
            <CustomInput
              label="email"
              name="email"
              type="search"
              required
              classname="my-2 w-full"
            ></CustomInput>
            <CustomInput
              label="password"
              name="password"
              type="password"
              required
              classname="my-2 w-full"
            ></CustomInput>
            <Button type="submit" className="my-2 w-full">
              Login
            </Button>
            <p className="text-center mt-2">
              Not yet a member ?
              <Button variant="link">
                <Link to={"/register"}>Register</Link>
              </Button>
            </p>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
};

export default LoginPage;
