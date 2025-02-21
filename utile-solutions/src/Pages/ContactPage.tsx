import ContactForm from "../Components/Forms/ContactForm";
import {Col} from "antd"


const ContactPage = () => {
  return (
    <div style={{ margin: "auto", padding: "20px", maxWidth: '1020px' }}>
      <h1 style={{ marginBottom: "16px" }}>Skriv til os</h1>
      <Col span={24}>
        <p>Har du spørgsmål?</p>
        <p>Skriv til os via formularen nedenfor. Så vender vi hurtigst muligt tilbage til dig</p>
        <ContactForm />
      </Col>

    </div>
  );
};

export default ContactPage;
