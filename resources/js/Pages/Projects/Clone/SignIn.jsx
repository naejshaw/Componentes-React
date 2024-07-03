import { Head, Link } from "@inertiajs/react";
import Home from "./Home";

export default function SignIn()
{
    return(<>
        <Head title="HBO Clone" />
        <Home>
            <div className="flex pt-8">
                <img className="bg-cover h-full relative" src="https://raw.githubusercontent.com/naejshaw/hbomax/master/assets/images/background-movies-series.png"/>
                <main className="absolute flex justify-center items-center font-quicksand w-full h-3/4 pt-24 px-6 content">
                    <form className="w-full max-w-3xl bg-formBg rounded-lg flex flex-col gap-6 p-10 text-center login container">
                        <h1 className="uppercase text-xl mb-6 login__title">Entrar</h1>
                        <label className="text-left login__label"> Você tem uma conta da HBO Max? </label>
                        <input
                        className="bg-fieldBg border-fieldBorder text-text rounded-lg px-4 placeholder:text-fieldPlaceholder invalid:border-fieldError text-base login__field"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Endereço de e-mail"
                        />
                        <input
                        className="bg-fieldBg border-fieldBorder text-text rounded-lg px-4 placeholder:text-fieldPlaceholder invalid:border-fieldError text-base login__field"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Senha"
                        minlength="8"
                        />
                        <div className="mt-6 text-left login__actions">
                            <button type="submit" className="py-4 px-10 bg-tertiary rounded-3xl font-bold text-text uppercase border-none cursor-pointer outline-3 outline-transparent hover:bg-secondary hover:bg-cover hover:outline-2 hover:outline-secondary hover:scale-110 button button-gradient">Entrar</button>
                            <Link href="#" className="text-link ml-6 font-bold hover:text-tertiary login__link"> Esqueceu a senha? </Link>
                        </div>
                    </form>
                </main>
            </div>
        </Home>
    </>);
}
