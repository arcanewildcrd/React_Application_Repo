import Title from "./components/Title";
import Content from "./components/Content";
export function Home() {
  return (
    <div>
    <Title heading=" MAKERERE BLOG" />
    <Content details="Please save the MUK  kids from hunger. They're suffering for sins the corrupt gavo officials are commiting through embezzelment of funds" /><br/>
    
    <Title heading=" KYAMBOGO BLOG" />
    <Content details="Please save the KYU  kids from depression " /><br/>

    <Title heading=" MUBS BLOG" />
    <Content details="Please tell the MUBS kids to keep their skirts on" /><br/>

    </div>
  );
}
export default Home;