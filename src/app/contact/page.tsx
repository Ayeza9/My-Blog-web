export default function Contact() {
    return (
      <section className="py-[140px] mx-5 md:mx-0">
        <div className="flex items-center justify-center text-center">
          <div>
            <span className="text-3xl md:text-5xl font-bold text-gray-500 slide-top hover:text-yellow-400">
              Contact us
            </span>
            <p className="mt-8 text-center text-lg font-medium text-green-400">
            </p>
            <div className="grid grid-rows-6 grid-cols-1 sm:grid-cols-2 sm:grid-rows-5 min-w-[250px] gap-4 max-w-[500px] bg-white p-10 rounded-xl mx-5 md:mx-0 mt-10">

               <input
                type="text"
                className="bg-zinc-100 h-12 px-5 border-2 border-zinc-400 rounded-lg cols-1 sm:col-span-2 text-sm"
                placeholder="Full name"
                name=""
                id=""
              />

              <input
                type="email"
                className="bg-zinc-100 h-12 px-5 border-2 border-zinc-400 rounded-lg cols-1 sm:col-span-2 text-sm"
                placeholder="Email"
                name=""
                id=""
              />
              <textarea
                name="msg"
                className="bg-zinc-100 h-24 p-6 border-2 border-zinc-400 rounded-lg cols-1 sm:col-span-2 row-span-2 text-sm"
                placeholder="Type your message"
                id=""
              ></textarea>
              <button className="col-span-1 sm:col-span-2 h-12 bg-teal-400 rounded-lg font-semibold text-white">
                SEND
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }