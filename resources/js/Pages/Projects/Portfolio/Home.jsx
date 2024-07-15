import ResumeSection from "@/Components/MyComponents/ResumeSection";
import Site from "@/Layouts/SiteLayout";
import { Head, Link } from "@inertiajs/react";
import { Accordion } from "flowbite-react";

export default function Home()
{
    async function fetchProfileData(){
        const url = 'https://raw.githubusercontent.com/naejshaw/portfolio/main/data/profile.json';
        const response = await fetch(url)
        const profileData = await response.json()
        return profileData

    }
    function updateProfileInfo(profileData) {
        const photo = document.getElementById('profile.photo')
        photo.src = profileData.photo
        photo.alt = profileData.name

        const name = document.getElementById('profile.name')
        name.innerText = profileData.name

        const job = document.getElementById('profile.job')
        job.innerText = profileData.job

        const location = document.getElementById('profile.location')
        location.innerText = profileData.location

        const phone = document.getElementById('profile.phone')
        phone.innerText = profileData.phone
        phone.href = `https://wa.me/55${profileData.phone}`

        const email = document.getElementById('profile.email')
        email.innerText = profileData.email
        email.href = `mailto:${profileData.email}`
    }

    function updateSoftSkills(profileData) {
        const softSkills = document.getElementById('profile.skills.softSkills')
        softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li className="ml-8 p-2">${skill}</li>`).join('')
    }

    function updateHardSkills(profileData) {
        const hardSkills = document.getElementById('profile.skills.hardSkills')
        hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img width=44 height=44 className="my-0 mx-2" src="${skill.logo}" alt="${skill.name}" title="${skill.name}"/></li>`).join('')
    }

    function updateLanguages(profileData) {
        const languages = document.getElementById('profile.languages')
        languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('')
    }

    function updatePortfolio(profileData) {
        const portfolio = document.getElementById('profile.portfolio')
        portfolio.innerHTML = profileData.portfolio.map(project => {
            return `
                <li>
                    <h3 ${project.github ? 'className="flex items-center text-xl font-bold m-0 mb-2 before:content before:inline-block before:w-4 before:h-4 before:bg-no-repeat before:bg-contain github"' : ''}>${project.name}</h3>
                    <a className="text-[#fff] hover:underline" href="${project.url}" target="_blank">${project.url}</a>
                </li>
            `
        }).join('')
    }

    function updateProfessionalExperience(profileData) {
        const professionalExperience = document.getElementById('profile.professionalExperience')
        professionalExperience.innerHTML = profileData.professionalExperience.map(experience => {
            return `
                <li className="flex flex-col gap-8">
                    <h3 className="title">${experience.name}</h3>
                    <p className="period">${experience.period}</p>
                    <p className="">${experience.description}</p>
                </li>
            `
        }).join('')
    }

    function updateEducationalExperience(profileData) {
        const educationalExperience = document.getElementById('profile.educationalExperience')
        educationalExperience.innerHTML = profileData.educationalExperience.map(educationalExperience => {
            return `
                <li className="flex flex-col gap-8">
                    <h3 className="title">${educationalExperience.name}</h3>
                    <p className="period">${educationalExperience.period}</p>
                    <p>${educationalExperience.description}</p>
                </li>
            `
        }).join('')
    }

    (async () => {
        const profileData = await fetchProfileData()
        updateProfileInfo(profileData)
        updateSoftSkills(profileData)
        updateHardSkills(profileData)
        updateLanguages(profileData)
        updatePortfolio(profileData)
        updateProfessionalExperience(profileData)
        updateEducationalExperience(profileData)
    })()


    const acordeonTriggers = document.querySelectorAll('.acordeon .trigger')

    acordeonTriggers.forEach((trigger) => {
        trigger.addEventListener('click', (e) => {
            const acordeon = trigger.parentElement
            const isOpen = acordeon.classList.contains('open')

            if (isOpen) {
                acordeon.classList.remove('open')
            } else {
                acordeon.classList.add('open')
            }
        })
    })
    return(<>
        <Head title="Portfolio - Jean F R Almeida" />
        <Site>
            <main className="m-4 px-8 md:px-16 lg:px-32 py-28 main">
                <header className="flex flex-col items-center relative header">
                    <img src="https://raw.githubusercontent.com/naejshaw/portfolio/1f9b9a79206d5bc0ffeb9c714cc6594ff935eba5/assets/img/my-photo.png" alt="Foto de Perfil" className="w-48 h-48 rounded-full photo" id="profile.photo"/>

                    <h1 className="text-center title">
                        Olá, <br/>eu sou <span id="profile.name">Carregando...</span>
                    </h1>

                    <div className="flex flex-col items-start w-full information">
                        <p className="flex items-center m-2 text-lg before:content before:inline-block before:w-4 before:h-4 before:bg-no-repeat before:bg-contain before:mr-2 before:bg-[url('https://raw.githubusercontent.com/naejshaw/portfolio/1f9b9a79206d5bc0ffeb9c714cc6594ff935eba5/assets/img/icons/job.svg')] job" id="profile.job">Carregando...</p>
                        <p className="flex items-center m-2 text-lg before:content before:inline-block before:w-4 before:h-4 before:bg-no-repeat before:bg-contain before:mr-2 before:bg-[url('https://raw.githubusercontent.com/naejshaw/portfolio/1f9b9a79206d5bc0ffeb9c714cc6594ff935eba5/assets/img/icons/location.svg')] location" id="profile.location">Carregando...</p>
                        <p className="flex items-center m-2 text-lg before:content before:inline-block before:w-4 before:h-4 before:bg-no-repeat before:bg-contain before:mr-2 before:bg-[url('https://raw.githubusercontent.com/naejshaw/portfolio/1f9b9a79206d5bc0ffeb9c714cc6594ff935eba5/assets/img/icons/phone.svg')] phone">
                            <a className="text-[#fff] hover:underline" href="tel:(16) 9 9999-9999" id="profile.phone">Carregando...</a>
                        </p>
                        <p className="flex items-center m-2 text-lg before:content before:inline-block before:w-4 before:h-4 before:bg-no-repeat before:bg-contain before:mr-2 before:bg-[url('https://raw.githubusercontent.com/naejshaw/portfolio/1f9b9a79206d5bc0ffeb9c714cc6594ff935eba5/assets/img/icons/mail.svg')] email">
                            <a className="text-[#fff] hover:underline" href="mailto:ex@mail.com" id="profile.email">carregando@mail.com</a>
                        </p>
                    </div>
                </header>
                <Accordion>
                    <Accordion.Panel>
                        <ResumeSection title={"Skills"}>
                            <div className="p-4 content">
                                <div className="flex justify-between gap-16 skills">
                                    <section className="flex-1 flex flex-col gap-2 tools">
                                        <h3>Ferramentas:</h3>
                                        <ul className="justify-evenly items-center m-0 p-0 gap-2 list-none flex flex-col md:flex-row md:flex-wrap" id="profile.skills.hardSkills">
                                        </ul>
                                    </section>

                                    <section className="flex-1 flex flex-col gap-2 personal">
                                        <h3>Pessoal:</h3>
                                        <ul className="flex justify-start gap-8 list-disc items-center flex-wrap m-0 p-0" id="profile.skills.softSkills">
                                            <li className="ml-8 p-2">Carregando...</li>
                                            <li className="ml-8 p-2">Carregando...</li>
                                            <li className="ml-8 p-2">Carregando...</li>
                                        </ul>
                                    </section>
                                </div>
                            </div>
                        </ResumeSection>

                    </Accordion.Panel>
                    <Accordion.Panel>
                        <ResumeSection title={"Idiomas"}>
                            <div className="p-4 content">
                                <ul className="flex items-start flex-wrap gap-8 m-0 p-0 list-disc languages" id="profile.languages">
                                    <li className="flex items-center pr-4 font-bold before:content before:inline-block before:w-4 before:h-4 before:bg-no-repeat before:bg-contain before:bg-[url('https://raw.githubusercontent.com/naejshaw/portfolio/1f9b9a79206d5bc0ffeb9c714cc6594ff935eba5/assets/img/icons/check.svg')] before:mr-2">Carregando...</li>
                                </ul>
                            </div>
                        </ResumeSection>

                    </Accordion.Panel>
                    <Accordion.Panel>
                        <ResumeSection title={"Portfolio"}>
                        <div className="p-4 content">
                                <ul className="flex flex-col justify-start gap-4 w-full m-0 p-0 list-none portfolio" id="profile.portfolio">
                                </ul>
                            </div>
                        </ResumeSection>

                    </Accordion.Panel>
                    <Accordion.Panel>
                        <ResumeSection title={"Educação"}>
                            <div className="p-4  gap-4 content">
                                <ul className="flex flex-col m-0 p-0 list-none experience" id="profile.educationalExperience">
                                </ul>
                            </div>
                        </ResumeSection>

                    </Accordion.Panel>
                    <Accordion.Panel>
                        <ResumeSection title={"Experiência Profissional"}>
                            <div className="p-4  content">
                                <ul className="flex flex-col m-0 p-0 list-none experience" id="profile.professionalExperience">
                                </ul>
                            </div>
                        </ResumeSection>

                    </Accordion.Panel>
                </Accordion>

                <footer className="w-full flex justify-end items-center p-4">
                    <Link className="text-[#fff] hover:underline" href="https://www.dio.me/" target="_blank">
                        <img className="max-w-24" src="https://raw.githubusercontent.com/naejshaw/portfolio/1f9b9a79206d5bc0ffeb9c714cc6594ff935eba5/assets/img/dio.svg" alt="DIO"/>
                    </Link>
                </footer>
            </main>
        </Site>
    </>);
}
