import Site from "@/Layouts/SiteLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function Home()
{
    const [user, setUser] = useState('')
    const [currentUser, setCurrentUser] = useState(null)
    const [repos, setRepos] = useState(null)

    const handleGetData = async () => {
        const userData = await fetch(`https://api.github.com/users/${user}`)
        const newUser = await userData.json()

        if(newUser.name){
        const {avatar_url, name, bio, login} = newUser
        setCurrentUser({avatar_url, name, bio, login})

        const reposData = await fetch(`https://api.github.com/users/${user}/repos`)
        const newRepos = await reposData.json()

        if(newRepos.length){
            setRepos(newRepos)
        }
        }
    }
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
        handleGetData();
        }
    };

    const handleClearData = () => {
        setUser('');
        setCurrentUser(null);
        setRepos(null);
    };
    return(<>
        <Head title="Site API" />
        <Site>
            <Header />
            <div className="relative flex items-start justify-end conteudo">
                <img src={"https://raw.githubusercontent.com/naejshaw/react-github-finder/main/src/assets/background.png"} className="h-screen absolute left-0 background" alt="background app"/>
                <div className="min-h-screen w-3/5 mt-10 mr-10 md:mr-20 z-40 text-white info">
                    <div className="flex flex-col gap-1 md:flex-row justify-evenly">
                        <input
                        className="border border-solid border-[#999999] rounded-[5.5rem] w-[90%] mb-1 bg-transparent md:text-lg text-white p-1.5 md:p-2.5"
                        name="usuario" placeholder="@username"
                        value={user}
                        onChange={event => setUser(event.target.value)}
                        onKeyDown={handleKeyPress}
                        />
                        <div className="flex justify-center">
                            <button className="ml-2 border border-solid border-[#999999] rounded-5.5rem] mr-3 bg-[#203338] md:text-lg text-white p-1.5 md:p-2.5 rounded-[3.5rem] cursor-pointer" onClick={handleGetData}>Buscar</button>
                            <button className="border border-solid border-[#999999] rounded-5.5rem] mr-3 bg-[#203338] md:text-lg text-white p-1.5 md:p-2.5 rounded-[3.5rem] cursor-pointer" onClick={handleClearData}>Limpar</button>
                        </div>
                    </div>
                {currentUser?.name ? (<>
                    <div className="flex my-10 mx-0 text-[#999999] perfil">
                        <img src={currentUser.avatar_url} className="w-32 h-32 rounded-[50%] border-2 border-solid border-[#e5e5e5] mr-8 profile" alt="imagem de perfil"/>
                        <a href={"https://github.com/" + currentUser.login}>
                            <h3 className="text-2xl m-0">{currentUser.name}</h3>
                            <span className="block text-xs m-0">@{currentUser.login}</span>
                            <p className="text-xs m-0 mt-5">{currentUser.bio}</p>
                        </a>
                    </div>
                    <hr className="bg-[rgba(229, 229, 229, 0.2)] border border-solid border-[rgba(229, 229, 229, 0.2)]" />
                </>
                ): null}
                {repos?.length ? (

                    <div>
                        <h4 className="text-2xl md:text-3xl text-white my-3 mx-0 text-center repositorio">Repositórios</h4>
                        {repos.map(repo => (
                            <ItemList title={repo.name} description={repo.description} login={currentUser.login}/>
                        ))}
                    </div>
                ): null}
                </div>
            </div>
        </Site>
    </>);
}

function ItemList ({title, description, login}) {
    return (
        <a href={'https://github.com/' + login + '/' + title} className='my-6 mx-0 item-list'>
            <strong className="text-[#5398f5] text-xl md:text-2xl my-6 mx-0 capitalize">{title}</strong>
            <p className="text-[#999999] text-xs my-6 mx-0">{description}</p>
            <hr className="bg-[rgba(229, 229, 229, 0.2)] border border-solid border-[rgba(229, 229, 229, 0.2)]" />
        </a>
    )
  }

  const Header = () => {
    return (
      <header className="w-full mt-24 md:mt-32 h-12 bg-[#203338] flex items-center justify-center">
          <h1 className="text-2xl md:text-3xl text-white">GitFind</h1>
      </header>
    )
  }
