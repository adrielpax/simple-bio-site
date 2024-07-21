interface Props {
    children:React.ReactNode
    onClick:()=>void
}


const Button = ({ onClick, children }:Props) => {
    return (
      <button onClick={onClick} className="bg-blue-500 text-white py-2 px-4 rounded shadow-md">
        {children}
      </button>
    );
  };
  
export default Button;
  