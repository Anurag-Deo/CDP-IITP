import Head from "next/head";
import Navbar from "../components/navbar";
import Container from "../components/container";
import heroImg from "../public/img/hero.png";
import Image from "next/image";
import MultiSelectDropdown from "../components/MultiSelectDropdown";
import { useState } from "react";
import DisplayLottie from "../components/Lottie";
import { makePostRequest } from "../utils/makeRequest";


const SECTORS = [
  "SDE",
  "AI/ML",
  "Data Science",
  "Banking",
  "Quant",
  "Core",
  "Consulting",
  "Manufacturing",
  "Automobile",
  "Product Manager",
  "Finance"
];
const EVENTS = [
  "Guest Lecture",
  "Talks",
  "Hackathon",
  "Workshop",
  "Case Study",
  "Panel Discussion",
];

const Register = () => {
  const [sectors, setSectors] = useState([])
  const [events, setEvents] = useState([])
  const [companyname, setCompanyname] = useState('')
  const [peoplevisiting, setPeoplevisiting] = useState('')
  const [firstperson, setFirstperson] = useState('')
  const [contactperson, setContactperson] = useState('')
  const [secondperson, setSecondperson] = useState('')
  const [contactpersontwo, setContactpersontwo] = useState('')
  const [anyrequirements, setAnyrequirements] = useState('')

  const clickHandler = async (e) => {
    e.preventDefault()
    console.log(`clickeed ${process.env.FIREBASE_POST_REQUEST_URI}`)
    const response = await makePostRequest(process.env.FIREBASE_POST_REQUEST_URI, {
      companyname: companyname,
      sectors: sectors,
      peoplevisiting: peoplevisiting,
      firstperson: firstperson,
      contactperson: contactperson,
      secondperson: secondperson,
      contactpersontwo: contactpersontwo,
      events: events,
      anyrequirements: anyrequirements
    })
    console.log(response)
  }

  return (
    <>
      <Head>
        <title>Nextly - Free Nextjs & TailwindCSS Landing Page Template</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <>
        <Container className="flex flex-wrap ">
          <div className="flex items-center w-full lg:w-1/2">
            <div className="max-w-2xl mb-8">
              <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                Register as a Speaker
              </h1>


              <form className="max-w-sm mt-7">
                <div className="mb-5">
                  <label for="companyname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company Name</label>
                  <input type="companyname" id="companyname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Apple"
                    required onChange={(e) => { setCompanyname(e.target.value) }} />
                </div>
                <div className="mb-5">
                  <MultiSelectDropdown
                    formFieldName={"countries"}
                    options={SECTORS}
                    onChange={(selectedSectors) => {
                      // console.log("selectedCountries", selectedCountries);
                      setSectors(selectedSectors);
                    }}
                    prompt="Select the sector your company operates in"
                  />
                </div>
                <div className="mb-5">
                  <label for="peoplevisiting" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Number of People Visiting</label>
                  <input type="text" id="peoplevisiting" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="5" required
                    onChange={(e) => { setPeoplevisiting(e.target.value); }} />
                </div>
                <div className="mb-5">
                  <label for="firstperson" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name of the First Contact Person</label>
                  <input type="text" id="firstperson" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Aditya Kumar" required onChange={(e) => { setFirstperson(e.target.value); }}/>
                </div>
                <div className="mb-5">
                  <label for="contactperson" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact of the First Contact Person</label>
                  <input type="text" id="contactperson" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="8548344656" required onChange={(e) => { setContactperson(e.target.value); }}/>
                </div>
                <div className="mb-5">
                  <label for="secondperson" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name of the Second Contact Person</label>
                  <input type="text" id="secondperson" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Rohan Kumar" required onChange={(e) => { setSecondperson(e.target.value); }}/>
                </div>
                <div className="mb-5">
                  <label for="2ndcontactperson" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact of the Second Contact Person</label>
                  <input type="text" id="2ndcontactperson" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="9847654345" required onChange={(e) => { setContactpersontwo(e.target.value); }}/>
                </div>
                <div className="mb-5">
                  <MultiSelectDropdown
                    formFieldName={"countries"}
                    options={EVENTS}
                    onChange={(selectedEvents) => {
                      // console.debug("selectedCountries", selectedEvents);
                      setEvents(selectedEvents);
                    }}
                    prompt="Select the event you want to organize"
                  />
                </div>
                <div className="mb-5">
                  <label for="anyrequirements" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Any Requirements</label>
                  <input type="text" id="anyrequirements" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={(e) => { setAnyrequirements(e.target.value); }} />
                </div>
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={clickHandler}
                >Submit</button>
              </form>



            </div>
          </div>
          <div className="flex items-center justify-center w-full lg:w-1/2">
            <div className="">
              {/* <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            /> */}
              <DisplayLottie animationPath="https://lottie.host/8a6d6f7f-ad20-4ec7-a9fb-653c6159d134/ADQtfWGZ9M.json" />
            </div>
          </div>
        </Container>
      </>
      {/* <SectionTitle
        pretitle="Nextly Benefits"
        title=" Why should you use this landing page">
        Nextly is a free landing page & marketing website template for startups
        and indie projects. Its built with Next.js & TailwindCSS. And its
        completely open-source.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs">
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said">
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget /> */}
    </>
  );
}

export default Register;