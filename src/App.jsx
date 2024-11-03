import { useState } from 'react'
import './App.css'
import InputBox from './Components/InputBox'
import useCurrencyInfo from './hooks/useCurrencuIfo'

function App() {

  const [amount , setAmount] = useState(0)
  const [from , setFrom] = useState("usd")
  const [to , setTo] = useState("inr")
  const [convertedAmount , setconvertedAmount] = useState(0)

  const courrencyInfo = useCurrencyInfo(from) || {}
   
    
  const options = Object.keys(courrencyInfo)
   
  const Swap = () => {
      setFrom(to)
      setTo(from)
      setAmount(convertedAmount)
      setconvertedAmount(amount)
  }

  const convert = () => (
    setconvertedAmount( amount * courrencyInfo[to]) ,
    console.log(amount * courrencyInfo[to])
)

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('${"https://images.pexels.com/photos/20771159/pexels-photo-20771159/free-photo-of-black-and-white-christmas-balls-on-branch.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();// from jyare submit thay tyare koi addresss par jay chhe te atkava mate    
                        convert()
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount = {amount}
                            currencyOption={options}
                            onCurrencyChange={(currency) => setAmount(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount => setAmount(amount))}
                            
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={Swap}       
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount = {convertedAmount}
                            currencyOption={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDiable
                           
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg" >
                        Convert 
                    </button>
                </form>
            </div>
        </div>
    </div>
)
}

export default App
