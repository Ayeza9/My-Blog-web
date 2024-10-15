export default function Footer() {
    return (
      <footer className="bg-zinc-800 text-white mt-auto">
        <div className="flex flex-col sm:flex-row items-center justify-around p-10 text-center sm:text-left">
          <div className="w-[300px] p-5">
            <span className="text-2xl font-bold text-teal-400">Culinary Delights</span>
            <p className="mt-3">
              Discover the world of flavour with us. From delightful recipes
              to kitchen tips, we are your ultimate food companion. Join us 
              and indulge in the art of cooking and the joy of sharing food.
            </p>
          </div>
          <ul className="leading-10">
            <span className="text-2xl font-bold text-teal-400">Social Links</span>
            <li>
              <a href="https://linkedin.com/in/ayeza-haroon-8058722b9" target="_blank" rel="noopener noreferrer ">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/Ayeza9" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
          </ul>
        </div>
        <hr />
        <div className="flex items-center justify-center py-5">
             © 2024 Culinary Delights. All Rights Reserved.
        </div>
      </footer>
    );
  }


  