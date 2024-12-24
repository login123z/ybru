import './Button.scss';

export default function Btn({ children }) {
    return (
        <button className='btn'>
            {children} <span>→</span>
        </button>
    );
}


