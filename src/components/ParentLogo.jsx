import inficare from "../assets/inficare.png"  

const Parent = () => {
  return (
    <a href="https://www.inficare.com.my/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 hover:cursor-pointer">
      <img src={inficare} alt="Inficare Logo" className="w-20 h-20 object-contain" />
      <div className="flex flex-col">
        <h2 className="text-lg font-bold leading-tight">Inficare</h2>
        <h3 className="text-sm text-gray-500 leading-tight">Parent Company</h3>
      </div>
    </a>
  )
}

export default Parent