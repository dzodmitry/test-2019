import React from "react";
import { injectIntl, InjectedIntl } from "react-intl";
import { Column, Layout, Row } from "@ui/layout";
import { Text } from "@ui/text";
import { Input } from "@ui/input";
import { Button } from "@ui/button";
import { RouteLink } from "@ui/link";
import messages from "../../messages";

interface Props {
  intl: InjectedIntl;
  profile: { firstName: string; lastName: string };
  email: string;
}

const Info = ({ email, profile, intl }: Props) => (
  <Column align="center">
    <Layout basis={60} />
    <Row>
      <Layout basis="10%" />
      <Text size="s" weight="bold" transform="uppercase">
        {intl.formatMessage(messages.firstName)}
      </Text>
      <Layout basis={8} />
      <Text size="s" height="xs">
        {profile.firstName}
      </Text>
    </Row>
    <Row>
      <Layout basis="10%" />
      <Text size="s" weight="bold" transform="uppercase">
        {intl.formatMessage(messages.lastName)}
      </Text>
      <Layout basis={8} />
      <Text size="s" height="xs">
        {profile.lastName}
      </Text>
    </Row>
    <Row>
      <Layout basis="10%" />
      <Text size="s" weight="bold" transform="uppercase">
        {intl.formatMessage(messages.email)}
      </Text>
      <Layout basis={8} />
      <Text size="s" height="xs">
        {email}
      </Text>
    </Row>
    <Layout basis={16} />
    <Row>
      <Layout basis="10%" />
      <RouteLink
        to="/profile/edit"
        size="s"
        height="xs"
        weight="medium"
        color="black"
        hoverColor="blueBayoux"
      >
        {intl.formatMessage(messages.redact)}
      </RouteLink>
      <Layout basis={8} />
      <RouteLink
        to='/'
        size='s'
        height='xs'
        weight='medium'
        color='black'
        hoverColor='blueBayoux'
      >
      {intl.formatMessage(messages.back)}
    </RouteLink>
    </Row>
  </Column>
);

export default injectIntl(Info);
