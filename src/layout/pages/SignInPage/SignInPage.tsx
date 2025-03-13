import { FC, useEffect, useState } from "react";
import { BasePage } from "../BasePage/BasePage";
import { FormBody } from "../../component/Form/FormBody/FormBody";
import { FormHeader } from "../../component/Form/FormHeader/FormHeader";
import { FormInputList } from "../../component/Form/FormInputsList/FormInputList";
import { Input } from "../../ui/Input/Input";
import { FormNavigation } from "../../component/Form/FormNavigation/FormNavigation";
import { FormButton } from "../../component/Form/FormButton/FormButton";
import { FormSubtext } from "../../component/Form/FormSubtext/FormSubtext";
import { Routes } from "../../../app/router/Routes";
import { useSignInValues } from "./hook/useSignInValues";
import { useUser } from "../../../api/controllers/useUser";

import { FormMessage } from "../../component/Form/FormMessage/FormMessage";
import { RequestError } from "../../../api/models/types/RequestError";
import { Backdrop } from "../../ui/Backdrop/Backdrop";
import { BackdropType } from "../../ui/Backdrop/BackdropType";
import { useAppNavigate } from "../../../hooks/useAppNavigate";

export const SignInPage: FC = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useAppNavigate();
  const state = useSignInValues();
  const user = useUser();

  useEffect(() => state.reset(), []);

  const onSubmit = async () => {
    const valid = state.validate();
    if (!valid || loading) return;

    setLoading(true);
    const response = await user.signin(state.values);
    setLoading(false);


    if (response.isError) onFail(response.error);
    else navigate.toArticles();
  };

  const onFail = (error: RequestError) => {
    const message = error.username || error.password ? "Email of password is wrong." : "Error.";

    setErrorMessage(message);
    state.reset();
  };

  const onAgain = () => setErrorMessage("");

  return (
    <BasePage>
      <Backdrop type={BackdropType.Form}>
        <FormBody>
          <FormHeader title={errorMessage ? "Oops!" : "Login"} />
          <FormInputList>
            <FormMessage message={errorMessage} loading={loading} />
            <Input
              name="Email address"
              type="email"
              value={state.values.email}
              error={state.errors.email}
              onChange={state.set.email}
            />
            <Input
              name="Password"
              type="password"
              value={state.values.password}
              error={state.errors.password}
              onChange={state.set.password}
            />
          </FormInputList>

          <FormNavigation>
            <FormButton title={errorMessage ? "Again" : "Login"} onSubmit={errorMessage ? onAgain : onSubmit} />
            <FormSubtext
              text="Don’t have an account?"
              link={{ text: "Sign Up.", route: Routes.SignUpPath }}
            />
          </FormNavigation>
        </FormBody>
      </Backdrop>
    </BasePage>
  );
};
