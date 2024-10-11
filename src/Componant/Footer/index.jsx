import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#1A1F1A] font-body-new text-white mb-16 lg:mb-0 p-24">
    <main>
      {/* First Section */}
      <section className="container lg:grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-3 mb-16 lg:mb-0">
          <header className="leading-8 mb-8">
            <h1 className="font-bold text-4xl">Stay in the loop</h1>
            <p className="text-sm">
              Be the first to get the latest updates from our fast-growing community of African youths.
            </p>
          </header>
          <form className="relative">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="&#9993; Email address"
              className="pl-10 py-8 w-full rounded bg-[#fff] text-black"
            /> 
            <button
              type="submit"
              className="bg-[#52A350] text-white py-2 px-6 rounded hover:bg-white hover:text-[#52A350] hover:scale-105 transition duration-300 absolute right-4 top-4"
            >
              Subscribe
            </button>
          </form>
        </div>
        
        {/* Social Media Buttons */}
        <div className="lg:col-span-2 mx-auto mt-auto">
          <p className="text-3xl mb-10 font-bold">Follow us</p>
          <div className="flex gap-x-5">
            {/* LinkedIn Button */}
            <button className="bg-[#52A350] rounded-[3px] py-2 px-4 hover:bg-white hover:text-[#52A350] hover:scale-105">
              <a href="https://www.linkedin.com/company/terra-learning/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" width="1em" height="1em" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M6.94 5a2 2 0 1 1-4 0a2 2 0 0 1 4 0M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"></path>
                </svg>
                LinkedIn
              </a>
            </button>
            
            {/* Instagram Button */}
            <button className="bg-[#52A350] rounded-[3px] py-2 px-4 hover:bg-white hover:text-[#52A350] hover:scale-105">
              <a href="https://www.instagram.com/terralearning" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" width="1em" height="1em" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12 4c-2.47 0-2.88.01-4.03.06c-.78.04-1.31.14-1.8.33a2.9 2.9 0 0 0-1.08.7a2.9 2.9 0 0 0-.7 1.08c-.19.49-.3 1.02-.33 1.8C4 9.12 4 9.53 4 12s.01 2.88.06 4.03c.04.78.14 1.31.33 1.8c.17.43.37.75.7 1.08c.34.34.65.54 1.08.7c.49.19 1.02.29 1.8.33C9.12 20 9.53 20 12 20s2.88-.01 4.03-.06c.78-.04 1.31-.14 1.8-.33c.43-.17.75-.37 1.08-.7c.34-.34.54-.65.7-1.08c.19-.49.29-1.02.33-1.8c.05-1.15.06-1.56.06-4.03s-.01-2.88-.06-4.03c-.04-.78-.14-1.31-.33-1.8a2.9 2.9 0 0 0-.7-1.08a2.9 2.9 0 0 0-1.08-.7c-.49-.19-1.02-.29-1.8-.33C14.88 4 14.47 4 12 4m0-2c2.72 0 3.06.01 4.12.06c1.06.05 1.79.22 2.43.47c.66.25 1.22.6 1.77 1.15a4.9 4.9 0 0 1 1.15 1.77c.25.66.42 1.37.47 2.43c.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43c-.25.66-.6 1.22-1.15 1.77a4.9 4.9 0 0 1-1.77 1.15c-.66.25-1.37.42-2.43.47c-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.77-1.15a4.9 4.9 0 0 1-1.15-1.77c-.25-.66-.42-1.37-.47-2.43c-.05-1.06-.06-1.4-.06-4.12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43a4.9 4.9 0 0 1 1.15-1.77a4.9 4.9 0 0 1 1.77-1.15c.66-.25 1.37-.42 2.43-.47C8.94 2.01 9.28 2 12 2"></path>
                </svg>
                Instagram
              </a>
            </button>
          </div>
        </div>
      </section>
    </main>
  </footer>
  )
}

export default Footer
