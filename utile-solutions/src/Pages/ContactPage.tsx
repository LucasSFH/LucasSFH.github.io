import ContactForm from "../Components/Forms/ContactForm";
import {Col} from "antd"


const ContactPage = () => {
  return (
    <div style={{ margin: "auto", maxWidth: '1020px' }} className="py-32 px-8">
      <h1 className="text-5xl font-bold mb-8">Skriv til os</h1>
      <Col span={24}>
        <p>Har du spørgsmål?</p>
        <p>Skriv til os via formularen nedenfor. Så vender vi hurtigst muligt tilbage til dig</p>
        <ContactForm />
      </Col>

    </div>
  );
};

export default ContactPage;
