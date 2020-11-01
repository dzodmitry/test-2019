import React, {
  Fragment,
  useState,
  useEffect,
  useRef,
} from "react";
import { injectIntl, InjectedIntl } from "react-intl";
import { Column, Layout, Row } from "@ui/layout";
import { Space, Text } from "@ui/text";
import { sortByAlphabet, sortByDate, prepareRows } from "../../utils/";
import messages from "../../messages";

interface Props {
  intl: InjectedIntl;
  rows: Array<Row>;
}

interface Row {
  id: number;
  email: string;
  profile: {
    firstName: string;
    lastName: string;
  };
  registeredAt: string;
  lastLogonAt: string;
}

interface PreapreRow {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  registeredAt: string;
  lastLogonAt: string;
}

const sortsByArray = [
  { name: messages.name, sort: sortByAlphabet, field: "firstName" },
  { name: messages.lastName, sort: sortByAlphabet, field: "lastName" },
  { name: messages.email, sort: sortByAlphabet, field: "email" },
  { name: messages.registered, sort: sortByDate, field: "registeredAt" },
  { name: messages.lastLogin, sort: sortByDate, field: "lastLogonAt" },
];

const List = ({ rows, intl }: Props) => {
  const selectRef = useRef();
  const [sortRows, setSortRows] = useState<Array<PreapreRow>>([]);
  const [isOpenSelect, setOpenSelect] = useState(false);
  const [fieldSort, setFieldSort] = useState(sortsByArray[0]);
  const [sortDirection, setSortDirection] = useState(true);

  const handleClickOutsideSelect = (e) => {
    if (
      selectRef &&
      selectRef.current &&
      !selectRef.current.contains(e.target)
    ) {
      setOpenSelect(false);
    }
  };

  useEffect(() => {
    if (rows.length) {
      const { sort, field } = fieldSort;
      const shallowCopyRows = prepareRows([...rows]);
      setSortRows(sort(shallowCopyRows, field, sortDirection));
    }
  }, [rows, fieldSort, sortDirection]);

  useEffect(() => {
    window.document.addEventListener("click", handleClickOutsideSelect);
    return () => {
      window.document.removeEventListener("click", handleClickOutsideSelect);
    };
  }, []);

  return (
    <Column>
      <Layout basis={60} />
      <Row>
        <Layout basis="10%" />
        <Text weight="medium" size="l">
          {intl.formatMessage(messages.users)}
        </Text>
        <Layout basis="10%" />
      </Row>
      <Layout basis={60} />
      <Row>
        <Layout basis="10%" />
        <div>
          <Row>
            <Text
              ref={selectRef}
              style={{
                marginBottom: "15px",
                cursor: "pointer",
                height: "20px",
                width: "140px",
                padding: "10px",
                backgroundColor: "#c9c9c9",
              }}
              onClick={() => {
                setOpenSelect(!isOpenSelect);
              }}
              weight="medium"
              size="s"
            >
              {intl.formatMessage(fieldSort.name)}
            </Text>
            <Layout basis="10%" />
            <Text
              style={{
                cursor: "pointer",
                display: "inline-block",
                textAlign: "center",
                padding: "10px",
                height: "20px",
                width: "60px",
                backgroundColor: "#c9c9c9",
              }}
              onClick={() => {
                setSortDirection(!sortDirection);
              }}
              weight="medium"
              size="s"
            >
              {sortDirection ? "up" : "down"}
            </Text>
          </Row>
          <div style={{ position: "absolute" }}>
            {isOpenSelect &&
              sortsByArray.map((el, index) => {
                return (
                  <Row key={index}>
                    <div
                      onClick={() => {
                        setFieldSort(el);
                      }}
                      style={{
                        backgroundColor: "#fff",
                        border: "0.5px solid #c9c9c9",
                        padding: "10px",
                        cursor: "pointer",
                        height: "20px",
                        width: "120px",
                      }}
                    >
                      <Text weight="light" size="s">
                        {intl.formatMessage(el.name)}
                      </Text>
                    </div>
                  </Row>
                );
              })}
            <Layout basis="10%" />
          </div>
        </div>
      </Row>
      <Layout basis={20} />
      <Row>
        <Layout basis="10%" />
        <Layout basis={280}>
          <Layout basis={8} />
          <Text size="s" weight="bold" transform="uppercase">
            {intl.formatMessage(messages.name)}
          </Text>
        </Layout>
        <Layout basis={290}>
          <Text size="s" weight="bold" transform="uppercase">
            {intl.formatMessage(messages.lastName)}
          </Text>
        </Layout>
        <Layout basis={200}>
          <Text size="s" weight="bold" transform="uppercase">
            {intl.formatMessage(messages.email)}
          </Text>
        </Layout>
        <Layout basis={180}>
          <Text size="s" weight="bold" transform="uppercase">
            {intl.formatMessage(messages.registered)}
          </Text>
        </Layout>
        <Layout basis={160}>
          <Text size="s" weight="bold" transform="uppercase">
            {intl.formatMessage(messages.lastLogin)}
          </Text>
        </Layout>
        <Layout basis="10%" />
      </Row>
      <Layout basis={8} />
      {sortRows.map(
        ({ id, lastName, firstName, email, registeredAt, lastLogonAt }) => (
          <Fragment key={id}>
            <Row>
              <Layout basis="10%" />
              <Layout basis={8} />
              <Layout basis={270}>
                <Text size="s">{firstName}</Text>
              </Layout>
              <Layout basis={280}>
                <Text size="s">{lastName}</Text>
              </Layout>
              <Layout basis={12} />
              <Layout basis={188}>
                <Text size="s">{email}</Text>
              </Layout>
              <Layout basis={12} />
              <Layout basis={168}>
                <Text size="s">{intl.formatDate(registeredAt)}</Text>
              </Layout>
              <Layout basis={12} />
              <Text size="s">
                {intl.formatDate(lastLogonAt)}
                <Space />
                {intl.formatMessage(messages.at)}
                <Space />
                {intl.formatTime(lastLogonAt)}
              </Text>
              <Layout basis="10%" />
            </Row>
            <Layout basis={12} />
          </Fragment>
        )
      )}
    </Column>
  );
};

export default injectIntl(List);
