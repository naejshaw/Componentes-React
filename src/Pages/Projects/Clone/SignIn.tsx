import Home from "./Home";
import Button from "../../../Components/MyComponents/Button";
import bg from '../../../assets/hboBG.png';
export default function SignIn()
{
    return(<>
        <Home>
            <div className="flex pt-8 justify-center min-h-screen">
                <img className="bg-cover h-full relative" src={bg} alt=""/>
                <main className="absolute flex justify-center items-center font-quicksand w-3/4 md:w-2/4 h-3/4 pt-24 px-2 md:px-4 lg:px-6 content">
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
                        minLength={8}
                        />
                        <div className="mt-6 text-left flex items-center justify-evenly login__actions">
                            <Button className={"py-2 px-5 text-sm md:text-sm  md:py-4 md:px-10 bg-tertiary rounded-3xl font-bold text-text uppercase border-none cursor-pointer outline-3 outline-transparent hover:bg-secondary hover:bg-cover hover:outline-2 hover:outline-secondary hover:scale-110 button button-gradient"} title={"Entrar"} type={"submit"}/>
                            <Button className={"text-link ml-6 text-sm md:text-sm lg:text-base font-bold hover:text-tertiary login__link"} link={"#"} title={"Esqueceu a senha?"}/>
                        </div>
                    </form>
                </main>
            </div>
        </Home>
    </>);
}