import Site from "@/Layouts/SiteLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function Home()
{
    const [currentNumber, setCurrentNumber] = useState('0') ;
    const [firstNumber, setFirstNumber] = useState('0') ;
    const [operation, setOperation] = useState('') ;

    const handleOnClear = () => {
        setCurrentNumber('0');
        setFirstNumber('0');
        setOperation('');
    }
    const handleAddNumber = (num) => {
        setCurrentNumber((prev) => `${prev === '0' ? '' : prev}${num}`)
    }

    const handleSumNumbers = () => {
        if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0');
        setOperation('+');
        }else{
        const sum = Number(firstNumber) + Number(currentNumber);
        setCurrentNumber(String(sum))
        setOperation('')
        }
    }


    const handleMinusNumbers = () => {
        if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0');
        setOperation('-');
        }else{
        const minus = Number(firstNumber) - Number(currentNumber);
        setCurrentNumber(String(minus))
        setOperation('')
        }
    }

    const handleMultNumbers = () => {
        if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0');
        setOperation('*');
        }else{
        const multi = Number(firstNumber) * Number(currentNumber);
        setCurrentNumber(String(multi))
        setOperation('')
        }
    }

    const handleDivNumbers = () => {
        if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0');
        setOperation('/');
        }else{
        const div = Number(firstNumber) / Number(currentNumber);
        setCurrentNumber(String(div))
        setOperation('')
        }
    }

    const handleEquals = () => {
        if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
        switch(operation){
            case '+':
            handleSumNumbers();
            break;
            case '-':
            handleMinusNumbers();
            break;
            case '*':
            handleMultNumbers();
            break;
            case '/':
            handleDivNumbers();
            break;
            default:
            break;
        }
        }
    }
    return(<>
        <Head title="Calculator" />
        <Site>
            <div className="w-full h-screen bg-transparent flex items-center justify-center">
                <div className="bg-[#FFFFFF] w-11/12 sm:w-9/12 md:w-7/12 lg:w-6/12 border border-black">
                    <Input value={currentNumber}/>
                    <div className="flex items-center justify-center">
                        <Button label="0" onClick={() => handleAddNumber('0')} />
                        <Button label="*" onClick={handleMultNumbers} />
                        <Button label="/" onClick={handleDivNumbers} />
                        <Button label="C" onClick={handleOnClear} />
                    </div>
                    <div className="flex items-center justify-center">
                        <Button label="7" onClick={() => handleAddNumber('7')} />
                        <Button label="8" onClick={() => handleAddNumber('8')} />
                        <Button label="9" onClick={() => handleAddNumber('9')} />
                        <Button label="-" onClick={handleMinusNumbers} />
                    </div>
                    <div className="flex items-center justify-center">
                        <Button label="4" onClick={() => handleAddNumber('4')} />
                        <Button label="5" onClick={() => handleAddNumber('5')} />
                        <Button label="6" onClick={() => handleAddNumber('6')} />
                        <Button label="+" onClick={handleSumNumbers} />
                    </div>
                    <div className="flex items-center justify-center">
                        <Button label="1" onClick={() => handleAddNumber('1')} />
                        <Button label="2" onClick={() => handleAddNumber('2')} />
                        <Button label="3" onClick={() => handleAddNumber('3')} />
                        <Button label="=" onClick={handleEquals}/>
                    </div>
                </div>
            </div>
        </Site>
    </>);
}

const Button = ({label, onClick}) => {
    return (
      <div className="p-5 border border-solid border-[#cdcdcd] bg-[#1b3242] text-[#ffffff] text-2xl font-bold flex-1" onClick={onClick}>
        {label}
      </div>
    );
  }

  const Input = ({value}) => {
    return (
      <div className="w-full h-full border-black bg-[#202c35] flex items-center justify-end text-xl font-luckiestGuy">
        <input className="w-1/4 h-full bg-gray-100 border-0 flex flex-col items-end py-0 px-2.5 text-right text-xl text-[#000000]" disabled value={value}/>
      </div>
    );
  }
