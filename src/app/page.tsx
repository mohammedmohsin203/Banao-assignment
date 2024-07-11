import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import logo from "../../public/HobbyCue Logo.png";
import icon1 from "../../public/icon1.png";
import icon2 from "../../public/icon2.png";
import icon3 from "../../public/icon3.png";
import icon4 from "../../public/icon4.png";
import main from "../../public/main.png";
import Image from "next/image";

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <div className="flex items-center space-x-4">
            <Image
              src={logo}
              quality={100}
              alt="Logo"
              className="h-10 w-full"
            />
          </div>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search here..."
              className="border rounded-md px-4 py-2"
            />
            <button className="bg-purple-600 text-white px-4 py-2 rounded-md">
              <SearchIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="md:block hidden">
          <nav className="flex items-center space-x-4 ">
            <Link href="#" className="text-gray-700" prefetch={false}>
              Explore
            </Link>
            <Link href="#" className="text-gray-700" prefetch={false}>
              Hobbies
            </Link>
            <Link href="#" className="text-gray-700" prefetch={false}>
              <BellIcon className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-700" prefetch={false}>
              <ShoppingCartIcon className="h-5 w-5" />
            </Link>
            <Button variant="outline">Sign In</Button>
          </nav>
          </div>
        </div>
      </header>
      <main className="container mx-auto py-8 px-6">
        <section className="flex flex-col md:flex-row items-center justify-between bg-purple-50 p-8 rounded-md">
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold ">
              Explore your <span className="text-blue-600">hobby</span> or{" "}
              <span className="text-purple-600">passion</span>
            </h2>
            <p className="text-gray-700 mr-4">
              Sign-in to interact with a community of fellow hobbyists and an
              eco-system of experts, teachers, suppliers, classes, workshops,
              and places to practice, participate or perform. Your hobby may be
              about visual or performing arts, sports, games, gardening, model
              making, cooking, indoor or outdoor activities...
            </p>
            <p className="text-gray-700 mr-4">
              If you are an expert or a seller, you can Add your Listing and
              promote yourself, your students, products, services or events. Hop
              on your hobbyhorse and enjoy the ride.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="bg-white p-6 rounded-md shadow-md">
              <div className="flex justify-between mb-4">
                <h3 className="text-lg font-semibold">Sign In</h3>
                <Link href="#" className="text-purple-600" prefetch={false}>
                  Join In
                </Link>
              </div>
              <Button variant="outline" className="w-full mb-4">
                Continue with Google
              </Button>
              <Button variant="outline" className="w-full mb-4">
                Continue with Facebook
              </Button>
              <div className="text-center text-gray-500 mb-4">
                Or connect with
              </div>
              <Input type="email" placeholder="Email" className="mb-4" />
              <Input type="password" placeholder="Password" className="mb-4" />
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <label htmlFor="remember" className="text-sm">
                    Remember me
                  </label>
                </div>
                <Link
                  href="#"
                  className="text-sm text-purple-600"
                  prefetch={false}
                >
                  Forgot password?
                </Link>
              </div>
              <Button className="w-full">Continue</Button>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <Card className="flex justify-between flex-col">
            <CardHeader>
              <CardTitle className="flex flex-row">
                <Image src={icon1} className="mx-4 h-6 w-6" alt="icon" />
                People
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Find a teacher, coach, or expert for your hobby interest in your
                locality. Find a partner, teammate, accompanist or collaborator.
              </p>
              <Button variant="outline" className="mt-4">
                Connect
              </Button>
            </CardContent>
          </Card>
          <Card className="flex justify-between flex-col">
            <CardHeader>
              <CardTitle className="flex flex-row">
                <Image src={icon2} className="mx-4 h-6 w-6" alt="icon" />
                Place
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Find a class, school, playground, auditorium, studio, shop or an
                event venue. Book a slot at venues that allow booking through
                hobbycue.
              </p>
              <Button variant="outline" className="mt-4">
                Meet up
              </Button>
            </CardContent>
          </Card>
          <Card className="flex justify-between flex-col">
            <CardHeader>
              <CardTitle className="flex flex-row">
                <Image src={icon3} className="mx-4 h-6 w-4" alt="icon" />
                Product
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Find equipment or supplies required for your hobby. Buy, rent or
                borrow from shops, online stores or from community members.
              </p>

              <Button variant="outline" className="mt-4">
                Get it
              </Button>
            </CardContent>
          </Card>
          <Card className="flex justify-between flex-col">
            <CardHeader>
              <CardTitle className="flex flex-row">
                <Image src={icon4} className="mx-4 h-6 w-6" alt="icon" />
                Program
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Find events, meetups and workshops related to your hobby.
                Register or buy tickets online.
              </p>
              <Button variant="outline" className="mt-4">
                Attend
              </Button>
            </CardContent>
          </Card>
        </section>
        <section className="bg-blue-50 p-8 mt-8 rounded-md">
          <Card>
            <CardHeader>
              <CardTitle> ➕ Add your own</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Are you a teacher or expert? Do you sell or rent out equipment,
                venue or event tickets? Or, you know someone who should be on
                hobbycue? Go ahead and Add your Own page
              </p>
              <Button variant="outline" className="mt-4">
                Add new
              </Button>
            </CardContent>
          </Card>
        </section>
        <section className="bg-purple-50 p-8 mt-8 rounded-md">
          <Card>
            <CardHeader>
              <CardTitle>Testimonials</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="">
                In a fast growing and ever changing city like Bangalore, it
                sometimes becomes very difficult to find or connect with like
                minded people. Websites like hobbycue.com is a great service
                which helps me get in touch with, communicate, connect, and
                exchange ideas with other dancers. It also provides the extra
                benefit of finding products and services that I can avail, which
                I can be assured is going to be of great quality as it comes
                recommended by people of the hobbycue community. To have
                discussions, to get visibility, and to be able to safely explore
                various hobbies and activities in my city, all under one roof,
                is an excellent idea and I highly recommend it.
              </p>
              <div className="flex items-center mt-4">
                <PlayIcon className="h-6 w-6 text-purple-600" />
                <div className="flex-1 mx-4">
                  <div className="bg-purple-200 h-2 rounded-full">
                    <div className="bg-purple-600 h-2 rounded-full w-1/2" />
                  </div>
                </div>
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>SN</AvatarFallback>
                </Avatar>
              </div>
              <div className="mt-4">
                <p className="font-semibold">Shubha Nagarajan</p>
                <p className="text-sm text-gray-500">Classical Dancer</p>
              </div>
            </CardContent>
          </Card>
        </section>
        <section className="bg-blue-50 p-8 mt-8 rounded-md text-center">
          <h2 className="text-3xl font-bold">
            Your <span className="text-blue-600">Hobby</span>, Your{" "}
            <span className="text-purple-600">Community</span>
            ...
          </h2>
          <Button className="mt-4">Get started</Button>
          <div className="flex justify-center mt-8">
            <Image
              src={main}
              alt="Community"
              className="h-68 w-full"
            />
          </div>
        </section>
      </main>
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          <div>
            <h3 className="font-semibold">Hobbycue</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#" className="text-gray-600" prefetch={false}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600" prefetch={false}>
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600" prefetch={false}>
                  Work with Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600" prefetch={false}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">How Do I</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#" className="text-gray-600" prefetch={false}>
                  Sign Up
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600" prefetch={false}>
                  Add a Listing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600" prefetch={false}>
                  Claim Listing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600" prefetch={false}>
                  Post a Query
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600" prefetch={false}>
                  Add a Blog Post
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600" prefetch={false}>
                  Other Queries
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#" className="text-gray-600" prefetch={false}>
                  Listings
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600" prefetch={false}>
                  Blog Posts
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600" prefetch={false}>
                  Shop / Store
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600" prefetch={false}>
                  Community
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto mt-8 px-6">
          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-600" prefetch={false}>
                <FacebookIcon className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-600" prefetch={false}>
                <TwitterIcon className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-600" prefetch={false}>
                <InstagramIcon className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-600" prefetch={false}>
                <PinIcon className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-600" prefetch={false}>
                <LinkedinIcon className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-600" prefetch={false}>
                <YoutubeIcon className="h-6 w-6" />
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Input
                type="email"
                placeholder="Email ID"
                className="border rounded-md px-4 py-2"
              />
              <Button variant="outline">Invite</Button>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500">
            &copy; Purple Cues Private Limited
          </div>
        </div>
      </footer>
    </div>
  );
}

function BellIcon({ props }: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function FacebookIcon({ props }: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ props }: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ props }: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function PinIcon({ props }: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="17" y2="22" />
      <path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z" />
    </svg>
  );
}

function PlayIcon({ props }: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  );
}

function SearchIcon({ props }: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function ShoppingCartIcon({ props }: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

function TwitterIcon({ props }: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function XIcon({ props }: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function YoutubeIcon({ props }: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}
