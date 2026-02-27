import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const seedUser = {
    role: "admin",
    email: "admin123@gmail.com",
    password: "admin@123"
}

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = (data) => {
        if (data.email === seedUser.email && data.password === seedUser.password) {
            // save to localStorage
            localStorage.setItem("user", JSON.stringify({
                email: seedUser.email,
                role: seedUser.role
            }))
            toast.success("Login Successful ✅");
            reset();
            navigate("/admin")
        } else {
            toast.error("Invalid Credentials ❌");
        }
    };

    return (
        <section className="bg-gray-50">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full login_bg rounded-lg shadow-lg md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-black">
                            Sign in to your account
                        </h1>

                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className={`border rounded-lg block w-full p-2.5 text-black focus:outline-none focus:border-blue-400
                                        ${errors.email ? "border-red-400" : "border-gray-300"}`}
                                    placeholder="name@company.com"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                            message: "Enter a valid email address",
                                        },
                                    })}
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                                )}
                            </div>

                            {/* Password */}
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-black">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className={`border rounded-lg block w-full p-2.5 text-black focus:outline-none focus:border-blue-400
                                        ${errors.password ? "border-red-400" : "border-gray-300"}`}
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: {
                                            value: 6,
                                            message: "Minimum 6 characters required",
                                        },
                                    })}
                                />
                                {errors.password && (
                                    <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="w-full text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 mt-6"
                            >
                                Sign in
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;