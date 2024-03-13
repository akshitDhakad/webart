import Layout from "./components/layout.js";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa6";
import Testinomial from "./components/testinomial.js";
import FlipCard from "./components/flipCard.js";
import Carousel from "./components/carousel.js";
import ClientCard from "./components/clientCard.js";

export default function Home() {
  const backgroundImg = {
    backgroundImage: `url('https://media.istockphoto.com/id/1401793336/photo/gaming-personal-computer-and-ultrawide-monitor-in-neon-light.jpg?s=1024x1024&w=is&k=20&c=QBOqGW3ZWAJbe2HB3iNdKhwgOmOSTkSNEunbjq5Jv5I=')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="relative">
      <Layout>
        {/* Hero Section  */}
        <div className="abosolute top-0 h-screen flex bg-theme-bg-dark">
          <div className="relative max-w-6xl m-auto px-10 py-5">
            <div
              className="absolute top-0 left-0 h-full w-2/5"
              style={backgroundImg}
            ></div>
            <div className="absolute top-0 left-0 h-full w-2/5 inset-0 bg-purple-100 bg-opacity-10 backdrop-blur-md"></div>
            <div className="grid grid-cols-2 gap-x-20 gap-y-10 max-w-4xl m-auto">
              <div className="col-span-2 flex flex-col gap-5">
                <div>
                  <h2 className="text-3xl text-white font-semibold tracking-wide font-theme-font">
                    Custom Web
                  </h2>
                </div>
                <div>
                  <h1 className="text-6xl text-white font-bold tracking-wide font-theme-font">
                    Application Development
                  </h1>
                </div>
              </div>
              <div></div>
              <div>
                <p className="text-white text-start tracking-wide font-theme-font">
                  Looking for turnkey custom web application development
                  services? We are Devox Software – a leading custom web
                  application development company with a recognized stand on the
                  market and a proven track record of completed projects.
                </p>
                <div className="flex items-center gap-x-3 mt-5">
                  <span className="text-white">Let'talk</span>
                  <button className="p-3 font-theme-font text-sm bg-purple-600 text-white rounded-full hover:bg-white hover:text-purple-600 hover:shadow-md hover:shadow-slate-200 transition-color delay-250">
                    <HiOutlineArrowLongRight className="text-lg" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Pages Section  */}
        <section>
          <div className="relative max-w-6xl py-20 grid grid-cols-2 gap-x-10 gap-y-10  m-auto">
            <span class="absolute font-semibold text-[12rem] font-theme-font leading-none opacity-10 top-[-25px] left-[-125px] text-gray-500">
              Devox
            </span>
            {/* heading  */}
            <div className="col-span-2 flex flex-col ">
              <div className="mb-2">
                <h2 className="text-4xl text-gray-600 font-bold tracking-wide font-theme-font">
                  About
                </h2>
              </div>
              <div className="mb-4">
                <h1 className="text-5xl text-black font-bold tracking-wide font-theme-font">
                  Devox Software
                </h1>
              </div>
            </div>
            {/* left content */}
            <div className="grid grid-cols-12">
              <div className="col-span-2 flex flex-col justify-around items-start">
                <FaFacebook className="text-3xl" />
                <FaLinkedin className="text-3xl" />
                <FaInstagram className="text-3xl" />
              </div>
              <div className="col-span-10">
                <p className="text-gray-900 text-start tracking-wide font-theme-font mb-2">
                  Devox Software is an international IT outsourcing company with
                  development facilities in five countries – Poland, Romania,
                  Azerbaijan, Ukraine and Georgia.
                </p>
                <p className="text-gray-900 text-start tracking-wide font-theme-font mb-2">
                  Our key value is our flexibility. It’s you who chooses the
                  engagement model that works best for your project:
                  outsourcing, outstaffing, dedicated team or staff
                  augmentation.
                </p>
                <p className="text-gray-900 text-start tracking-wide font-theme-font mb-2">
                  The benefit you get with us is facilitation. Digital
                  transformation has never been easier – all you need to do is
                  just tell us your requirements.
                </p>
              </div>
            </div>
            {/* Right content */}
            <div>
              <p className="text-gray-900 text-start tracking-wide font-theme-font mb-2">
                We will advise you on the fitting solution, resources, and
                timeframes for your business. Our main asset is people. We hire
                top software developers to run your project from initial
                estimation to release.
              </p>
              <p className="text-gray-900 text-start tracking-wide font-theme-font mb-2">
                Devox Software achieves a well-planned development process,
                competent management, and efficient communication due to a
                thorough selection of team members for our company.
              </p>
              <div className="flex items-center justify-end gap-x-3 mt-5">
                <span className="text-gray-600  font-bold">Discover</span>
                <button className="p-3 text-lg  bg-purple-600 text-white rounded-3xl font-semibold hover:bg-white hover:text-purple-600 hover:shadow-md hover:shadow-purple-600 hover:shoadow-2xl transition-color delay-150">
                  <HiOutlineArrowLongRight className="text-lg" />
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* testinomials section  */}
        <section>
          <div className="relative max-w-6xl py-20 grid grid-cols-2 gap-x-10 gap-y-10  m-auto">
            <span class="absolute font-semibold text-[12rem] font-theme-font leading-none opacity-10 top-[-25px] left-[-125px] text-gray-500">
              Testimonials
            </span>
            {/* heading  */}
            <div className="col-span-2 flex flex-col ">
              <div className="mb-2">
                <h2 className="text-4xl text-gray-600 font-bold tracking-wide font-theme-font">
                  Testimonials
                </h2>
              </div>
              <div className="mb-4">
                <h1 className="text-5xl text-black font-bold tracking-wide font-theme-font">
                  Client
                </h1>
              </div>
              <Testinomial />
            </div>
          </div>
        </section>
        {/* Our Services section  */}
        <section>
          <div className="relative max-w-6xl py-20 grid grid-cols-2 gap-x-10 gap-y-10  m-auto">
            <span class="absolute font-semibold text-[12rem] font-theme-font leading-none opacity-10 top-[-25px] right-[-125px] text-gray-500">
              Our Services
            </span>
            {/* heading  */}
            <div className="col-span-2 flex flex-col ">
              <div className="mb-2">
                <h2 className="text-4xl text-gray-600 font-bold tracking-wide font-theme-font">
                  Our
                </h2>
              </div>
              <div className="mb-4">
                <h1 className="text-5xl text-black font-bold tracking-wide font-theme-font">
                  Services
                </h1>
              </div>
            </div>
            {/* left content */}
            <div className="col-span-2 grid grid-cols-5 justify-center">
              <FlipCard
                title={"Web Development"}
                description={
                  "We take care of your product on the development stage. Our IT outsourcing company creates custom web dev solutions for startups and enterprises. We listen to your ideas carefully and deliver the exact result."
                }
                iconURl={
                  "https://cdn.iconscout.com/icon/premium/png-512-thumb/web-development-1483426-1256384.png?f=webp&w=512"
                }
              />
              <FlipCard
                title={"Mobile Development"}
                description={
                  "Convert more clients by reaching out to your target audience via mobile apps. Our software development company will help you with building iOS, Android and cross-platform mobile development solutions."
                }
                iconURl={
                  "https://cdn-icons-png.freepik.com/256/7075/7075373.png?ga=GA1.1.705946748.1706705440&"
                }
              />
              <FlipCard
                title={"Quality Assurance"}
                description={
                  "Quality is our priority. We have a team of QA engineers who will check if your software is bug-free right in the course of development. Alternatively, they will test your ready app before release."
                }
                iconURl={
                  "https://cdn-icons-png.freepik.com/256/3749/3749988.png?ga=GA1.1.705946748.1706705440&"
                }
              />
              <FlipCard
                title={"UI/UX Design"}
                description={
                  "Eye-catching and user-friendly design is key to conversion. Our qualified UI/UX experts will bring your idea from concept to full-fledged responsive design with engaging elements created specially for your target audience."
                }
                iconURl={
                  "https://cdn-icons-png.freepik.com/256/2335/2335265.png?ga=GA1.1.705946748.1706705440&"
                }
              />
              <FlipCard
                title={"DevOps"}
                description={
                  "Ensure the risk-free and cost-effective release of your application. Our DevOps specialists will secure a smooth and continuous deployment process and provide ongoing support of your software."
                }
                iconURl={
                  "https://cdn-icons-png.freepik.com/256/12219/12219902.png?ga=GA1.1.705946748.1706705440&"
                }
              />
            </div>
            <div className="col-span-2 flex justify-center items-center">
              <button className="px-20 py-3 font-theme-font text-lg  bg-purple-600 text-white rounded-3xl font-semibold hover:bg-white hover:text-purple-600 hover:shadow-md hover:shadow-purple-600 hover:shoadow-2xl transition-color delay-150">
                Contact Us
              </button>
            </div>
          </div>
        </section>
        {/* Our Case Studies  */}
        <section>
          {/* item 1 */}
          <div className="relative max-w-6xl py-20 grid grid-cols-2 gap-x-10 gap-y-10  m-auto">
            <span class="absolute font-semibold text-[12rem] font-theme-font leading-none opacity-10 top-[-25px] left-[-125px] text-gray-500">
              Case Studies
            </span>
            {/* heading  */}
            <div className="col-span-2 flex flex-col ">
              <div className="mb-2">
                <h2 className="text-4xl text-gray-600 font-bold tracking-wide font-theme-font">
                  Our
                </h2>
              </div>
              <div className="mb-4">
                <h1 className="text-5xl text-black font-bold tracking-wide font-theme-font">
                  Case Studies
                </h1>
              </div>
            </div>
            {/* Left content */}
            <div>
              <h3 className="font-bold text-2xl tracking-wide mb-5">
                Function4
              </h3>
              <h4 className="font-semibold tracking-wide text-md mb-2 text-gray-600">
                Event Management Platform, USA
              </h4>
              <p className="text-gray-400 text-start text-sm tracking-wide leading-5 font-theme-font mb-2">
                Function4 is a USA-based professional event ecosystem that
                offers a simple, user-friendly discovery venue for the financial
                services sector. The enterprise event management software
                features a single, real-time dashboard with zero setup for event
                attendees, hosts, and sponsors. Function4 also provides
                discovery, data, and tools to help the right people discover the
                right events.
              </p>

              <div className="flex items-center justify-end gap-x-3 mt-5">
                <span className="text-gray-600  font-bold">View Case</span>
                <button className="p-3 text-lg  bg-purple-600 text-white rounded-3xl font-semibold hover:bg-white hover:text-purple-600 hover:shadow-md hover:shadow-purple-600 hover:shoadow-2xl transition-color delay-150">
                  <HiOutlineArrowLongRight className="text-lg" />
                </button>
              </div>
            </div>
            {/* Right content */}
            <div className="flex items-center justify-center">
              <div className="w-full h-56 rounded-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover object-center"
                  src="https://t4.ftcdn.net/jpg/01/64/26/27/360_F_164262701_BsbY2qe8M3fvvB4cBWsFLgeEXhgEukcw.jpg"
                  alt="Our Case Studies "
                />
              </div>
            </div>
          </div>

          {/* item2 */}
          <div className="max-w-6xl py-20 grid grid-cols-2 gap-x-10 gap-y-10  m-auto">
            {/* Left content */}
            <div className="flex items-center justify-center">
              <div className="w-full h-56 rounded-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover object-center"
                  src="https://t4.ftcdn.net/jpg/01/64/26/27/360_F_164262701_BsbY2qe8M3fvvB4cBWsFLgeEXhgEukcw.jpg"
                  alt="Our Case Studies "
                />
              </div>
            </div>
            {/* Right content */}
            <div>
              <h3 className="font-bold text-2xl tracking-wide mb-5">
                ActivePlace
              </h3>
              <h4 className="font-semibold text-md tracking-wide mb-2 text-gray-600">
                dia platform with a marketplace fWellness social network and
                meeature, Australia
              </h4>
              <p className="text-gray-400 text-start text-sm tracking-wide leading-5 font-theme-font mb-2">
                ActivePlace is a social platform dedicated to health, fitness,
                and an active lifestyle. It is a three-sided network that
                connects people with like-minded individuals, mentors, and
                businesses – all related to physical activity and healthy
                living. The company approached the development team to create a
                wellness app that would cater to different categories of users
                and provide personalized functionality to each member group. The
                main goal was to build a unique project from scratch that
                combined social media and marketplace features.
              </p>

              <div className="flex items-center justify-end gap-x-3 mt-5">
                <span className="text-gray-600  font-bold">View Case</span>
                <button className="p-3 text-lg  bg-purple-600 text-white rounded-3xl font-semibold hover:bg-white hover:text-purple-600 hover:shadow-md hover:shadow-purple-600 hover:shoadow-2xl transition-color delay-150">
                  <HiOutlineArrowLongRight className="text-lg" />
                </button>
              </div>
            </div>
          </div>

          {/* item 3 */}
          <div className="max-w-6xl py-20 grid grid-cols-2 gap-x-10 gap-y-10  m-auto">
            {/* Left content */}
            <div>
              <h3 className="font-bold text-2xl tracking-wide mb-5">ILVE</h3>
              <h4 className="font-semibold text-md tracking-wide mb-2 text-gray-600">
                Event Management Platform, USA
              </h4>
              <p className="text-gray-400 text-start text-sm tracking-wide leading-5 font-theme-font mb-2">
                ILVE is a global manufacturer of gas and electric household
                cooking appliances with a reach across 40 countries worldwide.
                Since 1975, the company has been known as a niche brand
                specializing in developing an extensive range of built-in ovens
                and cookers for both commercial and domestic use. ILVE was
                looking to create a showroom assistant to increase the level of
                sales and make it smooth for the end client. Besides the end
                client-facing part, a variety of managerial dashboards were
                created to allow sales consultants and business managers to
                execute their functions and have everything controlled in one
                place.
              </p>

              <div className="flex items-center justify-end gap-x-3 mt-5">
                <span className="text-gray-600  font-bold">View Case</span>
                <button className="p-3 text-lg  bg-purple-600 text-white rounded-3xl font-semibold hover:bg-white hover:text-purple-600 hover:shadow-md hover:shadow-purple-600 hover:shoadow-2xl transition-color delay-150">
                  <HiOutlineArrowLongRight className="text-lg" />
                </button>
              </div>
            </div>
            {/* Right content */}
            <div className="flex items-center justify-center">
              <div className="w-full h-56 rounded-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover object-center"
                  src="https://t4.ftcdn.net/jpg/01/64/26/27/360_F_164262701_BsbY2qe8M3fvvB4cBWsFLgeEXhgEukcw.jpg"
                  alt="Our Case Studies "
                />
              </div>
            </div>
          </div>
        </section>

        {/* Type of Web Services we build*/}
        <section>
          <div className="relative max-w-6xl py-20 grid grid-cols-2 gap-x-10  m-auto">
            <span class="absolute font-semibold text-[12rem] font-theme-font tracking-wide leading-none opacity-10 top-0 left-[1/2] text-graye-500">
              We Build
            </span>
            {/* heading  */}
            <div className="col-span-2 flex flex-col ">
              <div className="mb-2">
                <h2 className="text-4xl text-gray-600 font-bold tracking-wide font-theme-font">
                  Types of Web Solutions
                </h2>
              </div>
              <div className="mb-4">
                <h1 className="text-5xl text-black font-bold tracking-wide font-theme-font">
                  We Build
                </h1>
              </div>
            </div>

            {/* left content */}
            <div className="col-span-2">
              <Carousel />
            </div>

            <div></div>
          </div>
        </section>

        {/* Custom Web App Development Services  */}
        <section>
          <div className="relative max-w-6xl py-20 grid grid-cols-2 gap-x-10 gap-y-10  m-auto">
            <span class="absolute font-semibold text-[12rem] font-theme-font leading-none opacity-10 top-0 left-[1/2] text-graye-500">
              We Provide
            </span>
            {/* heading  */}
            <div className="col-span-2 flex flex-col ">
              <div className="mb-2">
                <h2 className="text-4xl text-gray-600 font-bold tracking-wide font-theme-font">
                  Custom Web App Development Services
                </h2>
              </div>
              <div className="mb-4">
                <h1 className="text-5xl text-black font-bold tracking-wide font-theme-font">
                  We Provide
                </h1>
              </div>
            </div>

            {/* item 1 */}
            <div>
              <h3 className="font-bold text-2xl mb-5 text-red-600">
                Web app development
              </h3>

              <p className="text-gray-400 text-start text-sm tracking-wide leading-5 font-theme-font mb-2">
                Our custom web application development company offers a full
                range of tailored solutions that meet and exceed your business
                requirements. Each project is unique and we make sure your needs
                fully click with the tech solution.
              </p>
            </div>
            {/* item 2 */}
            <div>
              <h3 className="font-bold text-2xl mb-5 text-yellow-600">
                Progressive web app
              </h3>

              <p className="text-gray-400 text-start text-sm tracking-wide leading-5  font-theme-font mb-2">
                Need a native-like app experience with website-like performance?
                Leverage our expertise in building PWAs for cross-platform
                experience with enhanced page-load speed and availability.
              </p>
            </div>

            {/* item 3 */}
            <div>
              <h3 className="font-bold text-2xl mb-5 text-orange-600">
                Web app consulting
              </h3>

              <p className="text-gray-400 text-start text-sm tracking-wide leading-5  font-theme-font mb-2">
                Need some expert advice? Our custom web application development
                services company will consult on building the exact type of web
                software your business needs.
              </p>
            </div>

            {/* item 4 */}
            <div>
              <h3 className="font-bold text-2xl mb-5 text-green-600">
                Web app re-engineering
              </h3>

              <p className="text-gray-400 text-start text-sm tracking-wide leading-5  font-theme-font mb-2">
                Step up your tech strategy by transforming outdated software
                into robust custom web application . Our team of web developers
                assists in application re-engineering for you to harness the
                latest technologies and environments.
              </p>
            </div>
            {/* item 5 */}
            <div>
              <h3 className="font-bold text-2xl mb-5 text-blue-600">
                Front-end development
              </h3>
              <p className="text-gray-400 text-start text-sm tracking-wide leading-5  font-theme-font mb-2">
                Our UX/UI web designers deliver a supreme experience for
                end-users through catchy and sleek design. We take the best from
                JavaScript to build responsive custom web app developer
                solutions.
              </p>
            </div>
            {/* item 6 */}
            <div>
              <h3 className="font-bold text-2xl mb-5 text-pink-600">
                Back-end development
              </h3>

              <p className="text-gray-400 text-start text-sm tracking-wide leading-5  font-theme-font mb-2">
                Get scalable back-end solutions to support mission-critical
                processes. As a global custom web application development
                company, we have gathered a winning tech stack to ensure a solid
                architecture and advanced data structures.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits of our Web App Development Services */}
        <section>
          <div className="relative max-w-6xl py-20 grid grid-cols-2 gap-x-10 gap-y-10  m-auto">
            <span class="absolute font-semibold text-[12rem] font-theme-font leading-none opacity-10 top-[-25px] left-[-125px] text-gray-500">
              Benefits
            </span>
            {/* heading  */}
            <div className="col-span-2 flex flex-col ">
              <div className="mb-2">
                <h2 className="text-4xl text-gray-600 font-bold tracking-wide font-theme-font">
                  Benefits of our
                </h2>
              </div>
              <div className="mb-4">
                <h1 className="text-5xl text-black font-bold tracking-wide font-theme-font">
                  Web App Development Services
                </h1>
              </div>
            </div>
            {/* left content */}
            <div className="col-span-2 grid grid-cols-3 gap-10">
              {/* item 1 */}
              <div className="h-72 w-96 p-10 flex items-center rounded-3xl shadow-xl bg-slate-50 hover:shadow-purple-600 relative">
                <span class="absolute font-bold text-8xl font-theme-font leading-none opacity-40 top-6 left-6 text-purple-600">
                  01
                </span>
                <div>
                  <h4 className="mb-4 text-xl font-bold font-theme-font">
                    Scalability
                  </h4>
                  <p className="text-gray-400 text-start text-sm tracking-wide leading-5 font-theme-font">
                    Our solutions adapt to your business growth and efficiently
                    sustain an influx of new users. Deliver high web performance
                    and do it every time.
                  </p>
                </div>
              </div>
              {/* item 2 */}
              <div className="relative h-72 w-96 p-10 flex items-center rounded-3xl shadow-xl hover:shadow-pink-600 bg-slate-50">
                <span class="absolute font-bold text-8xl font-theme-font leading-none opacity-40 top-6 left-6 text-pink-600">
                  02
                </span>
                <div>
                  <h4 className="mb-4 text-xl font-bold font-theme-font">
                    Latest technology
                  </h4>
                  <p className="text-gray-400 text-start text-sm tracking-wide leading-5   font-theme-font">
                    Our custom web application development services keeps up
                    with the tech trends in web development so you have a
                    competitive edge on the market.
                  </p>
                </div>
              </div>
              {/* item 3 */}
              <div className="relative h-72 w-96 p-10 flex items-center rounded-3xl shadow-xl hover:shadow-orange-600 bg-slate-50">
                <span class="absolute font-bold text-8xl leading-none opacity-40 top-6 left-6 font-theme-font text-orange-600">
                  03
                </span>
                <div>
                  <h4 className="mb-4 text-xl font-bold font-theme-font">
                    Data security
                  </h4>
                  <p className="text-gray-400 text-start text-sm tracking-wide leading-5 font-theme-font">
                    We are committed to providing a high level of security for
                    your web application. For that, our developers embed
                    consistent security controls into the solution to guard off
                    malicious agents.
                  </p>
                </div>
              </div>
              {/* item 4 */}
              <div className="relative h-72 w-96 p-10 flex items-center rounded-3xl shadow-xl hover:shadow-green-600 bg-slate-50">
                <span class="absolute font-bold text-8xl leading-none opacity-40 top-6 left-6 font-theme-font text-green-600">
                  04
                </span>
                <div>
                  <h4 className="mb-4 text-xl font-bold font-theme-font">
                    Relevant talent
                  </h4>
                  <p className="text-gray-400 text-start text-sm tracking-wide leading-5 font-theme-font">
                    As an established custom web application development
                    services company, we hand-pick each developer to fit your
                    project needs. All our web developers have relevant
                    certifications and boast in-depth industry expertise
                  </p>
                </div>
              </div>
              {/* item 5 */}
              <div className="relative h-72 w-96 p-10 flex items-center rounded-3xl shadow-xl hover:shadow-blue-600 bg-slate-50">
                <span class="absolute font-bold text-8xl leading-none opacity-40 top-6 left-6 font-theme-font text-blue-600">
                  05
                </span>
                <div>
                  <h4 className="mb-4 text-xl font-bold font-theme-font">
                    Dedicated web development
                  </h4>
                  <p className="text-gray-400 text-start text-sm tracking-wide leading-5 font-theme-font">
                    Prioritize custom web application development company by
                    hiring a dedicated team for extra control. We assign
                    developers exclusivity to your projects with their undivided
                    attention and tailored skills.
                  </p>
                </div>
              </div>
              {/* item 6 */}
              <div className="relative h-72 w-96 p-10 flex items-center rounded-3xl shadow-xl hover:shadow-yellow-600 bg-slate-50">
                <span class="absolute font-bold text-8xl leading-none opacity-40 top-6 left-6 font-theme-font text-yellow-600">
                  06
                </span>
                <div>
                  <h4 className="mb-4 text-xl font-bold font-theme-font">
                    End-to-end development
                  </h4>
                  <p className="text-gray-400 text-start text-sm tracking-wide leading-5 font-theme-font">
                    We provide end-to-end custom web application development
                    services that cover every collaboration stage. Whether it’s
                    prototyping or migrating, our team can step in to support
                    the process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our CLients  */}
        <section>
          <div className="relative max-w-6xl py-20 grid grid-cols-2 gap-x-10  m-auto">
            <span class="absolute font-semibold text-[12rem] font-theme-font tracking-wide leading-none opacity-10 top-0 left-[1/2] text-graye-500">
              Clients
            </span>
            {/* heading  */}
            <div className="col-span-2 flex flex-col ">
              <div className="mb-2">
                <h2 className="text-4xl text-gray-600 font-bold tracking-wide font-theme-font">
                  Our
                </h2>
              </div>
              <div className="mb-4">
                <h1 className="text-5xl text-black font-bold tracking-wide font-theme-font">
                  Clients
                </h1>
              </div>
            </div>

            <div className="col-span-2">
              <ClientCard />
            </div>
          </div>
        </section>

        {/* Our Development Process  */}

        <section>
          <div className="relative max-w-6xl py-20 grid grid-cols-2 gap-x-10 gap-y-10  m-auto">
            <span class="absolute font-semibold text-[12rem] font-theme-font leading-none opacity-10 top-[-25px] left-[-125px] text-gray-500">
              Development
            </span>
            {/* heading  */}
            <div className="col-span-2 flex flex-col ">
              <div className="mb-2">
                <h2 className="text-4xl text-gray-600 font-bold tracking-wide font-theme-font">
                  Our
                </h2>
              </div>
              <div className="mb-4">
                <h1 className="text-5xl text-black font-bold tracking-wide font-theme-font">
                  Development Process
                </h1>
              </div>
            </div>
            {/* left content */}
            <div className="col-span-2 grid grid-cols-3 gap-10">
              {/* item 1 */}
              <div className="h-72 w-96 p-10 flex items-center rounded-3xl shadow-xl bg-slate-50 relative">
                <div class="absolute top-5 left-5 h-12 w-12 font-bold text-8xl font-theme-font leading-none opacity-40">
                  <img
                    className="h-full w-full object-cover object-center"
                    src="https://cdn-icons-png.freepik.com/256/7387/7387688.png?ga=GA1.1.705946748.1706705440&"
                    alt="Discovery icon"
                  />
                </div>
                <div>
                  <h4 className="mb-4 text-xl font-bold font-theme-font">
                    Discovery
                  </h4>
                  <p className="text-gray-400 text-start text-sm tracking-wide leading-5 font-theme-font">
                    Our collaboration starts with an in-depth analysis of your
                    business needs and market trends. We assess the solution
                    viability and product success by documenting main
                    functionality and milestones.
                  </p>
                </div>
              </div>
              {/* item 2 */}
              <div className="relative h-72 w-96 p-10 flex items-center rounded-3xl shadow-xl bg-slate-50">
                <div class="absolute  top-5 left-5 h-12 w-12  font-bold text-8xl font-theme-font leading-none opacity-40  ">
                  <img
                    className="w-full h-full object-cover object-center"
                    src="https://cdn-icons-png.freepik.com/256/1336/1336494.png?ga=GA1.1.705946748.1706705440&"
                    alt="Design and development icon"
                  />
                </div>
                <div>
                  <h4 className="mb-4 text-xl font-bold font-theme-font">
                    Design and development
                  </h4>
                  <p className="text-gray-400 text-start text-sm tracking-wide leading-5   font-theme-font">
                    Here, our web designers breathe life into the approved
                    wireframes, while a team of web developers transforms
                    designs into a working model with scalability in mind.
                  </p>
                </div>
              </div>

              {/* item 3 */}
              <div className="relative h-72 w-96 p-10 flex items-center rounded-3xl shadow-xl bg-slate-50">
                <div class="absolute top-5 left-5 h-12 w-12  font-bold text-8xl leading-none opacity-40  font-theme-font ">
                  <img
                    className="w-full h-full object-center object-cover"
                    src="https://cdn-icons-png.freepik.com/256/4296/4296532.png?ga=GA1.1.705946748.1706705440&"
                    alt="Full-cycle testing"
                  />
                </div>
                <div>
                  <h4 className="mb-4 text-xl font-bold font-theme-font">
                    Full-cycle testing
                  </h4>
                  <p className="text-gray-400 text-start text-sm tracking-wide leading-5 font-theme-font">
                    Our top QA engineers perform rigorous testing, including
                    front-end testing, database testing, server testing, and
                    others. Thus, we assure your solution is bug-free.
                  </p>
                </div>
              </div>
              {/* item 4 */}
              <div className="relative h-72 w-96 p-10 flex items-center rounded-3xl shadow-xl bg-slate-50">
                <div class="absolute top-5 left-5 h-12 w-12  font-bold text-8xl leading-none opacity-40  font-theme-font ">
                  <img
                    className="w-full h-full object-center object-cover"
                    src="https://cdn-icons-png.freepik.com/256/8099/8099542.png?ga=GA1.1.705946748.1706705440&"
                    alt="Prototyping and MVP development icon"
                  />
                </div>
                <div>
                  <h4 className="mb-4 text-xl font-bold font-theme-font">
                    Prototyping and MVP development
                  </h4>
                  <p className="text-gray-400 text-start text-sm tracking-wide leading-5 font-theme-font">
                    Complex web applications are implemented as MVPs first to
                    predict future results and enhance mission-critical
                    features.
                  </p>
                </div>
              </div>
              {/* item 5 */}
              <div className="relative h-72 w-96 p-10 flex items-center rounded-3xl shadow-xl bg-slate-50">
                <div class="absolute top-5 left-5 h-12 w-12  font-bold text-8xl leading-none opacity-40  font-theme-font ">
                  <img
                    className="w-full h-full object-center object-cover"
                    src="https://cdn-icons-png.freepik.com/256/2082/2082945.png?ga=GA1.1.705946748.1706705440&"
                    alt="Launch and maintenance icon"
                  />
                </div>
                <div>
                  <h4 className="mb-4 text-xl font-bold font-theme-font">
                    Launch and maintenance
                  </h4>
                  <p className="text-gray-400 text-start text-sm tracking-wide leading-5 font-theme-font">
                    Finally, we roll out your solution to the server. Our
                    developers then work on the user feedback and provide
                    post-deployment support and maintenance.
                  </p>
                </div>
              </div>
              {/* item 6 */}
              <div className="relative h-72 w-96 p-10 flex items-center rounded-3xl shadow-xl bg-slate-50">
                <div class="absolute top-5 left-5 h-12 w-12  font-bold text-8xl leading-none opacity-40  font-theme-font">
                  <img
                    className="w-full h-full object-center object-cover"
                    src="https://cdn-icons-png.freepik.com/256/12375/12375564.png?ga=GA1.1.705946748.1706705440&"
                    alt="End-to-end development icon"
                  />
                </div>
                <div>
                  <h4 className="mb-4 text-xl font-bold font-theme-font">
                    End-to-end development
                  </h4>
                  <p className="text-gray-400 text-start text-sm tracking-wide leading-5 font-theme-font">
                    We provide end-to-end custom web application development
                    services that cover every collaboration stage. Whether it’s
                    prototyping or migrating, our team can step in to support
                    the process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
}