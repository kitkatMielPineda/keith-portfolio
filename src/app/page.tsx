export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      {/* Hero Section */}
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold mb-2">Keith Pineda</h1>
        <p className="text-lg text-gray-600">
          Software Engineer | AWS Cloud Practitioner | Web & Mobile Developer
        </p>
      </section>

      {/* Projects Section */}
      <section className="py-8">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project 1 */}
          <div className="bg-white rounded-xl shadow p-4">
            <h3 className="text-xl font-bold mb-2">Gown Rental Web App</h3>
            <p className="text-gray-600 text-sm mb-2">
              Full-stack app for managing rentals, appointments, inventory, and
              quarterly reports.
            </p>
            <p className="text-sm text-gray-500">
              Tech: Next.js, Prisma, Supabase, Tailwind, Resend
            </p>
          </div>

          {/* Project 2 */}
          <div className="bg-white rounded-xl shadow p-4">
            <h3 className="text-xl font-bold mb-2">
              Cinema Scheduler (NestJS)
            </h3>
            <p className="text-gray-600 text-sm mb-2">
              Cron job integration to fetch and store weekly cinema schedules
              using external API.
            </p>
            <p className="text-sm text-gray-500">
              Tech: NestJS, PostgreSQL, Schedule Module
            </p>
          </div>

          {/* Project 3 */}
          <div className="bg-white rounded-xl shadow p-4">
            <h3 className="text-xl font-bold mb-2">3D Mall Map Viewer</h3>
            <p className="text-gray-600 text-sm mb-2">
              Interactive mall directory with POI highlighting, raycasting, and
              pathfinding.
            </p>
            <p className="text-sm text-gray-500">
              Tech: Three.js, React Three Fiber, Leva, Zustand
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-10">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700 leading-relaxed max-w-3xl">
          I’m Keith, a software engineer from the Philippines with experience in
          backend and full-stack development. I specialize in building web and
          mobile applications using React, Next.js, NestJS, and more. I'm an AWS
          Certified Cloud Practitioner and a former college instructor with a
          degree in Electronics Engineering. My career journey includes
          engineering, business, and software development.
        </p>
      </section>

      {/* Contact Section */}
      <section className="py-10">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <ul className="text-gray-700 space-y-2">
          <li>Email: kitkat.m.pineda@gmail.com</li>
          <li>GitHub: github.com/keithpineda</li>
          <li>LinkedIn: linkedin.com/in/keithpineda</li>
        </ul>
      </section>
    </main>
  );
}
