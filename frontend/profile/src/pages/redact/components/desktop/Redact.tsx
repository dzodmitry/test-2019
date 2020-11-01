import React, { FC, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Dispatch } from "redux";
import { injectIntl, InjectedIntl } from "react-intl";
import { Column, Layout, Row } from "@ui/layout";
import { Text } from "@ui/text";
import { Input } from "@ui/input";
import { Button } from "@ui/button";
import { RouteLink } from "@ui/link";
import messages from "@frontend/profile/src/pages/redact/messages";

interface Props {
  intl: InjectedIntl;
  profile: { firstName: string; lastName: string };
  email: string;
  lastName: string;
  firstName: string;
  mail: string;
  errors: {
    email: string;
    firstName: string;
    lastName: string;
    message: string;
  };
  onRedact: () => Dispatch<{ type: string }>;
  onChangeEmail: () => Dispatch<{ type: string }>;
  onChangeFirstName: () => Dispatch<{ type: string }>;
  onChangeLastName: () => Dispatch<{ type: string }>;
}

const Redact: FC<Props> = ({
  errors,
  email,
  profile,
  intl,
  onChangeEmail,
  onChangeFirstName,
  onChangeLastName,
  mail,
  lastName,
  firstName,
  onRedact,
}: Props) => {
  const history = useHistory();

  useEffect(() => {
    onChangeEmail(email);
    onChangeLastName(profile.lastName);
    onChangeFirstName(profile.firstName);
  }, [email, profile]);

  function onRedactWithRedirect() {
    onRedact(history);
  }

  if (!mail && !lastName && !firstName) {
    //loading
    return null;
  }

  return (
    <Column align="center">
      <Layout basis={60} />
      <Text size="2xl" height="xs" weight="bold">
        {intl.formatMessage(messages.title)}
      </Text>
      <Layout basis={20} />
      <Row justify="center">
        <Layout basis={360}>
          <Text size="s" weight="bold" transform="uppercase">
            {intl.formatMessage(messages.email)}
          </Text>
        </Layout>
      </Row>
      <Layout basis={12} />
      <Row justify="center">
        <Layout basis={360}>
          <Input
            type="email"
            border="lightGray"
            value={mail}
            error={!!errors.mail}
            errorText={errors.mail}
            onChange={onChangeEmail}
            placeholder={intl.formatMessage(messages.enterEmail)}
          />
        </Layout>
      </Row>

      <Layout basis={20} />
      <Row justify="center">
        <Layout basis={360}>
          <Text size="s" weight="bold" transform="uppercase">
            {intl.formatMessage(messages.firstName)}
          </Text>
        </Layout>
      </Row>
      <Layout basis={12} />
      <Row justify="center">
        <Layout basis={360}>
          <Input
            type="text"
            border="lightGray"
            error={!!errors.firstName}
            errorText={errors.firstName}
            value={firstName}
            onChange={onChangeFirstName}
            placeholder={
              firstName
                ? firstName
                : intl.formatMessage(messages.enterFirstName)
            }
          />
        </Layout>
      </Row>
      <Layout basis={20} />
      <Row justify="center">
        <Layout basis={360}>
          <Text size="s" weight="bold" transform="uppercase">
            {intl.formatMessage(messages.lastName)}
          </Text>
        </Layout>
      </Row>
      <Layout basis={12} />
      <Row justify="center">
        <Layout basis={360}>
          <Input
            type="text"
            border="lightGray"
            error={!!errors.lastName}
            errorText={errors.lastName}
            value={lastName}
            onChange={onChangeLastName}
            placeholder={
              lastName ? lastName : intl.formatMessage(messages.enterLastName)
            }
          />
        </Layout>
      </Row>

      <Layout basis={12} />
      <Row justify="center">
        <Layout basis={360}>
          <Button
            text
            disabled={!mail || !lastName || !firstName}
            onClick={onRedactWithRedirect}
          >
            {intl.formatMessage(messages.title)}
          </Button>
        </Layout>
      </Row>
      <Layout basis={12} />
      {errors.message && (
        <Text size="1" height="xs" weight="bold" color="red">
          {errors.message}
        </Text>
      )}
      <RouteLink
        to="/profile"
        size="s"
        height="xs"
        weight="medium"
        color="black"
        hoverColor="blueBayoux"
      >
        {intl.formatMessage(messages.back)}
      </RouteLink>
    </Column>
  );
};

export default injectIntl(Redact);
