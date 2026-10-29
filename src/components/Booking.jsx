import { Link } from "react-router-dom";

function Booking() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("Your form is ready to be connected to a booking service.");
  }

  return (
    <div className="min-h-screen bg-white text-stone-900">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-6 md:px-12">
        <Link to="/" className="text-xl font-bold text-green-900">
          SofiaSerenity Wellness
        </Link>

        <Link
          to="/"
          className="rounded-full bg-teal-700 px-6 py-3 text-sm text-white hover:bg-teal-800"
        >
          HOME
        </Link>
      </header>

      {/* Booking form */}
      <main className="mx-auto max-w-4xl px-6 py-12 md:px-12">
        <h1 className="mb-8 font-serif text-4xl md:text-5xl">
          BOOK A SESSION
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="mb-1 block text-stone-600">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              autoComplete="name"
              required
              className="w-full rounded border border-stone-400 px-5 py-4 outline-none focus:border-teal-700 focus:ring-1 focus:ring-teal-700"
            />
          </div>

          <div>
            <label htmlFor="phone" className="mb-1 block text-stone-600">
              Telephone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Telephone Number"
              autoComplete="tel"
              required
              className="w-full rounded border border-stone-400 px-5 py-4 outline-none focus:border-teal-700 focus:ring-1 focus:ring-teal-700"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1 block text-stone-600">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              autoComplete="email"
              required
              className="w-full rounded border border-stone-400 px-5 py-4 outline-none focus:border-teal-700 focus:ring-1 focus:ring-teal-700"
            />
          </div>

          <div>
            <label htmlFor="service" className="mb-1 block text-stone-600">
              Preferred Service
            </label>
            <select
              id="service"
              name="service"
              required
              defaultValue=""
              className="w-full rounded border border-stone-400 bg-white px-5 py-4 outline-none focus:border-teal-700"
            >
              <option value="" disabled>
                Select a service
              </option>
              <option>Swedish Massage</option>
              <option>Deep Tissue Massage</option>
              <option>Hot Stone Massage</option>
              <option>Nuru Massage</option>
              <option>Erotic Massage</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="mb-1 block text-stone-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us your preferred date and time..."
              rows={5}
              required
              className="w-full rounded border border-stone-400 px-5 py-4 outline-none focus:border-teal-700 focus:ring-1 focus:ring-teal-700"
            />
          </div>

          <button
            type="submit"
            className="bg-teal-900 px-10 py-5 font-semibold tracking-widest text-white transition hover:bg-teal-800"
          >
            SEND
          </button>
        </form>
      </main>

      {/* Dark footer */}
      <footer className="mt-8 bg-black px-8 py-12 text-white md:px-12">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <h2 className="mb-6 font-serif text-3xl font-bold">Contact</h2>
            <p className="mb-3 text-stone-300">
              Phone: Add your business number
            </p>
            <p className="text-stone-300">
              Email: Add your business email
            </p>
          </div>

          <div>
            <h2 className="mb-6 font-serif text-3xl font-bold">Services</h2>
            <ul className="space-y-3 text-stone-300">
              <li>Swedish Massage</li>
              <li>Deep Tissue Massage</li>
              <li>Nuru Massage</li>
              <li>Erotic Massage</li>
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-stone-700 pt-6 text-sm text-stone-400">
          © {2025().getFullYear()} Serenity Wellness. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Booking;