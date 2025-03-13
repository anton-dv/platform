import { FC, useEffect, useState } from "react";
import { BasePage } from "../BasePage/BasePage";
import { FormBody } from "../../component/Form/FormBody/FormBody";
import { FormHeader } from "../../component/Form/FormHeader/FormHeader";
import { FormInputList } from "../../component/Form/FormInputsList/FormInputList";
import { FormMessage } from "../../component/Form/FormMessage/FormMessage";
import { Input } from "../../ui/Input/Input";
import { FormNavigation } from "../../component/Form/FormNavigation/FormNavigation";
import { FormSubtext } from "../../component/Form/FormSubtext/FormSubtext";
import { FormButton } from "../../component/Form/FormButton/FormButton";
import { Routes } from "../../../app/router/Routes";
import { useSignUpValues } from "./hook/useSignUpValues";
import { useUser } from "../../../api/controllers/useUser";
import { RequestError } from "../../../api/models/types/RequestError";
import { FormAgreements } from "../../component/Form/FormAgreements/FormAgreements";
import { Backdrop } from "../../ui/Backdrop/Backdrop";
import { BackdropType } from "../../ui/Backdrop/BackdropType";
import { useAppNavigate } from "../../../hooks/useAppNavigate";

export const SignUpPage: FC = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const state = useSignUpValues();
  const navigate = useAppNavigate();
  const user = useUser();

  useEffect(() => state.reset(), []);

  const onSubmit = async () => {
    const valid = state.validate();
    if (!valid || loading) return;

    setLoading(true);
    const response = await user.signup(state.values);
    setLoading(false);

    if (response.isError) onFail(response.error);
    else navigate.toArticles();
  };

  const onFail = (error: RequestError) => {
    state.reset();

    const message = error.username
      ? "Username is already taken.\n"
      : "" + error.email
      ? "Email is already taken.\n"
      : "";

    setErrorMessage(message || "Error.");
  };

  const onAgain = () => setErrorMessage("");

  return (
    <BasePage>
      <Backdrop type={BackdropType.Form}>
        <FormBody>
          <FormHeader title={errorMessage ? "Oops!" : "Create new account"} />
          <FormBody>
            <FormMessage message={errorMessage} loading={loading} />
            <FormInputList>
              <Input
                name="Username"
                value={state.values.username}
                error={state.errors.username}
                onChange={state.set.username}
              />
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
              <Input
                name="Repeat Password"
                type="password"
                placeholder="Password"
                value={state.values.repeat}
                error={state.errors.repeat}
                onChange={state.set.repeat}
              />
            </FormInputList>

            <FormAgreements
              value={state.values.agree}
              error={state.errors.agree}
              onChange={state.set.agree}
            />
          </FormBody>
          <FormNavigation>
            <FormButton
              title={errorMessage ? "Again" : "Create"}
              onSubmit={errorMessage ? onAgain : onSubmit}
            />
            <FormSubtext
              text="Already have an account?"
              link={{ text: "Sign In.", route: Routes.SignInPath }}
            />
          </FormNavigation>
        </FormBody>
      </Backdrop>
    </BasePage>
  );
};
