export default function Smoothies() {
    return (
      <section className="my-[140px]">
        <div className="flex items-center justify-center flex-col gap-10  mx-10 lg:mx-0">
          <span className="text-3xl md:text-5xl font-bold text-gray-500 slide-top hover:text-yellow-400 text-center">
            Smoothies: A Burst Of Energy
          </span>
          <div className="w-full max-w-[800px]">
            <img
               src="/images/smoothies.jpg"

              className="rounded-lg w-full h-auto object-cover"
              alt=""
            />
          </div>
          <div className="max-w-[800px] w-full min-w-[250px] text-sm sm:text-md xl:text-lg ">
            <p>
            Smoothies are a delicious and nutritious beverage made by blending
fruits, vegetables, and other ingredients into a creamy and refreshing
drink. They offer a convenient way to enjoy essential nutrients,
fiber, and antioxidants in a single serving. Common ingredients
include bananas, berries, spinach, yogurt, and various milk options,
allowing for endless flavor combinations that cater to different tastes.

            </p>
            <br />
            <p>
            The appeal of smoothies lies in their versatility and adaptability.
They can be tailored to suit specific dietary needs, whether
one prefers a protein-packed post-workout shake or a refreshing
fruit smoothie for breakfast. With the addition of superfoods
like chia seeds, flaxseeds, or protein powders, smoothies can
enhance nutritional value while keeping them tasty and satisfying.
Their vibrant colors and refreshing flavors make them a popular
choice for those seeking a quick and healthy snack.

</p>
            <br />
            <p>
            Smoothies are not only a great way to consume more fruits and
vegetables, but they also serve as a fun and engaging way
to experiment with flavors and textures. They can be enjoyed
at any time of day, whether as a breakfast option, a midday
snack, or a dessert alternative. With the growing trend
towards healthier eating, smoothies have become a staple
in cafes, juice bars, and home kitchens, providing
a delicious and convenient way to boost daily nutrient intake.

    </p>
            <br />
          </div>
        </div>
      </section>
    );
  }