import AOS from "aos";
import "aos/dist/aos.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export function Home() {
  AOS.init();
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };
  const detail = [
    {
      address: "36b Talbot green, Liantrisant,Wales,CF72 8AF",
      name: "Business Name"
    },
    {
      address: "36b Talbot green, Liantrisant,Wales,CF72 8AF",
      name: "Business Name"
    },
    {
      address: "36b Talbot green, Liantrisant,Wales,CF72 8AF",
      name: "Business Name"
    },
    {
      address: "36b Talbot green, Liantrisant,Wales,CF72 8AF",
      name: "Business Name"
    },
    {
      address: "36b Talbot green, Liantrisant,Wales,CF72 8AF",
      name: "Business Name"
    },
    {
      address: "36b Talbot green, Liantrisant,Wales,CF72 8AF",
      name: "Business Name"
    },
    {
      address: "36b Talbot green, Liantrisant,Wales,CF72 8AF",
      name: "Business Name"
    },
    {
      address: "36b Talbot green, Liantrisant,Wales,CF72 8AF",
      name: "Business Name"
    }
  ];
  return (
    <div>
      <div
        className="Part1"
        style={{
          backgroundImage: `url("https://ibooking.co.uk/custom_assets/image/ibooking-hero-image.jpg")`
        }}
      >
        <h1 className="title1">Welcome to ibooking - let's get started!</h1>
        <div className="form1">
          <form className="Myform1">
            <div className="form-group">
              <input
                className="form-control"
                id="exampleInputEmail"
                style={{ border: "hidden" }}
                placeholder="what would you like to book?"
                aria-describedby="emailHelp"
              />
            </div>
            |
            <div className="form-group">
              <input
                className="form-control"
                style={{ border: "hidden" }}
                id="exampleInputNumber"
                placeholder="location"
                aria-describedby="emailHelp"
              />
            </div>
            <button
              type="submit"
              className="btn "
              style={{ backgroundColor: "rgb(253 93 46)" }}
            >
              SEARCH
            </button>
          </form>
        </div>
      </div>
      <div className="Part2">
        <div className="Sub2">
          <h2 className="title2">
            Supercharge your business with effective booking software
          </h2>
          <p className="para">
            Welcome to ibooking - the booking management system that works for
            your business. If you run your own business, you’ll know how
            difficult it is to keep on top of all the small - but important -
            details. So why not make things easier on yourself with ibooking? An
            innovative platform designed with businesses in mind, it allows your
            customers to easily browse, secure and manage bookings in just a few
            clicks - leaving you free to focus on what you do best. And if
            you’re in the market for local services in your area, ibooking is
            great news too. With our clever system, it couldn’t be easier to
            make arrangements with your choice of provider.
          </p>
          <p className="para">
            Whether you’re a business looking for smart,
            <span style={{ color: "orange" }}>
              {" "}
              cloud-based booking system{" "}
            </span>
            or a customer searching for the best service, ibooking has got you
            covered
          </p>

          <p className="para">
            At ibooking, we provide a wide range of booking options for wedding
            services, car hire, coach hire, minibus hire, chauffeur services,
            event entertainment, wedding catering & event catering, mobile hair
            and makeup... and much more. Our business users are scattered all
            over the UK covering most locations including London, Birmingham,
            Manchester, Leeds, Derby, Coventry, Nottingham, Yorkshire, Bristol,
            Kent, Essex, Surrey, Berkshire, Middlesex, Bristol, Cardiff,
            Newport, Swansea, Edinburgh, Glasgow and many more cities.
          </p>
          <p className="para">
            So whether you’re a limousine hire company wanting to give your
            booking system a professional touch - or a bride looking to secure
            the best services for your special day - you don’t need to look any
            further.
          </p>
        </div>
      </div>
      <div className="Part3">
        <h2 className="title2" style={{ paddingLeft: "70px" }}>
          Popular services near you
        </h2>
        <div className="service1">
          <Carousel responsive={responsive}>
            {detail.map((detail) => (
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="pic"
                  src="https://ibooking.co.uk/custom_assets/image/ibooking-hero-image.jpg"
                  class="card-img-top"
                  alt="..."
                  style={{ textAlign: "center" }}
                />
                <div className="card-body">
                  <p className="card-text">{detail.name}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="Part4">
        <h2 className="title2" style={{ paddingLeft: "70px" }}>
          Featured businesses near you
        </h2>
        <div className="service">
          {detail.map((detail) => (
            <div className="card" style={{ width: "18rem" }}>
              <img
                className="pic"
                src="https://ibooking.co.uk/custom_assets/image/ibooking-hero-image.jpg"
                class="card-img-top"
                alt="..."
                style={{ textAlign: "center" }}
              />
              <div className="card-body">
                <h5 className="card-title">Modern, Well Appointed Room</h5>
                <i class="fa fa-star" style={{ color: "yellow" }}></i>
                <i class="fa fa-star" style={{ color: "yellow" }}></i>
                <i class="fa fa-star" style={{ color: "yellow" }}></i>
                <i class="fa fa-star" style={{ color: "yellow" }}></i>
                <i class="fa fa-star" style={{ color: "yellow" }}></i>
                <p className="card-text">{detail.address}</p>
              </div>
            </div>
          ))}
          ;
        </div>
      </div>
      <div className="Part5">
        <div className="sub51">
          <h2 className="title2" data-aos="fade-right">
            Supercharge your business with effective booking software
          </h2>
          <p data-aos="fade-right">
            ibooking is two-sided! So whether you are a customer looking to book
            a service or a business looking for a great (cloud-based) booking
            software.
          </p>
        </div>
        <div className="sub52">
          <div className="Mini" data-aos="fade-left">
            <h2 className="title2">2,000+</h2>
            <p>Businesses use ibooking.</p>
            <h2 className="title2">Nationwide</h2>
            <p>We cover all of UK</p>
          </div>
          <div className="Mini" data-aos="fade-left">
            <h2 className="title2">1.5M+</h2>
            <p>Customers have used ibooking.</p>
            <h2 className="title2">It's FREE</h2>
            <p>All standard features are free.</p>
          </div>
        </div>
      </div>
      <div className="Part6">
        <div className="sub61">
          <img
            data-aos="fade-right"
            className="image6"
            src="https://ibooking.co.uk/custom_assets/image/download-image.png"
            alt=""
          />
        </div>
        <div className="sub62">
          <h2 className="title2" data-aos="fade-left">
            {" "}
            Mobile apps coming soon!
          </h2>
          <p className="para" data-aos="fade-left">
            Our team are working hard to develop awesome apps for our customers
            as well as our partners. The ibooking apps will be available in iOS
            and Android.
          </p>
          <button
            type="button"
            class="btn"
            style={{
              margin: "5px",
              backgroundColor: "white",
              borderColor: "black"
            }}
          >
            <i class="fa fa-google" aria-hidden="true"></i>
            <b>Goole play</b>
          </button>
          <button
            type="button"
            class="btn"
            style={{
              margin: "5px",
              backgroundColor: "white",
              borderColor: "black"
            }}
          >
            <i class="fa fa-apple" aria-hidden="true"></i>
            <b>App store</b>
          </button>
        </div>
      </div>
      <div className="Part7">
        <div className="sub71">
          <h2
            className="title2"
            data-aos="fade-right"
            style={{ color: "white" }}
          >
            {" "}
            Finally! A booking software that really works for my business
          </h2>
          <p style={{ color: "white" }} data-aos="fade-right">
            Give your business the perfect tool to grow and become more
            efficient. ibooking is designed to make the customer journey and the
            business process much more convenient, allowing you to focus on
            running the business.
          </p>
          <button
            data-aos="fade-right"
            type="button"
            class="btn"
            style={{ margin: "5px", backgroundColor: "white" }}
          >
            Learn More
          </button>
        </div>
        <div className="sub72">
          <img
            data-aos="fade-left"
            className="image7"
            src="https://ibooking.co.uk/custom_assets/image/image-1.png"
            alt=""
          />
        </div>
      </div>
      <div className="Part5">
        <div className="sub51">
          <h2 className="title2" data-aos="fade-right">
            Booking management software to suit your business
          </h2>
          <p data-aos="fade-right">
            Simple, flexible and powerful booking software for your business,
            and it's totally FREE!
          </p>
          <div>
            {" "}
            <button
              data-aos="fade-right"
              type="button"
              class="btn"
              style={{
                margin: "5px",
                backgroundColor: "whitesmoke",
                width: "100%"
              }}
            >
              <h2>
                Coach and bus hire booking software
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </h2>
            </button>
          </div>
          <div>
            {" "}
            <button
              data-aos="fade-right"
              type="button"
              class="btn"
              style={{
                margin: "5px",
                backgroundColor: "whitesmoke",
                width: "100%"
              }}
            >
              <h2>
                Bouncy castle hire booking software
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </h2>
            </button>
          </div>
          <div>
            {" "}
            <button
              data-aos="fade-right"
              type="button"
              class="btn"
              style={{
                margin: "5px",
                backgroundColor: "whitesmoke",
                width: "100%"
              }}
            >
              <h2>
                Mobile makeup artist booking software
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </h2>
            </button>
          </div>
          <div>
            {" "}
            <button
              data-aos="fade-right"
              type="button"
              class="btn"
              style={{ margin: "5px", backgroundColor: "whitesmoke" }}
            >
              <p>Learn more about our cloud based booking software</p>
            </button>
          </div>
        </div>
        <div className="sub52">
          <img
            src="https://ibooking.co.uk/custom_assets/image/career_image.png"
            alt=""
            className="pic1"
          />
        </div>
      </div>
      <div className="Part5" style={{ backgroundColor: "#f2f2f7" }}>
        <div className="sub51">
          <h3>About ibooking</h3>
          <p className="para">
            ibooking.co.uk is a cloud based booking management software which
            allows small businesses to manage their own bookings with
            convenience. ...<span style={{ color: "orange" }}> Read more</span>
          </p>
          <button
            type="button"
            class="btn"
            style={{ margin: "5px", backgroundColor: "white" }}
          >
            Business
          </button>
          <button
            type="button"
            class="btn "
            style={{ margin: "5px", backgroundColor: "orange" }}
          >
            Customer
          </button>
        </div>
        <div className="sub52">
          <div className="Mini">
            <h3>Company</h3>
            <p className="para">Search Item</p>
            <p className="para">Pricing</p>
            <p className="para">Business Profile</p>
            <p className="para">Contact</p>
          </div>
          <div className="Mini">
            <h3>Legal Stuff</h3>
            <p className="para">Privacy Policy</p>
            <p className="para">Terms & Conditions</p>
            <p className="para">FAQ</p>
          </div>
          <div className="Mini">
            <h3>Get In Touch</h3>
            <i
              class="fa fa-twitter fa-2x"
              style={{ color: "#808080", margin: "10px" }}
            ></i>
            <i
              class="fa fa-facebook-official fa-2x"
              style={{ color: "#808080", margin: "10px" }}
            ></i>
            <i
              class="fa fa-instagram fa-2x"
              style={{ color: "#808080", margin: "10px" }}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}
