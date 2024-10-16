import Site from "../../../Layouts/SiteLayout";
import { useState } from "react";

export default function Home() {
    const [currentNumber, setCurrentNumber] = useState('0');
    const [firstNumber, setFirstNumber] = useState<string | null>(null);
    const [operation, setOperation] = useState<string | null>(null);

    const handleOnClear = () => {
        setCurrentNumber('0');
        setFirstNumber(null);
        setOperation(null);
    }

    const handleAddNumber = (num: string) => {
        setCurrentNumber((prev) => (prev === '0' ? num : prev + num));
    }

    const handleOperation = (op: string) => {
        if (firstNumber === null) {
            setFirstNumber(currentNumber);
            setCurrentNumber('0');
        } else {
            const result = calculate(firstNumber, currentNumber, operation);
            setCurrentNumber(String(result));
            setFirstNumber(null);
        }
        setOperation(op);
    }

    const calculate = (num1: string, num2: string, op: string | null) => {
        const n1 = Number(num1);
        const n2 = Number(num2);
        switch (op) {
            case '+':
                return n1 + n2;
            case '-':
                return n1 - n2;
            case '*':
                return n1 * n2;
            case '/':
                return n1 / n2;
            default:
                return n2;
        }
    }

    const handleEquals = () => {
        if (firstNumber !== null && operation) {
            const result = calculate(firstNumber, currentNumber, operation);
            setCurrentNumber(String(result));
            setFirstNumber(null);
            setOperation(null);
        }
    }

    return (
        <Site>
            <div className="w-full h-screen bg-transparent flex items-center justify-center">
                <div className="bg-[#FFFFFF] w-1/2 border border-black">
                    <Input value={currentNumber} />
                    <div className="grid grid-cols-4 gap-2 p-4">
                        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', 'C', '=', '+'].map((label) => (
                            <Button key={label} label={label} onClick={() => {
                                if (label === 'C') handleOnClear();
                                else if (label === '=') handleEquals();
                                else if (['+', '-', '*', '/'].includes(label)) handleOperation(label);
                                else handleAddNumber(label);
                            }} />
                        ))}
                    </div>
                </div>
            </div>
        </Site>
    );
}

const Button = ({ label, onClick }: IButton) => {
    return (
        <div className="p-5 border border-solid border-[#cdcdcd] bg-[#1b3242] text-[#ffffff] text-2xl font-bold flex items-center justify-center cursor-pointer" onClick={onClick}>
            {label}
        </div>
    );
}

interface IButton {
    label: string;
    onClick: () => void;
}

const Input = ({ value }: IInput) => {
    return (
        <div className="w-full h-16 border-black bg-[#202c35] flex items-center justify-end">
            <input className="w-full h-full px-2 bg-gray-100 border-0 text-right text-xl text-[#000000]" disabled value={value} />
        </div>
    );
}

interface IInput {
    value: string;
}