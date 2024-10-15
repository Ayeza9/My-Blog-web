export default function Salad() {
    return (
      <section className="my-[140px]">
        <div className="flex items-center justify-center flex-col gap-10  mx-10 lg:mx-0">
          <span className="text-3xl md:text-5xl font-bold text-gray-500 slide-top hover:text-yellow-400 text-center">
            Salad: Fresh And Healthy
          </span>
          <div className="w-full max-w-[800px]">
            <img
               src="/images/salad.jpg"

              className="rounded-lg w-full h-auto object-cover"
              alt=""
            />
          </div>
          <div className="max-w-[800px] w-full min-w-[250px] text-sm sm:text-md xl:text-lg ">
            <p>
            Salad is a vibrant and refreshing dish that combines a variety
of fresh vegetables, fruits, and sometimes proteins, offering
a delightful blend of flavors and textures. Typically served
cold, salads can range from simple greens dressed with olive
oil and vinegar to elaborate combinations featuring grains,
nuts, and cheeses. They are not only a great way to enjoy
seasonal produce but also provide numerous health benefits.

            </p>
            <br />
            <p>
            The beauty of salad lies in its versatility and adaptability.
From classic Caesar and Greek salads to more innovative
versions like quinoa and avocado salads, there is a salad
for every palate. Adding proteins like grilled chicken,
tofu, or beans makes salads a satisfying meal option,
ideal for lunch or dinner. With endless combinations of
dressings and toppings, each salad can be customized
to suit individual tastes.
              
            </p>
            <br />
            <p>
            Salads are not just nutritious; they are also visually appealing,
with a colorful array of ingredients that stimulate the senses.
They are often served as appetizers, side dishes, or main courses,
making them a staple in various cuisines worldwide.
As people become more health-conscious, salads continue
to grow in popularity, showcasing the importance of
fresh ingredients in our diets while providing a delicious
and satisfying meal option.

            </p>
            <br />
          </div>
        </div>
      </section>
    );
  }