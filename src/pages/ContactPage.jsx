import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

const ContactPage = () => {
  return (
    <div className="px-4 md:px-12 lg:px-20 pt-30 pb-20 flex flex-col gap-15">
      <div className="flex flex-col gap-2">
        <p className="font-medium uppercase">SUPPORT</p>
        <h2 className="font-extrabold text-3xl md:text-4xl">NEED HELP?</h2>

        <p className="max-w-[400px] text-text-muted font-medium">
          WHATEVER YOU NEED, WE’RE JUST A MESSAGE AWAY. OUR TEAM WILL GET BACK
          TO YOU WITHIN 24 HOURS.
        </p>
      </div>

      <div className="flex flex-col-reverse gap-7 lg:grid grid-cols-2">
        <div className="flex flex-col gap-8 font-medium">
          <div className="flex flex-col gap-1">
            <p className="uppercase text-text-muted">EMAIL: </p>
            <p>hello@monarch.co</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="uppercase text-text-muted">PHONE: </p>
            <p>+44 20 7946 0958</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="uppercase text-text-muted">ADDRESS: </p>
            <p>
              71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United
              Kingdom
            </p>
          </div>
        </div>

        <form action="" className="flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-6">
            <Input type="text" id="name" label="name" />
            <Input type="email" id="email" label="email" />
          </div>

          <label className="uppercase font-medium flex flex-col gap-2 text-text-muted" htmlFor="message" >
            message
            <textarea name="" id="message" rows={5}></textarea>
          </label>

          <Button variant="primary" size="lg" type="submit">submit</Button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
