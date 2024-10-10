import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import Site from "../../../Layouts/SiteLayout";
import { Datepicker, Navbar} from 'flowbite-react';
import DateP from '../../../Components/MyComponents/Datepicker'
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import imgPath1 from '../../../assets/carousel-1.svg';
import imgPath2 from '../../../assets/carousel-2.svg';
import imgPath3 from '../../../assets/carousel-3.svg';
import imgPath4 from '../../../assets/carousel-4.svg';
import imgPath5 from '../../../assets/carousel-5.svg';
import Accordion from "../../../Components/MyComponents/Accordion";
import Carousel from "../../../Components/MyComponents/Carousel";
export default function Booking()
{
    const images = [
        imgPath1,
        imgPath2,
        imgPath3,
        imgPath4,
        imgPath5
    ]
    const title = "Nome da Empresa";
    const { register, handleSubmit } = useForm();
    const [agendamento, setAgendamento] = useState({
        servico: '',
        numClientes: '',
        dataHora: '',
        formaPagamento: '',
        local: '',
    });

    const onSubmit = (data) => {
        setAgendamento(data);
        fetch('https://sua-api.com/agendamentos', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
          .then(response => response.json())
          .then(data => {
            console.log('Agendamento criado:', data);
          })
          .catch(error => {
            console.error('Erro ao criar agendamento:', error);
          });
    };
    return(<>
    <Site>
        <div id="page" className="bg-[#f0f0f0] mt-2 text-black">
            <div id="header" className="relative mt-24 py-6 px-4 w-full">
                <Navbar rounded className="flex justify-between w-full gap-8">
                    <Navbar.Brand as={Link} href="https://flowbite-react.com">
                        <img src="https://img.freepik.com/vetores-gratis/logotipo-detalhado-da-viagem_23-2148616611.jpg?w=740&t=st=1722001140~exp=1722001740~hmac=af528988d0faae8dfaa07fdaee51bf0702cda154c7f6767614fa9063c15f2c4e" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">{title}</span>
                    </Navbar.Brand>
                    <Navbar.Toggle className="md:hidden"/>
                    <div className="hidden list-none md:flex md:items-center md:gap-8">
                        <Navbar.Link className="cursor-pointer px-2 border-none">Sobre Nós</Navbar.Link>
                        <Navbar.Link className="cursor-pointer px-2 border-none">Acomodações</Navbar.Link>
                        <Navbar.Link className="cursor-pointer px-2 border-none">Passagens Aéreas</Navbar.Link>
                        <Navbar.Link className="cursor-pointer px-2 border-none">Pacotes</Navbar.Link>
                        <Navbar.Link className="cursor-pointer px-2 border-none">Contato</Navbar.Link>
                    </div>
                    <Navbar.Collapse className="md:hidden">
                        <Navbar.Link className="cursor-pointer">Sobre Nós</Navbar.Link>
                        <Navbar.Link className="cursor-pointer">Acomodações</Navbar.Link>
                        <Navbar.Link className="cursor-pointer">Passagens Aéreas</Navbar.Link>
                        <Navbar.Link className="cursor-pointer">Pacotes</Navbar.Link>
                        <Navbar.Link className="cursor-pointer">Contato</Navbar.Link>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            <div id="main" className="relative mt-1 py-6 px-auto h-4 w-full">
                <main className="flex flex-col w-full mx-4 p-4">
                    <div className="flex justify-evenly px-4 gap-4 max-h-8 w-full">
                        <img className="flex-1" src="" alt="Logo"></img>
                        <input className="flex-1 h-6 px-4 py-5 border border-black"></input>
                        <DateP className="flex-1 h-6"></DateP>
                    </div>
                </main>
            </div>
            <div id="form" className="relative mt-4 py-6 px-4 w-1/2 h-screen">
                <form className="flex flex-col gap-4 m-4 p-4" onSubmit={handleSubmit(onSubmit)}>
                    <FormControl fullWidth>
                        <InputLabel id="servico-label">Serviço</InputLabel>
                        <Select
                        labelId="servico-label"
                        id="servico"
                        label="Serviço"
                        {...register('servico')}
                        >
                        <MenuItem value="corte">Corte de cabelo</MenuItem>
                        <MenuItem value="barba">Corte de barba</MenuItem>
                        {/* Adicione mais opções de serviços */}
                        </Select>
                    </FormControl>
                    <TextField
                        label="Número de clientes"
                        type="number"
                        {...register('numClientes')}
                        fullWidth
                        margin="normal"
                    />
                    {/* Campos para data, hora, forma de pagamento e local */}
                    <Datepicker
                        selected={agendamento.dataHora}
                        onChange={(date) => setAgendamento({ ...agendamento, dataHora: date })}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        dateFormat="dd/MM/yyyy HH:mm"
                    />
                    <FormControl fullWidth>
                        <InputLabel id="formaPagamento-label">Forma de Pagamento</InputLabel>
                        <Select
                        labelId="formaPagamento-label"
                        id="formaPagamento"
                        label="Forma de Pagamento"
                        {...register('formaPagamento')}
                        >
                        <MenuItem value="dinheiro">Dinheiro</MenuItem>
                        <MenuItem value="cartao">Cartão</MenuItem>
                        {/* Adicione mais opções */}
                        </Select>
                    </FormControl>
                    <TextField
                        label="Local"
                        {...register('local')}
                        fullWidth
                        margin="normal"
                    />
                    <Button type="submit" variant="contained" color="primary">
                        Agendar
                    </Button>
                </form>
            </div>
            <div id="content" className="relative mt-4 py-6 px-2 mx-auto flex justify-center h-screen w-1/2">
                <Carousel images={images} />
            </div>
            <div id="footer" className="relative mt-32 pt-24 px-8 w-full">
                <Accordion />
            </div>
        </div>
    </Site>
    </>);
}
