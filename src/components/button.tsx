type ButtonProps = {
    onClick?: () => void
    label: React.ReactNode
}

function Button({onClick, label}: ButtonProps) {
    return <button onClick={onClick} className="border p-1 rounded shadow">
        {label}
    </button>
}

export default Button