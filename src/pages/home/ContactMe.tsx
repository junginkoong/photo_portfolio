export default function ContactMe() {
    return (
        <div className="min-h-screen bg-[#232323] flex items-center justify-center px-8 py-16">
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Left Side */}
            <div>
                <h2 className="text-5xl font-bold text-white mb-6 font-oswald">CONTACT ME</h2>
                <p className="text-gray-300 mb-10 text-lg">
                Have a project in mind? Let’s bring it to life.
                </p>
                <div className="mb-8">
                <h3 className="text-white font-bold mb-1 uppercase text-sm">E-mail</h3>
                <p className="text-gray-300">junginkoong@outlook.com</p>
                </div>
                <div>
                <h3 className="text-white font-bold mb-1 uppercase text-sm">Location</h3>
                <p className="text-gray-300">Toronto, CA</p>
                </div>
            </div>
            {/* Right Side */}
            <form
                className="flex flex-col gap-6"
                action="https://formspree.io/f/xanjvdwr"
                method="POST"
                >
                <div>
                    <label className="block text-gray-300 mb-1 text-sm" htmlFor="name">
                    Your name*
                    </label>
                    <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full bg-transparent border-b border-gray-400 text-white py-1 px-0 focus:outline-none focus:border-white transition"
                    />
                </div>
                <div>
                    <label className="block text-gray-300 mb-1 text-sm" htmlFor="email">
                    Your email*
                    </label>
                    <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full bg-transparent border-b border-gray-400 text-white py-1 px-0 focus:outline-none focus:border-white transition"
                    />
                </div>
                <div>
                    <label className="block text-gray-300 mb-1 text-sm" htmlFor="message">
                    Your message
                    </label>
                    <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="w-full bg-transparent border-b border-gray-400 text-white py-1 px-0 focus:outline-none focus:border-white transition resize-none"
                    />
                </div>
                <button
                    type="submit"
                    className="mt-3 bg-gray-400 text-white font-bold py-3 rounded transition hover:bg-gray-500 uppercase tracking-wider"
                >
                    SEND MESSAGE
                </button>
                </form>
        </div>
      </div>
    )
}