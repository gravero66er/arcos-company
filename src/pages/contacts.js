// Libraries
import React from "react";
import { graphql } from "gatsby";

// Components
import Layout from "../components/Layout";
import ContactsBanner from "../components/ContactsBanner";
import MessageForm from "../components/MessageForm";
import ContactsInfo from "../components/ContactsInfo";


export default function Contacts({ data }) {
  const contacts = data.contacts.nodes;

  return (
    <Layout>
      <ContactsBanner contacts={contacts} />
      <section className="container">
        <h1 className="title__h1">Контакты</h1>
        <p className="article">
          Вы можете задать вопрос и мы ответим вам в этот же день, заказать звонок и мы перезвоним вам в течение 15 минут. Кроме того,
          вы можете позвонить нам самостоятельно, написать на электронную почту или приехать к нам в офис в рабочее время.
        </p>
        <MessageForm />
        <ContactsInfo contacts={contacts} />
      </section>
    </Layout>
  );
}

export const query = graphql`
  {
    contacts: allContentfulContacts {
    nodes {
      imageBig {
        gatsbyImageData(layout: FULL_WIDTH)
      }
      imageMiddle {
        gatsbyImageData(layout: FULL_WIDTH)
      }
      imageSmall {
        gatsbyImageData(layout: FULL_WIDTH)
      }
      phone
      email
    }
  }
  }
`;
