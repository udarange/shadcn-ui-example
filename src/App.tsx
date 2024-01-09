import './App.css'
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group.tsx";

function App() {
    return (
        <>
            <div className="flex flex-col items-center bg-warning text-warning-foreground">
                <h1 className="uppercase">Vite + React</h1>
                <RadioGroup className="flex flex-wrap mb-4 mt-4">
                    <RadioGroup className="flex flex-wrap mb-4">
                        {['XXS', 'XS', 'S', 'M', 'L'].map((size) => (
                            <div key={size} className="flex items-center space-x-2">
                                <RadioGroupItem value={size} id={size}>
                                    {size}
                                </RadioGroupItem>
                            </div>
                        ))}
                    </RadioGroup>
                </RadioGroup>
            </div>
        </>
    )
}

export default App
