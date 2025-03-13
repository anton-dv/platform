import { FC, useEffect, useState } from "react";
import { BasePage } from "../BasePage/BasePage";
import { FormBody } from "../../component/Form/FormBody/FormBody";
import { FormHeader } from "../../component/Form/FormHeader/FormHeader";
import { FormInputList } from "../../component/Form/FormInputsList/FormInputList";
import { Input } from "../../ui/Input/Input";
import { FormButton } from "../../component/Form/FormButton/FormButton";
import { useProfileValues } from "./hook/useProfileValues";
import { useUser } from "../../../api/controllers/useUser";
import { FormMessage } from "../../component/Form/FormMessage/FormMessage";
import { RequestError } from "../../../api/models/types/RequestError";
import { Backdrop } from "../../ui/Backdrop/Backdrop";
import { BackdropType } from "../../ui/Backdrop/BackdropType";
import { useAppNavigate } from "../../../hooks/useAppNavigate";

export const ProfilePage: FC = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useAppNavigate();
  const state = useProfileValues();
  const user = useUser();

  useEffect(() => state.reset(), []);

  const onSubmit = async () => {
    const valid = state.validate();
    if (!valid || loading) return;

    setLoading(true);
    const response = await user.update(state.values);
    setLoading(false);

    if (response.isError) onFail(response.error);
    else navigate.toArticles();
  };

  const onFail = (error: RequestError) => {
    state.reset();

    const message =
      (error.username ? "Username is already taken.\n" : "") +
      (error.email ? "Email is already taken.\n" : "") +
      (error.token ? "You are not authorized\n" : "");

    setErrorMessage(message || "Error.");
  };

  const onAgain = () => setErrorMessage("");

  return (
    <BasePage>
      <Backdrop type={BackdropType.Form}>
        <FormBody>
          <FormHeader title={errorMessage ? "Oops!" : "Edit Profile"} />
          <FormInputList>
            <FormMessage message={errorMessage} loading={loading} />
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
              name="New Password"
              type="password"
              value={state.values.password}
              error={state.errors.password}
              onChange={state.set.password}
            />
            <Input
              name="Avatar image (url)"
              placeholder="Avatar image"
              value={state.values.image as string}
              error={state.errors.image as string}
              onChange={state.set.image}
            />
          </FormInputList>

          <FormButton
            title={errorMessage ? "Again" : "Save"}
            onSubmit={errorMessage ? onAgain : onSubmit}
          />
        </FormBody>
      </Backdrop>
    </BasePage>
  );
};
