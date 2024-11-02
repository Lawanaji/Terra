import React from "react";
import logo from "../../assets/img/terra.a5b4c8a8.svg";
import { Link, NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-[#1A1F1A] font-body-new h-[60%] text-white ">
      <main>
        {/* First Section */}
        <section className=" md:flex justify-between container py-24">
          <div className="">
            <header className="leading-8 mb-8">
              <h1 className="font-bold text-4xl">Stay in the loop</h1>
              <p className="text-sm">
                Be the first to get the latest updates from our fast-growing
                community of African youths.
              </p>
            </header>
            <form className="relative">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="&#9993; Email address"
                className=" py-5 w-full rounded bg-[#fff] text-black"
              />
              <button
                type="submit"
                className="bg-[#52A350] text-white py-2 px-6 rounded hover:bg-white hover:text-[#52A350] hover:scale-105 transition duration-300 absolute right-4 top-4"
              >
                Subscribe
              </button>
            </form>

            <div className="py-10  md:w-[40%] flex flex-col gap-10">
              <div className="flex w-full  gap-3 justify-start items-center text-lg font-semibold">
                <img src={logo} alt="" />
                <h1>Building Africa’s workforce</h1>
              </div>
              <p className="text-pretty">
                To achieve the future that we dream of, <br />
                we must equip ourselves with the required skills to put us on
                the radar of employers all over the world
              </p>
              <ul className="space-y-3">
                <Link to="CONTACT US">CONTACT US</Link>
                <p> Get in touch</p>
                <li>+234-907-957-7366</li>
                <a hre="tickets@signaladoc-ltd-aaqqmx.p.tawk.email">
                  hello@sidehustle.ng
                </a>
                <li>Olorunda abaa, Akobo, Ibadan, NG</li>
              </ul>
            </div>
            <p className="w-full text-[#666582] hidden md:block">
              {" "}
              © Copyright. All Rights Reserved Terra Holding Limited
            </p>
          </div>

          {/* Social Media Buttons */}
          <div className="">
            <p className="text-3xl mb-10 font-bold">Follow us</p>
            <div className="flex gap-x-1 md:gap-x-5">
              {/* LinkedIn Button */}
              <button className="bg-[#52A350] rounded-[3px] py-2 px-4 hover:bg-white hover:text-[#52A350] hover:scale-105">
                <a
                  href="https://www.linkedin.com/company/terra-learning/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M6.94 5a2 2 0 1 1-4 0a2 2 0 0 1 4 0M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"
                    ></path>
                  </svg>
                  LinkedIn
                </a>
              </button>

              {/* Instagram Button */}
              <button className="bg-[#52A350] rounded-[3px] py-2 px-4 hover:bg-white hover:text-[#52A350] hover:scale-105">
                <a
                  href="https://www.instagram.com/terralearning"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    class="iconify iconify--ri mr-2"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                    data-icon="ri:instagram-line"
                    data-v-a5d6e1d8=""
                  >
                    <path
                      fill="currentColor"
                      d="M12.001 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0-2a5 5 0 1 1 0 10a5 5 0 0 1 0-10m6.5-.25a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1 2.5 0M12.001 4c-2.474 0-2.878.007-4.029.058c-.784.037-1.31.142-1.798.332a2.9 2.9 0 0 0-1.08.703a2.9 2.9 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.007 9.075 4 9.461 4 12c0 2.475.007 2.878.058 4.029c.037.783.142 1.31.331 1.797c.17.435.37.748.702 1.08c.337.336.65.537 1.08.703c.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.475 0 2.878-.007 4.029-.058c.782-.037 1.308-.142 1.797-.331a2.9 2.9 0 0 0 1.08-.703c.337-.336.538-.649.704-1.08c.19-.492.296-1.018.332-1.8c.052-1.103.058-1.49.058-4.028c0-2.474-.007-2.878-.058-4.029c-.037-.782-.143-1.31-.332-1.798a2.9 2.9 0 0 0-.703-1.08a2.9 2.9 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.926 4.006 14.54 4 12 4m0-2c2.717 0 3.056.01 4.123.06c1.064.05 1.79.217 2.427.465c.66.254 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.047 1.066.06 1.405.06 4.122s-.01 3.056-.06 4.122s-.218 1.79-.465 2.428a4.9 4.9 0 0 1-1.153 1.772a4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465c-1.067.047-1.406.06-4.123.06s-3.056-.01-4.123-.06c-1.064-.05-1.789-.218-2.427-.465a4.9 4.9 0 0 1-1.772-1.153a4.9 4.9 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.012 15.056 2 14.717 2 12s.01-3.056.06-4.122s.217-1.79.465-2.428a4.9 4.9 0 0 1 1.153-1.772A4.9 4.9 0 0 1 5.45 2.525c.637-.248 1.362-.415 2.427-.465C8.945 2.013 9.284 2 12.001 2"
                    ></path>
                  </svg>
                  Instagram
                </a>
              </button>
              <button className="bg-[#52A350] rounded-[3px] py-2 px-4 hover:bg-white hover:text-[#52A350] hover:scale-105">
                <a
                  href="https://www.instagram.com/terralearning"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    class="iconify iconify--ph mr-2"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 256 256"
                    data-icon="ph:twitter-logo-bold"
                    data-v-a5d6e1d8=""
                  >
                    <path
                      fill="currentColor"
                      d="M251.09 67.41A12 12 0 0 0 240 60h-28.18a52.73 52.73 0 0 0-43.67-24a50.85 50.85 0 0 0-36.6 14.85A51.87 51.87 0 0 0 116 88v.78c-36.83-11.57-66.38-40.9-66.7-41.23a12 12 0 0 0-20.47 7.38c-6.31 70.17 24.65 107.79 42.06 123.12C56.4 192.83 36 200.68 35.8 200.76a12 12 0 0 0-5.8 17.9C32 221.55 43.44 236 80 236c72.25 0 132.7-55.26 139.6-126.63l28.88-28.88a12 12 0 0 0 2.61-13.08m-51.57 28.11a11.93 11.93 0 0 0-3.49 7.72C192.14 164.23 141.18 212 80 212a91 91 0 0 1-12.49-.79C78 204.55 89.72 195.07 98 182.66a12 12 0 0 0-3.9-17c-.12-.07-12.33-7.49-23.43-24.42s-17.26-37-18.46-59.78C69.37 94.4 96 110.79 126 115.84A12 12 0 0 0 140 104V88a28 28 0 0 1 8.41-20.07A27.07 27.07 0 0 1 167.86 60a28.83 28.83 0 0 1 25.82 16.81a12 12 0 0 0 11 7.19H211Z"
                    ></path>
                  </svg>
                  Twitter
                </a>
              </button>
            </div>

            <div className="py-[5rem]  md:flex justify-between">
              <div className="grid">
                <h1 className="font-bold">Quick Links</h1>
                <NavLink>FAQ</NavLink>
                <NavLink>Blog</NavLink>
              </div>
              <div className="grid">
                <h1 className="font-bold">Company</h1>
                <NavLink>Privacy Policy</NavLink>
                <NavLink>Terms of Use</NavLink>
              </div>
            </div>
          </div>

          <p className="w-full text-[#666582] block md:hidden">
            {" "}
            © Copyright. All Rights Reserved Terra Holding Limited
          </p>
        </section>
      </main>
    </footer>
  );
};

export default Footer;
