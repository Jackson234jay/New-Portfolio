import { useContact } from "./useContact";
import { AnimatePresence, motion } from "framer-motion";

const Contact = () => {
  const { alert, errors, handleSubmit, register, isSubmitting } = useContact();
  return (
    <div id="contact" className="py-16 px-4 bg-base-200">
      <h1 className="text-4xl md:text-5xl font-bold text-primary text-center mb-10">
        Get in Touch
      </h1>

      <form
        onSubmit={handleSubmit}
        className="backdrop-blur-md   bg-white/10 p-8 rounded-2xl shadow-xl border border-white/10 max-w-2xl mx-auto space-y-6"
      >
        <AnimatePresence>
          {alert.message && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`alert ${
                alert.type === "success" ? "alert-success" : "alert-error"
              }`}
            >
              {alert.message}
            </motion.div>
          )}
        </AnimatePresence>
        {/* Name Field */}
        <label className="floating-label">
          <span>Name</span>
          <input
            {...register("name")}
            type="text"
            placeholder="John Doe"
            className="input input-md input-bordered w-full bg-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          />
        </label>
        {errors.name && <p className="text-error">{errors.name.message}</p>}

        {/* Email Field */}
        <label className="floating-label">
          <span>Your Email</span>
          <input
            {...register("email")}
            type="email"
            placeholder="mail@site.com"
            className="input input-md input-bordered w-full bg-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          />
        </label>
        {errors.email && <p className="text-error">{errors.email.message}</p>}

        {/* Message Field */}
        <textarea
          {...register("message")}
          className="textarea textarea-bordered w-full min-h-[120px] resize-none bg-transparent text-base-content focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          placeholder="Your message..."
        ></textarea>
        {errors.message && (
          <p className="text-error">{errors.message.message}</p>
        )}

        {/* Submit Button */}
        <div className="text-center pt-4">
          <button
            disabled={isSubmitting}
            className="btn btn-primary btn-wide transition-transform duration-300 hover:scale-105"
          >
            {isSubmitting ? (
              <span className="loading loading-dots"></span>
            ) : (
              "Send Message"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
