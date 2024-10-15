export default function Pasta() {
    return (
      <section className="my-[140px]">
        <div className="flex items-center justify-center flex-col gap-10  mx-10 lg:mx-0">
          <span className="text-3xl md:text-5xl font-bold text-gray-500 slide-top hover:text-yellow-400 text-center">
            Pasta: The Comfort Food
          </span>
          <div className="w-full max-w-[800px]">
            <img
              src="/images/pasta.jpg"

              className="rounded-lg w-full h-auto object-cover"
              alt=""
            />
          </div>
          <div className="max-w-[800px] w-full min-w-[250px] text-sm sm:text-md xl:text-lg ">
            <p>
            Welcome to Culinary Delights – Your Ultimate Pasta Destination
            </p>
            <br />
            <p>
            At Culinary Delights, we celebrate the magic of pasta.
            Our website is a haven for pasta lovers, offering a wide variety 
            of dishes that cater to every taste. From the simplicity of spaghetti aglio e olio 
            to the richness of creamy carbonara, our recipes bring out the best in 
            classic Italian cuisine, giving you the tools to create restaurant-quality pasta right at home.
            </p>
            <br />
            <p>
            We believe that pasta is more than just a meal – it’s an experience. 
            Our team of culinary experts carefully curates recipes that combine
             tradition with innovation, ensuring that you can explore both timeless 
             favorites and exciting new creations. Whether you’re looking to master 
             the art of handmade pasta or just want to whip up a quick, delicious dinner, 
             we’ve got you covered with easy-to-follow guides and expert tips.
             </p>
            <br />
            <p>
            With Culinary Delights, you’ll discover a world of flavors and textures,
            perfect for any occasion. From indulgent cheese-filled ravioli to light 
            and refreshing pesto pasta, every dish is designed to bring joy to your 
            table. Let us guide you through this flavorful journey, and turn every meal 
            into a delightful pasta celebration. Buon Appetito!
            </p>
            <br />
          </div>
        </div>
      </section>
    );
  }