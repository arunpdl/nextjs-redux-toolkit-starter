import Layout from "components/Layout";
import Link from "next/link";
import StewImage from "assets/images/stew.jpg";
import NoodlesImage from "assets/images/noodles.jpg";
import CurryImage from "assets/images/curry.jpg";

export default function Home() {
  return (
    <Layout title="Home">
      <div className="flex justify-center md:justify-end">
        <Link href="/login">
          <a className="btn text-primary border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500">
            Log In
          </a>
        </Link>
        <Link href="/signup">
          <a className="btn text-primary ml-2 border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500">
            Sign Up
          </a>
        </Link>
      </div>

      <header>
        <h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
        <h3 className="text-2xl font-semibold">For Ninjas</h3>
      </header>

      <div>
        <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
          Latest Recipes
        </h4>
        <div className="mt-8 grid lg:grid-cols-3 gap-10">
          <div className="card hover:shadow-lg transition ease-in duration-300">
            <img
              src={StewImage}
              alt=""
              className="w-full h-32 sm:h-48 object-cover"
            />
            <div className="m-4">
              <span className="font-bold">5 Bean Chilli Stew</span>
              <span className="block text-grey-500 text-sm">
                Recipe by Mario
              </span>
            </div>
            <div className="badge">
              <span>25 mins</span>
            </div>
          </div>

          <div className="card hover:shadow-lg">
            <img
              src={NoodlesImage}
              alt=""
              className="w-full h-32 sm:h-48 object-cover"
            />
            <div className="m-4">
              <span className="font-bold">Veg Noodles</span>
              <span className="block text-grey-500 text-sm">
                Recipe by Derek
              </span>
            </div>
            <div className="badge">
              <svg
                className="w-5 inline-block"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>10 mins</span>
            </div>
          </div>

          <div className="card hover:shadow-lg">
            <img
              src={CurryImage}
              alt=""
              className="w-full h-32 sm:h-48 object-cover"
            />
            <div className="m-4">
              <span className="font-bold">Tofu Curry</span>
              <span className="block text-grey-500 text-sm">
                Recipe by Kate
              </span>
            </div>

            <div className="badge">
              <span>15 mins</span>
            </div>
          </div>
        </div>
        <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
          Most Popular Recipes
        </h4>
        <div className="mt-8">{/* cards go here */}</div>

        <div className="flex justify-center">
          <div className="bg-secondary-100 text-secondary-200 btn hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300">
            Load More
          </div>
        </div>
      </div>
    </Layout>
  );
}
