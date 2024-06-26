/* eslint-disable react/prop-types */
const Testimonials = () => {
  const Card = ({ name, job, image }) => {
    return (
      <div className="hoverBtn">
        <div className="bg-white rounded-[20px] py-[30px] px-[35px] relative overflow-hidden">
          <div className="relative">
            <img src="/quotes.svg" alt="" className="absolute z-10" />
            <img
              src={image}
              alt=""
              className="rounded-[18px] h-[180px] w-full object-cover"
            />
          </div>
          <p className="text-[#262626] opacity-80 my-[30px] leading-[1.7rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <span>
            <p className="text-[21px] font-bold">{name}</p>
            <p className="text-[#262626]">{job}</p>
          </span>
          <div className="absolute -right-6 -bottom-6 bg-[url('/pat-2.png')] bg-contain bg-center w-[131px] h-[131px]"></div>
        </div>
      </div>
    );
  };
  return (
    <main
      className="pb-5 pt-52 px-3 bg-[#f0ebe3] dark:bg-[#1f2937]"
      id="testimonials"
    >
      <div className="container max-w-[1300px] mx-auto">
        <h1 className="sm:text-[44px] text-[26px] text-center m-0">
          TESTIMONIALS
        </h1>
        <p className="font-bold text-sm text-[#29a587] flex items-center text-center justify-center gap-x-4">
          WHAT <span className="caveat text-3xl text-black">Customers Say</span>
        </p>
        <section className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mt-[60px] w-full">
          <Card
            name="Barbara Wilson"
            job="CEO Company"
            image="https://luique.bslthemes.com/wp-content/uploads/2022/09/testi4-2.jpg"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
          />
          <Card
            name="Charlie Smith"
            job="Designer"
            image="https://luique.bslthemes.com/wp-content/uploads/2022/09/testi4-1.jpg"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
          />
          <Card
            name="Roy Wang"
            job="Manager GYM"
            image="https://luique.bslthemes.com/wp-content/uploads/2022/09/testi4-4.jpg"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
          />
        </section>
      </div>
    </main>
  );
};

export default Testimonials;
